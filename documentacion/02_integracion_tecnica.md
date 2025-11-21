# Documentación de Integración Técnica: Next.js + Stripe + GHL

## 1. Introducción

Este documento proporciona una guía técnica detallada para integrar el frontend de Next.js con los servicios de Stripe para pagos y GoHighLevel (GHL) para CRM y automatización. Seguir estos pasos permitirá implementar el flujo de ventas completo de ClicUp, incluyendo el 1-click upsell.

## 2. Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente:

- **Cuenta de Stripe:** Activada y lista para procesar pagos.
- **Cuenta de GoHighLevel:** Con acceso de agencia para poder generar claves de API.
- **Entorno de desarrollo de Next.js:** Un proyecto de Next.js 13+ (App Router) listo.
- **Node.js:** Versión 18 o superior.
- **Stripe CLI:** Instalada para pruebas locales de webhooks.

## 3. Configuración de Stripe

### 3.1. Creación de Productos y Precios

En tu Dashboard de Stripe, ve a **Productos** y crea los siguientes productos con sus respectivos precios. Asegúrate de que sean de tipo **"Pago único"** para los productos de un solo pago y **"Recurrente"** para la suscripción.

| Producto | Tipo | Precio (USD) | ID del Precio (Ejemplo) |
| :--- | :--- | :--- | :--- |
| ClicUp Starter (Limpieza) | Pago único | $27.00 | `price_1P...` |
| Pack Turbo de Conversión | Pago único | $17.00 | `price_1P...` |
| Acelerador Pro 30 días | Pago único | $97.00 | `price_1P...` |
| ClicUp Pro (Suscripción) | Recurrente | $297.00 / mes | `price_1P...` |

**Importante:** Guarda los IDs de los precios, los necesitarás en el backend.

### 3.2. Obtención de Claves de API

Ve a **Desarrolladores > Claves de API** en tu Dashboard de Stripe. Necesitarás:

- **Clave publicable:** (Ej: `pk_test_...`)
- **Clave secreta:** (Ej: `sk_test_...`)

### 3.3. Configuración del Webhook

1.  Ve a **Desarrolladores > Webhooks**.
2.  Haz clic en **"Añadir un punto de conexión"**.
3.  **URL del punto de conexión:** `https://starter.goclicup.com/api/webhooks/stripe` (en producción). Para desarrollo local, usarás la URL que te proporcione la Stripe CLI.
4.  **Eventos a escuchar:** Selecciona los siguientes eventos:
    - `checkout.session.completed`
    - `payment_intent.succeeded`
    - `customer.subscription.created`
    - `invoice.payment_succeeded`
5.  Haz clic en **"Añadir punto de conexión"**.
6.  Una vez creado, revela el **Secreto de firma** (Ej: `whsec_...`) y guárdalo.

## 4. Configuración de GoHighLevel (GHL)

### 4.1. Obtención de Clave de API y Location ID

1.  Ve a tu vista de Agencia en GHL.
2.  Ve a **Settings > API Keys**.
3.  Copia tu **"Agency API Key"**.
4.  Para obtener el **Location ID**, ve a la sub-cuenta que usarás para ClicUp y mira la URL. Será algo como `https://app.gohighlevel.com/v2/location/A1B2c3d4E5f6G7h8I9j0/dashboard`. El Location ID es `A1B2c3d4E5f6G7h8I9j0`.

### 4.2. Creación de Campos Personalizados

1.  En tu sub-cuenta, ve a **Settings > Custom Fields**.
2.  Crea un nuevo campo de texto llamado `Stripe Customer ID`. Guarda el `key` del campo (ej: `stripe_customer_id`), lo necesitarás para la API.

## 5. Configuración del Entorno de Next.js

### 5.1. Instalación de Librerías

```bash
npm install stripe axios
```

### 5.2. Variables de Entorno

Crea un archivo `.env.local` en la raíz de tu proyecto de Next.js y añade las siguientes claves:

```
# Stripe
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Precios de Stripe
STRIPE_PRICE_ID_STARTER=price_1P...
STRIPE_PRICE_ID_BUMP=price_1P...
STRIPE_PRICE_ID_UPSELL=price_1P... # No se usa directamente, pero es bueno tenerlo
STRIPE_PRICE_ID_PRO_MONTHLY=price_1P...

# GoHighLevel
GHL_API_KEY=tu_agency_api_key
GHL_LOCATION_ID=tu_location_id
GHL_CUSTOM_FIELD_STRIPE_ID=key_del_campo_personalizado

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000 # En desarrollo
# NEXT_PUBLIC_APP_URL=https://starter.goclicup.com # En producción
```

## 6. Implementación de API Routes en Next.js

A continuación se muestra el código para cada endpoint de la API que necesitarás en tu backend de Next.js.

### 6.1. API Wrapper para GHL

Para mantener el código limpio, crea un archivo helper para la API de GHL (ej: `lib/ghl.js`):

```javascript
// lib/ghl.js
import axios from 'axios';

const ghlApi = axios.create({
  baseURL: 'https://services.leadconnectorhq.com/contacts/',
  headers: {
    'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
    'Version': '2021-07-28',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const createGHLContact = async (contactData) => {
  try {
    const response = await ghlApi.post('/', {
      ...contactData,
      locationId: process.env.GHL_LOCATION_ID,
      source: 'ClicUp Funnel'
    });
    return response.data.contact;
  } catch (error) {
    console.error('Error creating GHL contact:', error.response?.data);
    return null;
  }
};

export const updateGHLContact = async (contactId, updateData) => {
  try {
    const response = await ghlApi.put(`/${contactId}`, updateData);
    return response.data.contact;
  } catch (error) {
    console.error('Error updating GHL contact:', error.response?.data);
    return null;
  }
};

export const getGHLContactByEmail = async (email) => {
    try {
        const response = await ghlApi.get(`/lookup?email=${email}`);
        return response.data.contacts[0] || null;
    } catch (error) {
        console.error('Error getting GHL contact by email:', error.response?.data);
        return null;
    }
};
```

### 6.2. Endpoint de Checkout (`/api/checkout`)

Este endpoint crea la sesión de Stripe Checkout para el Starter + Order Bump.

```javascript
// app/api/checkout/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { email, addBump } = await req.json();

  const line_items = [
    { price: process.env.STRIPE_PRICE_ID_STARTER, quantity: 1 },
  ];

  if (addBump) {
    line_items.push({ price: process.env.STRIPE_PRICE_ID_BUMP, quantity: 1 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: email, // Opcional, pero recomendado
      customer_creation: 'always', // MUY IMPORTANTE
      saved_payment_method_options: { // MUY IMPORTANTE
        payment_method_save: 'enabled',
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/upsell?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
```

### 6.3. Endpoint de Upsell 1-Click (`/api/upsell`)

Este endpoint realiza el cargo del upsell usando el método de pago guardado.

```javascript
// app/api/upsell/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { sessionId } = await req.json();

  try {
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (!checkoutSession.customer || !checkoutSession.setup_intent) {
      throw new Error('Customer or setup_intent not found.');
    }

    const setupIntent = await stripe.setupIntents.retrieve(checkoutSession.setup_intent);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 9700, // $97.00
      currency: 'usd',
      customer: checkoutSession.customer,
      payment_method: setupIntent.payment_method,
      off_session: true,
      confirm: true,
      description: 'ClicUp - Acelerador Pro 30 días',
    });

    return new Response(JSON.stringify({ success: true, paymentIntentId: paymentIntent.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
```

### 6.4. Endpoint de Webhooks (`/api/webhooks/stripe`)

Este es el endpoint más crítico. Recibe, verifica y procesa todos los eventos de Stripe.

```javascript
// app/api/webhooks/stripe/route.js
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { createGHLContact, updateGHLContact, getGHLContactByEmail } from '@/lib/ghl';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Procesar el evento
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleted(event.data.object);
      break;
    case 'payment_intent.succeeded':
      await handlePaymentIntentSucceeded(event.data.object);
      break;
    // Añadir más casos para suscripciones...
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}

async function handleCheckoutCompleted(session) {
  const customerEmail = session.customer_details.email;
  const stripeCustomerId = session.customer;
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
  const hasBump = lineItems.data.some(item => item.price.id === process.env.STRIPE_PRICE_ID_BUMP);

  let contact = await getGHLContactByEmail(customerEmail);
  const tags = ['Starter_Buyer'];
  if (hasBump) tags.push('Bump_TurboPack');

  const contactData = {
    email: customerEmail,
    tags: tags,
    customFields: [
      { key: process.env.GHL_CUSTOM_FIELD_STRIPE_ID, value: stripeCustomerId }
    ]
  };

  if (contact) {
    await updateGHLContact(contact.id, { tags: [...contact.tags, ...tags], ... });
  } else {
    await createGHLContact(contactData);
  }
  
  // TODO: Disparar workflow en GHL para entregar assets del Starter
}

async function handlePaymentIntentSucceeded(paymentIntent) {
  if (paymentIntent.amount === 9700 && paymentIntent.description.includes('Acelerador Pro')) {
    const stripeCustomerId = paymentIntent.customer;
    const charge = paymentIntent.latest_charge;
    const customerEmail = charge.billing_details.email;

    let contact = await getGHLContactByEmail(customerEmail);
    if (contact) {
      await updateGHLContact(contact.id, { tags: [...contact.tags, 'Multiplier_Buyer'] });
      // TODO: Disparar workflow en GHL para agendar onboarding
    }
  }
}
```

## 7. Pruebas Locales

1.  Inicia tu aplicación de Next.js: `npm run dev`.
2.  En otra terminal, inicia la escucha de Stripe CLI:

    ```bash
    stripe listen --forward-to localhost:3000/api/webhooks/stripe
    ```

3.  La CLI te dará un secreto de webhook para pruebas locales (ej: `whsec_...`). **Usa este secreto en tu `.env.local` mientras pruebas**.
4.  Dispara eventos de prueba:

    ```bash
    # Simula la compra del Starter
    stripe trigger checkout.session.completed

    # Simula la compra del Upsell (necesitarás un Payment Intent real primero)
    # Es más fácil probar el flujo de upsell directamente en la UI
    ```

Siguiendo esta guía, tendrás una integración robusta y funcional que conecta tu embudo de ventas en Next.js con Stripe y GHL de manera profesional y escalable.
