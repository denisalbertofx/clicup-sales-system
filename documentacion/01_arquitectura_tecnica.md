# Arquitectura Técnica del Sistema ClicUp

## 1. Introducción

Este documento describe la arquitectura técnica completa para el sistema de ventas automatizado de ClicUp, diseñado para el nicho de **compañías de limpieza**. La arquitectura se basa en un stack híbrido y desacoplado que aprovecha las fortalezas de cada tecnología:

- **Next.js:** Para un frontend moderno, rápido y con diseño 100% personalizable.
- **Stripe:** Para un procesamiento de pagos seguro, robusto y que permite 1-click upsells reales.
- **GoHighLevel (GHL):** Como el motor de CRM y automatización de marketing para la gestión de clientes y la entrega de servicios.

El objetivo es crear un sistema escalable, fácil de mantener y que ofrezca una experiencia de usuario fluida desde la captación del lead hasta la conversión en cliente recurrente.

## 2. Componentes y Roles

| Componente | Rol Principal | Tecnologías Clave |
| :--- | :--- | :--- |
| **Frontend (Next.js)** | - Páginas de ventas (Landing, VSL, etc.)<br>- Interfaz de usuario y experiencia de compra<br>- Captura de datos inicial | - Next.js App Router<br>- React Server Components<br>- Tailwind CSS / Shadcn UI |
| **Backend (Next.js API)** | - Lógica de negocio<br>- Orquestación de pagos con Stripe<br>- Comunicación con la API de GHL<br>- Manejo de webhooks de Stripe | - Next.js API Routes<br>- Stripe Node.js SDK<br>- GHL API (via `fetch` o `axios`) |
| **Pagos (Stripe)** | - Procesamiento de pagos (únicos y recurrentes)<br>- Gestión de clientes y métodos de pago<br>- Envío de webhooks para notificar eventos | - Stripe Checkout<br>- Payment Intents API<br>- Customer API<br>- Webhooks |
| **CRM (GoHighLevel)** | - Almacenamiento y gestión de contactos<br>- Ejecución de automatizaciones (emails, SMS)<br>- Gestión de pipelines de ventas<br>- Agendamiento de citas<br>- Entrega de snapshots y acceso | - GHL API<br>- Workflows (Automatizaciones)<br>- Calendarios<br>- Pipelines |

## 3. Diagrama de Arquitectura

El siguiente diagrama ilustra el flujo de datos y la interacción entre los componentes del sistema.

```mermaid
graph TD
    subgraph Usuario
        A[Anuncio/Tráfico Frío] --> B(Página Lead Magnet);
        B --> C{Formulario Auditoría};
        C --> D(Página de Ventas Starter);
        D --> E{Checkout Starter + Bump};
        E --> F(Página Upsell 1-Click);
        F --> G{Botón "Sí, agregar"};
        F --> H(Página de Onboarding);
        G --> H;
    end

    subgraph "Frontend (Next.js)"
        B -- Muestra --> Usuario;
        C -- Captura datos --> I[API Route: /api/lead];
        D -- Muestra --> Usuario;
        E -- Inicia pago --> J[API Route: /api/checkout];
        F -- Muestra --> Usuario;
        G -- Inicia pago --> K[API Route: /api/upsell];
        H -- Muestra --> Usuario;
    end

    subgraph "Backend (Next.js + Stripe + GHL)"
        I -- Crea Contacto --> L[GHL API];
        J -- Crea Checkout Session --> M[Stripe API];
        M -- Redirige a --> E;
        E -- Pago exitoso --> N[Webhook: checkout.session.completed];
        K -- Crea Payment Intent --> M;
        M -- Cargo exitoso --> O[Webhook: payment_intent.succeeded];
        N --> P[API Route: /api/webhooks/stripe];
        O --> P;
        P -- Crea/Actualiza Contacto --> L;
        P -- Dispara Automatización --> L;
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style L fill:#9f9,stroke:#333,stroke-width:2px
    style M fill:#99f,stroke:#333,stroke-width:2px
```

## 4. Flujo de Datos Detallado

### Paso 1: Captura de Lead Magnet (Auditoría GHL)
1.  **Usuario:** Aterriza en `starter.goclicup.com` y solicita la auditoría gratuita.
2.  **Next.js (Frontend):** El formulario de la página envía los datos (nombre, email, web) a la API de Next.js (`/api/lead`).
3.  **Next.js (Backend):**
    - Llama a la API de GHL para crear un nuevo contacto con el tag `Lead_Magnet_Limpieza`.
    - Dispara un workflow en GHL (vía API o tag) que genera la auditoría y la envía por email.
4.  **Usuario:** Es redirigido a la página de agradecimiento, que funciona como puente a la oferta del Starter.

### Paso 2: Compra del Starter ($27) + Order Bump ($17)
1.  **Usuario:** Desde la página de ventas del Starter, hace clic en "Comprar Ahora".
2.  **Next.js (Frontend):** Llama a la API de Next.js (`/api/checkout`) para iniciar el pago.
3.  **Next.js (Backend):**
    - Crea una sesión de **Stripe Checkout**.
    - **Clave:** Configura `customer_creation: 'always'` y `saved_payment_method_options: { payment_method_save: 'enabled' }` para crear un `Customer` en Stripe y guardar el método de pago de forma segura.
    - Define los `line_items` para el Starter y el Order Bump.
    - Redirige al usuario a la página de Stripe Checkout.
4.  **Usuario:** Completa el pago en la página de Stripe.

### Paso 3: Webhook de Compra Inicial
1.  **Stripe:** Al completarse el pago, envía un evento `checkout.session.completed` al webhook de Next.js (`/api/webhooks/stripe`).
2.  **Next.js (Backend - Webhook):**
    - Verifica la firma del webhook de Stripe por seguridad.
    - Extrae los datos de la sesión: `customer_id`, email, y si el Order Bump fue comprado.
    - Llama a la API de GHL para **actualizar el contacto**: agrega los tags `Starter_Buyer` y (si aplica) `Bump_TurboPack`.
    - Guarda el `customer_id` de Stripe en un campo personalizado en GHL para futuras referencias.
    - Dispara un workflow en GHL para entregar los assets del Starter (email con link a snapshot, etc.).

### Paso 4: Upsell 1-Click (Multiplicador $97)
1.  **Usuario:** Tras el pago exitoso del Starter, es redirigido a la página de Upsell en Next.js (`/upsell?session_id={CHECKOUT_SESSION_ID}`).
2.  **Next.js (Backend):** Usa el `session_id` para recuperar los datos del cliente desde Stripe, incluyendo el `customer_id` y el `payment_method` guardado.
3.  **Usuario:** Hace clic en el botón "Sí, ¡Agrégalo con 1-Click!".
4.  **Next.js (Frontend):** Llama a la API de Next.js (`/api/upsell`) con los datos del cliente.
5.  **Next.js (Backend):**
    - Crea un **Payment Intent** en Stripe por $97.
    - **Clave:** Usa el `customer_id` y el `payment_method` guardados para realizar el cargo `off_session: true` y `confirm: true`, logrando el 1-click sin que el usuario reingrese su tarjeta.

### Paso 5: Webhook del Upsell
1.  **Stripe:** Al confirmarse el Payment Intent, envía un evento `payment_intent.succeeded` al webhook de Next.js.
2.  **Next.js (Backend - Webhook):**
    - Verifica la firma.
    - Confirma que el monto es de $97 para identificar que es el Multiplicador.
    - Llama a la API de GHL para **actualizar el contacto**: agrega el tag `Multiplier_Buyer`.
    - Dispara un workflow en GHL para agendar la llamada de onboarding y entregar los recursos del Acelerador Pro.

### Paso 6: Upgrade a Core Mensual ($297/mes)
1.  **GHL:** Una automatización (ej: día 7) envía un email/SMS al cliente con una oferta para el plan Pro.
2.  **Usuario:** Hace clic en el link y va a una página de ventas en Next.js para el plan Pro.
3.  **Next.js (Backend):** Al hacer clic en "Suscribirme", se crea una sesión de **Stripe Checkout** en modo `subscription`.
4.  **Stripe:** Envía webhooks (`customer.subscription.created`, `invoice.payment_succeeded`) que el backend de Next.js usa para actualizar el contacto en GHL con el tag `Pro_Subscriber` y moverlo en el pipeline.

Este diseño modular asegura que cada componente haga lo que mejor sabe hacer, creando un sistema robusto y preparado para escalar.
