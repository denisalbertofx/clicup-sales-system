# Prompts para Agente de IA: Construcción del Embudo ClicUp

## Introducción

Este documento contiene una serie de prompts detallados, diseñados para ser entregados a un agente de IA (como yo mismo o similar) para construir cada página y componente del embudo de ventas de ClicUp. Cada prompt es una instrucción autocontenida que incluye el objetivo, el contenido, el diseño y la funcionalidad requerida.

**Instrucción para el Agente de IA:**
Ejecuta cada uno de los siguientes prompts en orden para construir el proyecto completo en Next.js. Utiliza los documentos de `copywriting` y `diseño` como referencia principal para el contenido y los estilos.

---

### **PROMPT 1: Configuración Inicial del Proyecto Next.js**

**Tu Tarea:**
Inicializa un nuevo proyecto de Next.js 14+ con App Router, TypeScript y Tailwind CSS. Configura la estructura de carpetas, las fuentes y las variables de entorno necesarias para el proyecto ClicUp.

**Especificaciones Técnicas:**
1.  **Framework:** Next.js 14+ (App Router).
2.  **Lenguaje:** TypeScript.
3.  **Estilos:** Tailwind CSS.
4.  **Fuente:** Configura `Inter` como la fuente principal del proyecto usando `next/font`.
5.  **Estructura de Carpetas:**
    - `app/`: Directorio principal de rutas.
    - `app/api/`: Para todos los endpoints del backend.
    - `components/`: Para componentes reutilizables de React.
    - `lib/`: Para funciones helper (ej: `ghl.js`, `stripe.js`).
6.  **Variables de Entorno:** Crea el archivo `.env.local` y añade todas las variables definidas en el documento `02_integracion_tecnica.md`. Asegúrate de que las variables públicas (`NEXT_PUBLIC_*`) estén correctamente prefijadas.
7.  **Configuración de Tailwind:** Modifica `tailwind.config.js` para incluir la paleta de colores y la tipografía definidas en el documento `04_diseno_y_componentes_css.md`.

**Resultado Esperado:**
Un repositorio de Next.js configurado y listo para empezar a construir las páginas, con todas las dependencias instaladas y la configuración base completada.

---

### **PROMPT 2: Construcción de la Página de Lead Magnet (`/`)**

**Tu Tarea:**
Crea la página principal (`/`) que servirá como la landing page para el Lead Magnet (Auditoría Express).

**Especificaciones:**
1.  **Ruta:** `app/page.tsx`.
2.  **Layout:** Centrado, una sola columna, con un `max-w-4xl`.
3.  **Contenido:**
    - Utiliza el copy exacto de la **"PÁGINA 1: Landing de Lead Magnet"** del documento `03_copywriting_y_contenido.md`.
    - Implementa la sección "Hero" con el titular y subtitular.
    - Implementa la sección "Puntos de Dolor" con 3 columnas y sus íconos.
    - Implementa la sección "Descripción de la Auditoría".
4.  **Componentes y Diseño:**
    - Sigue las especificaciones de diseño del documento `04_diseno_y_componentes_css.md` para esta página.
    - El titular debe tener el efecto de texto con gradiente.
    - El formulario de captura debe estar en un componente `Card` con los estilos definidos.
    - El botón CTA debe tener el gradiente y la animación de hover especificados.
5.  **Funcionalidad:**
    - El formulario debe capturar `nombre`, `email` y `website`.
    - Al enviar el formulario, se debe hacer una petición `POST` al endpoint `/api/lead` (que crearás en el siguiente prompt).
    - Tras un envío exitoso, el formulario debe ser reemplazado por el mensaje de "¡Excelente!" y el botón para agendar la llamada de 10 minutos, que debe enlazar al calendario de GHL.

**Resultado Esperado:**
Una página estática (`page.tsx`) completamente funcional y estilizada que captura la información del lead y la prepara para ser enviada al backend.

---

### **PROMPT 3: Creación del Endpoint de Lead (`/api/lead`)**

**Tu Tarea:**
Crea el endpoint de API en Next.js que recibe los datos del formulario del Lead Magnet y crea el contacto en GoHighLevel.

**Especificaciones:**
1.  **Ruta:** `app/api/lead/route.ts`.
2.  **Lógica:**
    - Recibe una petición `POST` con `nombre`, `email` y `website`.
    - Llama a la función `createGHLContact` (del helper `lib/ghl.js`) para crear el contacto en GHL.
    - Asegúrate de pasar el tag `Lead_Magnet_Limpieza`.
    - (Opcional Avanzado): Si quieres automatizar la auditoría, aquí es donde llamarías a la API de GHL para generar el reporte de reputación y luego disparar un workflow que lo envíe.
3.  **Respuesta:**
    - Si tiene éxito, responde con un `status: 200` y un JSON `{ success: true }`.
    - Si falla, responde con un `status: 500` y un mensaje de error.

**Resultado Esperado:**
Un endpoint de API funcional que integra el frontend con GHL para la creación de contactos.

---

### **PROMPT 4: Construcción de la Página de Ventas del Starter (`/starter`)**

**Tu Tarea:**
Crea la página de ventas para la oferta Tripwire (Starter de $27).

**Especificaciones:**
1.  **Ruta:** `app/starter/page.tsx`.
2.  **Layout:** Página de ventas larga, dividida en secciones claras.
3.  **Contenido:**
    - Utiliza todo el copy de la **"PÁGINA 3: Página de Ventas del Tripwire (Starter)"** del documento de copywriting.
    - Incluye el titular, subtitular, la sección "El Problema", la sección "La Solución" y la sección "La Oferta".
4.  **Componentes y Diseño:**
    - Sigue las especificaciones de diseño del documento de diseño.
    - Implementa el componente **"Apilado de Valor (Value Stack)"** para listar todo lo que incluye el Starter.
    - Implementa el componente **"Caja de Oferta"** con el precio y el botón CTA principal, destacándolo con el borde verde y la sombra.
    - Implementa el componente **"Caja de Garantía"** con el ícono de escudo.
5.  **Funcionalidad:**
    - El botón CTA principal "SÍ, QUIERO MI STARTER POR SOLO $27" debe:
        - Recopilar el email del usuario (puedes pasarlo por URL desde la página anterior o pedirlo de nuevo).
        - Hacer una petición `POST` al endpoint `/api/checkout`.
        - Al recibir la URL de Stripe, redirigir al usuario a esa URL.

**Resultado Esperado:**
Una página de ventas persuasiva y bien diseñada que conduce al usuario hacia el checkout de Stripe.

---

### **PROMPT 5: Creación del Endpoint de Checkout (`/api/checkout`)**

**Tu Tarea:**
Crea el endpoint que genera la sesión de Stripe Checkout para el Starter y el Order Bump.

**Especificaciones:**
1.  **Ruta:** `app/api/checkout/route.ts`.
2.  **Lógica:**
    - Utiliza el código de ejemplo del documento `02_integracion_tecnica.md`.
    - Recibe el `email` y un booleano `addBump`.
    - Construye los `line_items` dinámicamente, añadiendo el producto del Order Bump si `addBump` es `true`.
    - **CRÍTICO:** Asegúrate de incluir `customer_creation: 'always'` y `saved_payment_method_options: { payment_method_save: 'enabled' }` en la creación de la sesión.
    - La `success_url` debe apuntar a `/upsell?session_id={CHECKOUT_SESSION_ID}`.
3.  **Respuesta:**
    - Devuelve un JSON con la `url` de la sesión de Stripe: `{ url: session.url }`.

**Resultado Esperado:**
Un endpoint que conecta la página de ventas con Stripe, preparando el terreno para el 1-click upsell.

---

### **PROMPT 6: Construcción de la Página de Upsell 1-Click (`/upsell`)**

**Tu Tarea:**
Crea la página de Upsell que se muestra inmediatamente después de la compra del Starter.

**Especificaciones:**
1.  **Ruta:** `app/upsell/page.tsx`.
2.  **Layout:** Minimalista, centrado y sin distracciones, como se especifica en el documento de diseño.
3.  **Contenido:**
    - Utiliza el copy de la **"PÁGINA 5: Upsell 1-Click (Multiplicador)"**.
    - Muestra el titular de interrupción, el subtitular y el video corto.
4.  **Componentes y Diseño:**
    - Sigue las especificaciones de diseño para esta página, especialmente el estilo de los botones.
5.  **Funcionalidad:**
    - La página debe ser un **Componente de Cliente** (`'use client'`) porque necesita leer parámetros de la URL y manejar estado.
    - Al cargar, debe extraer el `session_id` de los parámetros de la URL.
    - **Botón de Aceptar (1-Click):**
        - Al hacer clic, debe enviar una petición `POST` al endpoint `/api/upsell` con el `session_id`.
        - Mientras la petición está en curso, debe mostrar un estado de carga (ej: un spinner).
        - Si tiene éxito, debe redirigir al usuario a la página de onboarding (`/onboarding`).
        - Si falla, debe mostrar un mensaje de error.
    - **Enlace de Rechazo:**
        - Debe ser un simple enlace (`<Link>`) que redirija al usuario a `/onboarding`.

**Resultado Esperado:**
Una página de upsell funcional que permite al usuario comprar el producto adicional con un solo clic.

---

### **PROMPT 7: Creación del Endpoint de Upsell y Webhooks**

**Tu Tarea:**
Crea los endpoints finales para manejar el cargo del upsell y recibir los webhooks de Stripe.

**Especificaciones:**
1.  **Endpoint de Upsell (`/api/upsell/route.ts`):**
    - Implementa la lógica descrita en el documento `02_integracion_tecnica.md`.
    - Debe recuperar la sesión de checkout, obtener el `customer` y el `setup_intent`, y crear un `PaymentIntent` para realizar el cargo de $97.
2.  **Endpoint de Webhooks (`/api/webhooks/stripe/route.ts`):**
    - Implementa el manejador de webhooks como se detalla en la documentación técnica.
    - **CRÍTICO:** Implementa la verificación de la firma de Stripe para seguridad.
    - **Lógica para `checkout.session.completed`:**
        - Extrae los datos del cliente.
        - Determina si el Order Bump fue comprado.
        - Llama a la API de GHL para crear/actualizar el contacto con los tags `Starter_Buyer` y `Bump_TurboPack` (si aplica), y guarda el `stripeCustomerId` en el campo personalizado.
    - **Lógica para `payment_intent.succeeded`:**
        - Verifica que el monto sea $97.
        - Llama a la API de GHL para actualizar el contacto y añadir el tag `Multiplier_Buyer`.

**Resultado Esperado:**
El backend completo para procesar pagos y sincronizar los datos de compra con GoHighLevel automáticamente.

---

### **PROMPT 8: Construcción de la Página de Onboarding (`/onboarding`)**

**Tu Tarea:**
Crea la página final de agradecimiento y onboarding.

**Especificaciones:**
1.  **Ruta:** `app/onboarding/page.tsx`.
2.  **Layout:** Limpio y funcional, tipo dashboard.
3.  **Contenido:**
    - Utiliza el copy de la **"PÁGINA 6: Página de Acceso / Onboarding"**.
    - **Lógica Condicional:** La página debería poder detectar (idealmente a través de un parámetro en la URL o consultando el estado del cliente) si el usuario compró el Multiplicador para mostrar los pasos correctos.
    - Muestra los pasos para agendar la llamada si compraron el upsell, o los pasos para ver el video de activación si no lo hicieron.
4.  **Componentes y Diseño:**
    - Implementa el componente **"Tarjeta de Siguientes Pasos"** con una lista numerada y enlaces claros.

**Resultado Esperado:**
Una página de onboarding clara que guía al nuevo cliente sobre los próximos pasos, completando el flujo del embudo.
