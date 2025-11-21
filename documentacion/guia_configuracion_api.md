# Guía de Configuración de APIs: Stripe y GoHighLevel

Este documento detalla paso a paso cómo obtener y configurar las credenciales necesarias para que el sistema ClicUp funcione correctamente.

---

## 1. Stripe (Pagos)

### A. Obtener Claves de API (API Keys)
1.  Inicia sesión en tu [Dashboard de Stripe](https://dashboard.stripe.com/).
2.  Asegúrate de estar en **Modo de prueba (Test Mode)** para el desarrollo (switch en la parte superior derecha).
3.  Ve a **Desarrolladores** > **Claves de API**.
4.  Copia la **Clave publicable** (`pk_test_...`) y pégala en tu `.env.local` como `STRIPE_PUBLIC_KEY`.
5.  Haz clic en "Revelar clave secreta", copia la **Clave secreta** (`sk_test_...`) y pégala como `STRIPE_SECRET_KEY`.

### B. Crear Productos y Precios
Necesitas crear los productos en Stripe para obtener sus IDs (`price_...`).

1.  Ve a **Catálogo de productos**.
2.  **Producto 1: ClicUp Starter**
    *   Nombre: "ClicUp Starter"
    *   Precio: $27.00 USD
    *   Tipo: Pago único
    *   **Copiar ID del Precio** (ej. `price_1Pxyz...`) -> `STRIPE_PRICE_ID_STARTER`
3.  **Producto 2: Pack Turbo (Order Bump)**
    *   Nombre: "Pack Turbo de Conversión"
    *   Precio: $17.00 USD
    *   Tipo: Pago único
    *   **Copiar ID del Precio** -> `STRIPE_PRICE_ID_BUMP`
4.  **Producto 3: Acelerador Pro (Upsell)**
    *   Nombre: "Acelerador Pro 30 días"
    *   Precio: $97.00 USD
    *   Tipo: Pago único
    *   **Copiar ID del Precio** -> `STRIPE_PRICE_ID_UPSELL`
5.  **Producto 4: ClicUp Pro (Suscripción)**
    *   Nombre: "ClicUp Pro Mensual"
    *   Precio: $297.00 USD
    *   Tipo: Recurrente (Mensual)
    *   **Copiar ID del Precio** -> `STRIPE_PRICE_ID_PRO_MONTHLY`

### C. Configurar Webhooks
Los webhooks permiten que Stripe avise a tu aplicación cuando ocurre un pago.

1.  Ve a **Desarrolladores** > **Webhooks**.
2.  **Para Desarrollo Local:**
    *   Necesitas usar Stripe CLI. Ejecuta en tu terminal:
        ```bash
        stripe listen --forward-to localhost:3000/api/webhooks/stripe
        ```
    *   La terminal te mostrará un "Webhook Signing Secret" (`whsec_...`).
    *   Cópialo a tu `.env.local` como `STRIPE_WEBHOOK_SECRET`.
3.  **Para Producción (Vercel):**
    *   Haz clic en "Añadir punto de conexión".
    *   URL del punto de conexión: `https://tu-dominio.vercel.app/api/webhooks/stripe`
    *   Eventos a escuchar (¡Importante!):
        *   `checkout.session.completed`
        *   `payment_intent.succeeded`
        *   `invoice.payment_succeeded`
        *   `customer.subscription.created`
        *   `customer.subscription.deleted`
    *   Copia el "Secreto de firma" (`whsec_...`) a las variables de entorno en Vercel.

---

## 2. GoHighLevel (CRM)

### A. Obtener API Key (Nivel Agencia)
*Nota: GHL está transicionando a OAuth, pero para integraciones internas rápidas, la API Key v2 sigue siendo común. Si usas subcuentas, el método más directo es:*

1.  Ve a **Settings** (Configuración) > **Business Profile**.
2.  Busca el **General Information**.
3.  Si no ves una API Key directa, ve a **Settings** > **API Keys** (si tienes permisos de agencia).
4.  Copia la API Key y pégala en `.env.local` como `GHL_API_KEY`.

### B. Obtener Location ID
1.  Entra a la subcuenta de ClicUp en GHL.
2.  Ve a **Settings** > **Business Profile**.
3.  Copia el **Location ID** (ej. `C2...`) y pégalo como `GHL_LOCATION_ID`.

### C. Crear Campo Personalizado (Custom Field)
Necesitamos guardar el ID de cliente de Stripe en GHL para futuros cargos (upsells).

1.  Ve a **Settings** > **Custom Fields**.
2.  Haz clic en "Add Field".
3.  Tipo: **Text** (Single Line).
4.  Nombre: `Stripe Customer ID`.
5.  Guarda el campo.
6.  Copia la "Key" del campo (generalmente se ve como `contact.stripe_customer_id` o un ID alfanumérico si usas la API nueva). Pégalo como `GHL_CUSTOM_FIELD_STRIPE_ID`.

---

## 3. Verificación Final

Tu archivo `.env.local` debería verse así:

```env
# Stripe
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# IDs de Precios
STRIPE_PRICE_ID_STARTER=price_...
STRIPE_PRICE_ID_BUMP=price_...
STRIPE_PRICE_ID_UPSELL=price_...
STRIPE_PRICE_ID_PRO_MONTHLY=price_...

# GHL
GHL_API_KEY=...
GHL_LOCATION_ID=...
GHL_CUSTOM_FIELD_STRIPE_ID=...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
