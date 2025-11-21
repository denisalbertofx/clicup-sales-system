# 🛠️ Guía Final de Configuración: Stripe y GoHighLevel

Esta guía te llevará paso a paso para obtener las claves necesarias y configurar tu sistema.

---

## 1. Configuración de Stripe

### A. Obtener Claves de API (API Keys)
1.  Inicia sesión en tu [Dashboard de Stripe](https://dashboard.stripe.com/).
2.  Asegúrate de estar en **"Test Mode"** (Modo de Prueba) activando el interruptor en la esquina superior derecha (color naranja).
3.  Ve a **Developers (Desarrolladores) > API Keys**.
4.  Copia la **Publishable Key** (empieza con `pk_test_...`).
5.  Copia la **Secret Key** (empieza con `sk_test_...`).
    *   *Guárdalas temporalmente en un bloc de notas.*

### B. Crear Productos y Precios
Necesitas crear dos productos para que el sistema sepa qué cobrar.

**Producto 1: Oferta Starter**
1.  Ve a **Products (Productos) > Add Product**.
2.  **Name:** `Sistema de Ventas Starter`
3.  **Price:** `27.00` USD.
4.  **Payment:** One-time (Pago único).
5.  Dale a **Save product**.
6.  En la página del producto, busca la sección "Pricing" y copia el **API ID** del precio.
    *   Debe empezar con `price_...` (Ej: `price_1Qxyz...`).
    *   *Este será tu `STRIPE_PRICE_ID_STARTER`.*

**Producto 2: Upsell (Acelerador Pro)**
1.  Repite el proceso.
2.  **Name:** `Acelerador Pro (Upsell)`
3.  **Price:** `97.00` USD.
4.  **Payment:** One-time.
5.  Copia el **API ID** del precio (`price_...`).
    *   *Este será tu `STRIPE_PRICE_ID_UPSELL`.*

### C. Configurar Webhook (Para sincronizar con GHL)
1.  Ve a **Developers > Webhooks**.
2.  Haz clic en **Add Endpoint**.
3.  **Endpoint URL:**
    *   *Si estás en local:* Necesitas usar Stripe CLI (ver abajo) o ngrok.
    *   *Si ya desplegaste (Vercel):* `https://tu-dominio.com/api/webhooks/stripe`
4.  **Events to send:** Selecciona estos dos eventos:
    *   `checkout.session.completed`
    *   `payment_intent.succeeded`
5.  Haz clic en **Add endpoint**.
6.  En la pantalla siguiente, busca "Signing secret" y dale a **Reveal**.
    *   Copia el secreto que empieza con `whsec_...`.
    *   *Este será tu `STRIPE_WEBHOOK_SECRET`.*

> **💡 Nota para Localhost:** Si estás probando en tu computadora, la forma más fácil de obtener el Webhook Secret es instalando [Stripe CLI](https://stripe.com/docs/stripe-cli) y ejecutando:
> `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
> Esto te dará un `whsec_...` temporal para pruebas.

---

## 2. Configuración de GoHighLevel (GHL)

### A. Obtener Location ID
1.  Entra a tu cuenta de GoHighLevel (o LeadConnector).
2.  Ve a **Settings > Business Info**.
3.  Copia el **Location ID** (una cadena de letras y números).

### B. Obtener API Key
*Nota: GHL está moviéndose a OAuth, pero para integraciones simples aún se usan API Keys en muchos casos.*

1.  Ve a **Settings > Business Info**.
2.  Busca el campo **API Key**.
    *   Si no lo ves, ve a **Settings > API Keys** (si existe en tu versión).
3.  Copia la clave (empieza usualmente con `pit-` o es una cadena larga).

---

## 3. Dónde poner estas claves (El paso final)

No necesitas enviarme las claves por el chat (es más seguro que las tengas tú). Sigue estos pasos:

1.  En tu proyecto (en VS Code o tu editor), busca el archivo llamado `.env.template` que creé.
2.  Haz una copia de ese archivo y renómbralo a `.env.local`.
    *   *El archivo `.env.local` es ignorado por Git, así que tus claves están seguras.*
3.  Abre `.env.local` y pega los valores que obtuviste arriba:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_... (Tu clave secreta)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (Tu clave pública)
STRIPE_WEBHOOK_SECRET=whsec_... (Tu secreto de webhook)

# Productos Stripe
STRIPE_PRICE_ID_STARTER=price_... (ID del producto de $27)
STRIPE_PRICE_ID_UPSELL=price_... (ID del producto de $97)

# GoHighLevel
GHL_API_KEY=... (Tu API Key de GHL)
GHL_LOCATION_ID=... (Tu Location ID)
```

4.  Guarda el archivo.
5.  Reinicia tu servidor de desarrollo (`Ctrl+C` y luego `npm run dev`) para que cargue las nuevas variables.

---

## 4. Verificación Rápida

Una vez tengas el `.env.local` listo:

1.  Ve a `http://localhost:3000`.
2.  Llena el formulario del Lead Magnet.
3.  Deberías ver el contacto creado en tu GoHighLevel con el tag `Lead_Magnet_Limpieza`.

¡Eso es todo! Tu sistema estará conectado y listo para vender. 🚀
