# Solución de Errores Comunes y Riesgos de Implementación

Este documento analiza los posibles puntos de falla técnica en la implementación del sistema de ventas automatizado y cómo prevenirlos o solucionarlos.

---

## 🔴 Riesgo Crítico 1: Fallo en el Upsell 1-Click

**El Problema:**
El usuario compra el Starter, pero al hacer clic en "Agregar Acelerador Pro" ($97), el pago falla o Stripe pide la tarjeta de nuevo.

**Causa Raíz:**
Stripe no guardó el método de pago correctamente durante la primera compra (Starter), o no se configuró como "off-session" (pago sin presencia del usuario).

**Solución Técnica:**
1.  **En el Checkout Inicial (`/api/checkout`):**
    Debes asegurarte de pasar estos parámetros exactos al crear la sesión:
    ```javascript
    payment_intent_data: {
      setup_future_usage: 'off_session', // CRÍTICO: Permite cargos futuros sin el usuario
    }
    // O si usas mode: 'payment' con customer_creation: 'always':
    saved_payment_method_options: {
      payment_method_save: 'enabled',
    }
    ```
2.  **En el Upsell (`/api/upsell`):**
    Al crear el `PaymentIntent`, debes usar el `customer_id` y el `payment_method_id` recuperados de la sesión anterior, y establecer:
    ```javascript
    off_session: true,
    confirm: true
    ```

**Prevención:**
Probar el flujo completo en modo Test de Stripe antes de ir a producción. Verificar en el Dashboard de Stripe que el "Customer" tiene una tarjeta guardada después de la compra del Starter.

---

## 🔴 Riesgo Crítico 2: Webhooks no disparan acciones en GHL

**El Problema:**
El cliente paga en Stripe, pero no recibe el correo de bienvenida ni se crea el contacto en GHL.

**Causa Raíz:**
1.  El Webhook de Stripe falló (error 500).
2.  La firma del Webhook (`STRIPE_WEBHOOK_SECRET`) es incorrecta.
3.  La API de GHL rechazó la petición (ej. API Key inválida).

**Solución Técnica:**
1.  **Verificar Firma:** Asegúrate de que el secreto en `.env.local` coincida exactamente con el de Stripe CLI (local) o el Dashboard (producción). Son diferentes.
2.  **Manejo de Errores Robusto:** En `api/webhooks/stripe`, envuelve la llamada a GHL en un `try/catch`. Si GHL falla, **no devuelvas error 500 a Stripe** inmediatamente, o Stripe reintentará infinitamente. Mejor registra el error (console.error) y devuelve 200, pero guarda el fallo en una base de datos o log para reintentar manualmente.
3.  **Idempotencia:** Stripe puede enviar el mismo evento dos veces. Asegúrate de que tu lógica de "Crear Contacto" verifique si el contacto ya existe (por email) antes de intentar crearlo de nuevo, usando `getGHLContactByEmail`.

---

## 🟠 Riesgo Medio: API de GHL "Rate Limiting"

**El Problema:**
Si tienes un pico de ventas (ej. lanzas ads), GHL podría bloquear tus peticiones por exceso de tráfico.

**Solución:**
La API v2 de GHL es bastante permisiva, pero si escalas mucho:
1.  Implementa una cola de reintentos (retry logic) con "exponential backoff" en `lib/ghl.ts`.
2.  Si la API devuelve error 429 (Too Many Requests), espera 1 segundo y reintenta.

---

## 🟠 Riesgo Medio: Usuario cierra la pestaña antes del Upsell

**El Problema:**
El usuario paga el Starter en Stripe, pero cierra la pestaña antes de ser redirigido a tu página de `/upsell`.

**Consecuencia:**
El usuario compró, pero tu frontend no sabe que la compra ocurrió, por lo que no puedes mostrarle el upsell (aunque ya perdió la oportunidad).

**Solución:**
Confía **siempre** en los Webhooks, no en la redirección del frontend.
*   **Frontend:** Solo sirve para mostrar la oferta.
*   **Webhook (`checkout.session.completed`):** Es la fuente de la verdad. Este webhook debe ser el encargado de dar acceso al Starter y enviar el email de bienvenida, independientemente de si el usuario vio la página de gracias o no.

---

## 🟡 Riesgo Menor: Diferencias de Moneda o Montos

**El Problema:**
El Upsell falla porque el monto ($97.00) no coincide con lo que Stripe espera (9700 centavos).

**Solución:**
Stripe siempre usa la unidad menor de la moneda (centavos para USD).
*   $97.00 USD = `9700` (integer).
*   Nunca envíes decimales (`97.00`) a la API de Stripe.

---

## Checklist de Seguridad Pre-Lanzamiento

1.  [ ] ¿Las claves de Stripe en `.env.local` son las de **Live Mode**?
2.  [ ] ¿El Webhook en el Dashboard de Stripe apunta a la URL de producción (`https://.../api/webhooks/stripe`)?
3.  [ ] ¿El `STRIPE_WEBHOOK_SECRET` en Vercel coincide con el del Dashboard de producción?
4.  [ ] ¿Has probado el flujo de "Tarjeta Rechazada" en el Upsell? (Stripe Test Cards tiene números para simular esto).
