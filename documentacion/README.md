# Sistema de Ventas Automatizado para ClicUp - Documentación Completa

¡Felicidades! Aquí tienes toda la documentación necesaria para construir e implementar tu sistema de ventas automatizado para ClicUp, enfocado en el nicho de compañías de limpieza. El sistema está diseñado con una arquitectura moderna y escalable usando Next.js, Stripe y GoHighLevel.

## Contenido del Paquete

Este paquete contiene 5 documentos clave, organizados para guiarte a ti o a un agente de IA a través de todo el proceso de construcción, desde la arquitectura hasta la implementación final.

### 1. `01_arquitectura_tecnica.md`

- **Propósito:** Entender el "qué" y el "porqué" del sistema.
- **Contenido:** Ofrece una visión general de alto nivel de toda la arquitectura. Describe cada componente (Next.js, Stripe, GHL), sus roles y cómo interactúan entre sí. Incluye un diagrama de flujo visual para que puedas entender el recorrido completo del usuario y los datos de un solo vistazo.
- **Cuándo usarlo:** Léelo primero para tener una comprensión conceptual sólida de cómo funciona todo el sistema.

### 2. `02_integracion_tecnica.md`

- **Propósito:** La guía práctica del "cómo".
- **Contenido:** Este es el manual de instrucciones técnico. Detalla paso a paso cómo configurar Stripe (productos, precios, webhooks), GoHighLevel (API, campos personalizados) y tu entorno de Next.js. Incluye fragmentos de código listos para usar para los endpoints de la API y los helpers necesarios.
- **Cuándo usarlo:** Úsalo durante el desarrollo para configurar tus servicios y construir el backend de tu aplicación Next.js.

### 3. `03_copywriting_y_contenido.md`

- **Propósito:** El alma del embudo: los textos que venden.
- **Contenido:** Contiene todo el texto (copy) para cada una de las páginas del embudo, desde la landing page hasta los emails de seguimiento. Los textos están diseñados específicamente para el nicho de compañías de limpieza, abordando sus dolores y presentando a ClicUp como la solución ideal.
- **Cuándo usarlo:** Copia y pega este contenido directamente en los componentes de tu frontend a medida que los construyes.

### 4. `04_diseno_y_componentes_css.md`

- **Propósito:** La cara visible de tu embudo.
- **Contenido:** Define la identidad visual completa del proyecto. Incluye la paleta de colores, la tipografía y, lo más importante, las especificaciones de diseño con clases de **Tailwind CSS** para cada componente en cada página. Te dice exactamente cómo deben verse los botones, las tarjetas, los formularios, etc.
- **Cuándo usarlo:** Úsalo en conjunto con el documento de copywriting para construir un frontend visualmente atractivo y profesional.

### 5. `05_prompts_agente_ia.md`

- **Propósito:** Instrucciones para la automatización de la construcción.
- **Contenido:** Este es tu "manual de operaciones" para un agente de IA. Desglosa todo el proceso de construcción en una serie de prompts o tareas específicas y secuenciales. Cada prompt le dice al agente qué página o componente construir, qué contenido usar (refiriéndose a los otros documentos) y qué funcionalidad implementar.
- **Cuándo usarlo:** Pasa estos prompts uno por uno a un agente de IA para que construya el proyecto de manera estructurada y predecible.

## ¿Cómo Empezar?

1.  **Lee la Arquitectura (`01_...`):** Asegúrate de entender el flujo completo.
2.  **Configura tus Cuentas (`02_...`):** Sigue la guía de integración para preparar Stripe y GHL.
3.  **Inicia el Proyecto (`05_...`, Prompt 1):** Usa el primer prompt para que el agente de IA configure el proyecto de Next.js.
4.  **Construye Página por Página:** Continúa con los prompts del documento `05_...`, usando los documentos de copywriting (`03_...`) y diseño (`04_...`) como material de referencia para cada tarea.

¡Mucho éxito con la implementación!
