# Especificaciones de Navegación y Flujos de Usuario - ClicUp

**Documento Complementario a la Arquitectura de Producto**  
**Fecha:** 19 de noviembre de 2025

---

## 1. Mapa de Navegación de Botones (Homepage)

Este documento detalla la lógica de navegación de cada elemento interactivo del sitio web de ClicUp, especificando el comportamiento esperado, el destino y las integraciones técnicas necesarias.

### 1.1. Botones del Header (Presentes en Todas las Páginas)

| Elemento | Tipo | Acción al Click | Destino/Comportamiento | Integraciones Requeridas |
|----------|------|-----------------|------------------------|--------------------------|
| **Logo ClicUp** | Link | Navegación | Redirige a `/` (homepage) | N/A |
| **Soluciones** (menú) | Dropdown | Desplegar menú | Muestra submenu con opciones por industria | N/A |
| **Funcionalidades** (menú) | Dropdown | Desplegar menú | Muestra submenu con funcionalidades clave | N/A |
| **Casos de Éxito** | Link | Navegación | Redirige a `/casos-de-exito` | N/A |
| **Precios** | Link | Navegación | Redirige a `/precios` | N/A |
| **Recursos** (menú) | Dropdown | Desplegar menú | Muestra submenu (Blog, Guías, Webinars) | N/A |
| **Iniciar Sesión** | Link externo | Navegación | Abre en nueva pestaña el portal de GHL | URL externa configurada |
| **AGENDA TU DEMO** | Botón CTA primario | Popup/Navegación | Abre popup con formulario o redirige a `/demo` | Formulario → GHL API, Calendly embed |
| **Prueba Gratis 14 Días** | Botón CTA secundario | Navegación | Redirige a `/registro` | N/A |

---

### 1.2. Hero Section (Homepage)

| Elemento | Tipo | Acción al Click | Destino/Comportamiento | Tracking/Analytics |
|----------|------|-----------------|------------------------|-------------------|
| **"Ver Demo en Vivo"** | Botón primario | Popup | Abre modal con formulario de captura (Nombre, Email, Teléfono, Industria) → Al enviar, redirige a página de agendamiento `/demo` | GA4 Event: `click_demo_hero`, Meta Pixel: `Lead` |
| **"Prueba Gratis 14 Días"** | Botón secundario | Navegación | Redirige a `/registro` con tracking de origen | GA4 Event: `click_trial_hero` |
| **Video Hero** | Video embebido | Play/Pause | Reproduce video explicativo (2-3 min) | GA4 Event: `video_start`, `video_complete` |

---

### 1.3. Sección de Funcionalidades Principales

Cada funcionalidad tiene un botón CTA que abre un modal con un video de demostración específico.

| Funcionalidad | Botón CTA | Acción | Contenido del Modal | Tracking |
|---------------|-----------|--------|---------------------|----------|
| **Agendamiento Inteligente** | "Ver en Acción" | Abre modal | Video demo (1-2 min) mostrando el calendario, recordatorios SMS, reducción de no-shows | GA4: `view_feature_calendar` |
| **Reseñas Automáticas** | "Quiero Más Reseñas" | Abre modal | Video demo mostrando solicitud automática de reseñas, filtro inteligente, dashboard de reputación | GA4: `view_feature_reviews` |
| **Mensajería Unificada** | "Ver Inbox Unificado" | Abre modal | Video demo del inbox unificado con WhatsApp, SMS, Facebook, etc. | GA4: `view_feature_messaging` |
| **Seguimiento con IA** | "Ver Automatizaciones" | Abre modal | Video demo de workflows, missed call text back, seguimiento automático | GA4: `view_feature_automation` |
| **Pagos Simplificados** | "Ver Procesamiento de Pagos" | Abre modal | Video demo de enlaces de pago por SMS, integración Stripe, cobro de depósitos | GA4: `view_feature_payments` |
| **Dashboard Inteligente** | "Ver Dashboard" | Abre modal | Video demo del dashboard con métricas, reportes, ROI tracking | GA4: `view_feature_dashboard` |

**Especificación del Modal:**
- Tamaño: 80% del viewport (responsive)
- Cierre: Click en "X", click fuera del modal, o tecla ESC
- CTA dentro del modal: "Agendar Demo" → redirige a `/demo`

---

### 1.4. Sección "Cómo Funciona"

| Elemento | Tipo | Acción | Destino | Tracking |
|----------|------|--------|---------|----------|
| **"Quiero Empezar Ahora"** | Botón CTA | Navegación | Redirige a `/registro` | GA4: `click_start_process` |

---

### 1.5. Sección de Industrias

| Card de Industria | Acción al Click | Destino | Tracking |
|-------------------|-----------------|---------|----------|
| **Salones y Spas** | Navegación | `/soluciones/salones-y-spas` | GA4: `view_solution_salons` |
| **Gimnasios y Fitness** | Navegación | `/soluciones/gimnasios-y-fitness` | GA4: `view_solution_gyms` |
| **Dentistas y Clínicas** | Navegación | `/soluciones/dentistas-y-clinicas` | GA4: `view_solution_dentists` |
| **Restaurantes** | Navegación | `/soluciones/restaurantes` | GA4: `view_solution_restaurants` |
| **Servicios Profesionales** | Navegación | `/soluciones/servicios-profesionales` | GA4: `view_solution_professional` |
| **Retail Local** | Navegación | `/soluciones/retail-local` | GA4: `view_solution_retail` |

---

### 1.6. Sección de Casos de Éxito

| Elemento | Acción | Destino | Tracking |
|----------|--------|---------|----------|
| **"Lee Más Casos de Éxito"** | Navegación | `/casos-de-exito` | GA4: `view_all_cases` |
| **Card individual de testimonio** | Navegación (opcional) | `/casos-de-exito/[nombre-cliente]` (página detallada) | GA4: `view_case_detail` |

---

### 1.7. Sección de Comparación

| Elemento | Acción | Destino | Tracking |
|----------|--------|---------|----------|
| **"Haz el Cambio Hoy"** | Navegación | `/registro` | GA4: `click_comparison_cta` |

---

### 1.8. Sección de Precios (Preview)

| Plan | Botón CTA | Acción | Destino | Parámetros URL | Tracking |
|------|-----------|--------|---------|----------------|----------|
| **Starter** | "Empezar Prueba Gratis" | Navegación | `/registro` | `?plan=starter` | GA4: `select_plan_starter` |
| **Professional** | "Empezar Prueba Gratis" | Navegación | `/registro` | `?plan=professional` | GA4: `select_plan_professional` |
| **Enterprise** | "Contactar Ventas" | Popup/Navegación | Abre formulario de contacto o redirige a `/demo` con nota de "Enterprise" | `?plan=enterprise` | GA4: `select_plan_enterprise` |
| **"Ver Comparación Completa de Planes"** | Navegación | `/precios` | N/A | GA4: `view_full_pricing` |

---

### 1.9. Sección FAQ

| Elemento | Acción | Comportamiento |
|----------|--------|----------------|
| **Pregunta (accordion item)** | Click | Expande/colapsa la respuesta. Solo una pregunta abierta a la vez. |

---

### 1.10. CTA Final

| Elemento | Acción | Destino | Tracking |
|----------|--------|---------|----------|
| **"Empezar Mi Prueba Gratis"** | Navegación | `/registro` | GA4: `click_final_cta_trial` |
| **"Agendar Demo Personalizada"** | Navegación | `/demo` | GA4: `click_final_cta_demo` |

---

## 2. Flujos de Usuario Principales

### 2.1. Flujo de Conversión a Demo

**Objetivo:** Capturar información del lead y agendar una demo personalizada.

**Puntos de entrada:**
- Botón "AGENDA TU DEMO" (header)
- Botón "Ver Demo en Vivo" (hero)
- Botón "Agendar Demo Personalizada" (CTA final)
- CTAs dentro de modales de funcionalidades

**Flujo:**

1. **Usuario hace click** en cualquier CTA de "Demo"
2. **Sistema abre popup/modal** con formulario de captura:
   - Campos: Nombre completo, Email, Teléfono, Industria (dropdown), Tamaño del negocio (dropdown opcional)
   - Botón: "Ver Horarios Disponibles"
3. **Usuario completa formulario** y hace click en "Ver Horarios Disponibles"
4. **Sistema envía datos** a GHL API (crea/actualiza contacto)
5. **Sistema redirige** a página `/demo` con calendario embebido (Calendly o GHL Calendar)
6. **Usuario selecciona** fecha y hora
7. **Sistema confirma** la cita y envía:
   - Email de confirmación con enlace a Zoom/Meet
   - SMS de confirmación
   - Recordatorios automáticos (24h antes, 1h antes)

**Integraciones técnicas:**
- Formulario → GHL API (endpoint: `/contacts`)
- Calendly embed o GHL Calendar widget
- Zapier/Make (opcional) para sincronización adicional
- Email transaccional (SendGrid/Mailgun)
- SMS (Twilio integrado en GHL)

---

### 2.2. Flujo de Conversión a Prueba Gratis

**Objetivo:** Registrar al usuario para una prueba gratuita de 14 días.

**Puntos de entrada:**
- Botón "Prueba Gratis 14 Días" (header)
- Botón "Prueba Gratis 14 Días" (hero)
- Botón "Empezar Prueba Gratis" (sección de precios)
- Botón "Empezar Mi Prueba Gratis" (CTA final)

**Flujo:**

1. **Usuario hace click** en CTA de "Prueba Gratis"
2. **Sistema redirige** a `/registro` (página dedicada)
3. **Página de registro muestra:**
   - Formulario con campos: Nombre, Email, Contraseña, Nombre del negocio, Industria
   - Selector de plan (pre-seleccionado si viene de sección de precios)
   - Checkbox de términos y condiciones
   - Botón: "Crear Mi Cuenta Gratis"
4. **Usuario completa formulario** y hace click en "Crear Mi Cuenta Gratis"
5. **Sistema:**
   - Crea cuenta en GHL (API o integración directa)
   - Envía email de bienvenida con pasos siguientes
   - Redirige a página de onboarding o directamente al dashboard de GHL
6. **Seguimiento automático:**
   - Email día 1: "Bienvenido, aquí están tus primeros pasos"
   - Email día 3: "¿Necesitas ayuda? Agenda una llamada de onboarding"
   - Email día 7: "Estás a mitad de tu prueba, ¿cómo va?"
   - Email día 12: "Tu prueba termina en 2 días, ¿listo para continuar?"

**Integraciones técnicas:**
- Formulario → GHL API (creación de sub-cuenta)
- Email marketing automation (GHL workflows)
- Stripe (para cuando termine la prueba y se cobre)

---

### 2.3. Flujo de Navegación por Industria

**Objetivo:** Guiar al usuario a contenido específico de su industria.

**Flujo:**

1. **Usuario hace click** en card de industria (ej: "Salones y Spas")
2. **Sistema redirige** a `/soluciones/salones-y-spas`
3. **Página de industria muestra:**
   - Hero específico con imagen/video de la industria
   - Dolores específicos de esa industria
   - Soluciones de ClicUp aplicadas a esos dolores
   - Caso de éxito de un negocio de esa industria
   - Configuración pre-diseñada para esa industria
   - CTA: "Ver Demo para [Industria]" → abre popup con formulario pre-llenado con la industria
4. **Usuario puede:**
   - Agendar demo específica para su industria
   - Iniciar prueba gratis
   - Explorar otras industrias (links relacionados al final de la página)

---

## 3. Especificaciones de Formularios

### 3.1. Formulario de Captura para Demo

**Campos:**

| Campo | Tipo | Requerido | Validación | Placeholder |
|-------|------|-----------|------------|-------------|
| Nombre completo | Text | Sí | Min 3 caracteres | "Juan Pérez" |
| Email | Email | Sí | Formato email válido | "juan@negocio.com" |
| Teléfono | Tel | Sí | Formato: +1 (XXX) XXX-XXXX | "+1 (305) 555-1234" |
| Industria | Dropdown | Sí | Opciones predefinidas | "Selecciona tu industria" |
| Tamaño del negocio | Dropdown | No | Opciones: 1-5, 6-20, 21-50, 51+ empleados | "¿Cuántos empleados tienes?" |

**Opciones de Industria:**
- Salón o Spa
- Gimnasio o Estudio de Fitness
- Dentista o Clínica
- Restaurante
- Servicios Profesionales (abogado, contador, etc.)
- Retail Local
- Otro

**Botón de envío:** "Ver Horarios Disponibles"

**Mensaje de éxito:** "¡Perfecto! Ahora elige el mejor horario para tu demo..."

**Integración:** POST a GHL API → Crear/actualizar contacto con tag "Demo Requested"

---

### 3.2. Formulario de Registro (Prueba Gratis)

**Campos:**

| Campo | Tipo | Requerido | Validación | Placeholder |
|-------|------|-----------|------------|-------------|
| Nombre completo | Text | Sí | Min 3 caracteres | "Juan Pérez" |
| Email | Email | Sí | Formato válido + verificar si ya existe | "juan@negocio.com" |
| Contraseña | Password | Sí | Min 8 caracteres, 1 mayúscula, 1 número | "••••••••" |
| Nombre del negocio | Text | Sí | Min 3 caracteres | "Salón Bella Vista" |
| Industria | Dropdown | Sí | Opciones predefinidas | "Selecciona tu industria" |
| Plan | Radio buttons | Sí | Pre-seleccionado según origen | Starter / Professional / Enterprise |
| Términos | Checkbox | Sí | Debe estar marcado | "Acepto los términos y condiciones" |

**Botón de envío:** "Crear Mi Cuenta Gratis"

**Mensaje de éxito:** "¡Cuenta creada! Revisa tu email para los siguientes pasos..."

**Integración:** POST a GHL API → Crear sub-cuenta con período de prueba de 14 días

---

## 4. Integraciones de Analytics y Tracking

### 4.1. Google Analytics 4 (GA4)

**Eventos personalizados a configurar:**

| Evento | Trigger | Parámetros |
|--------|---------|------------|
| `page_view` | Carga de página | `page_location`, `page_title` |
| `click_demo_hero` | Click en "Ver Demo" (hero) | `button_location: 'hero'` |
| `click_trial_hero` | Click en "Prueba Gratis" (hero) | `button_location: 'hero'` |
| `view_feature_[nombre]` | Click en CTA de funcionalidad | `feature_name: 'calendar/reviews/etc'` |
| `select_plan_[nombre]` | Click en plan de precios | `plan_name: 'starter/professional/enterprise'` |
| `form_submit_demo` | Envío de formulario de demo | `industry`, `business_size` |
| `form_submit_signup` | Envío de formulario de registro | `plan_selected`, `industry` |
| `video_start` | Inicio de reproducción de video | `video_title`, `video_location` |
| `video_complete` | Video visto al 100% | `video_title` |

---

### 4.2. Meta Pixel (Facebook/Instagram Ads)

**Eventos estándar a implementar:**

| Evento | Trigger | Uso |
|--------|---------|-----|
| `PageView` | Carga de cualquier página | Remarketing general |
| `ViewContent` | Vista de páginas de soluciones/industrias | Audiencias personalizadas |
| `Lead` | Envío de formulario de demo | Optimización de campañas de leads |
| `CompleteRegistration` | Registro completado (prueba gratis) | Optimización de conversión |
| `InitiateCheckout` | Usuario llega a página de precios | Remarketing de abandono |

---

### 4.3. Hotjar o Microsoft Clarity

**Configuración:**
- Mapas de calor en homepage, páginas de soluciones y precios
- Grabaciones de sesión (sample del 10% del tráfico)
- Encuestas de feedback en páginas clave

---

## 5. Especificaciones de Rendimiento y SEO

### 5.1. Core Web Vitals (Objetivos)

| Métrica | Objetivo | Estrategia |
|---------|----------|------------|
| **LCP (Largest Contentful Paint)** | < 2.5s | Lazy loading de imágenes, CDN, optimización de video hero |
| **FID (First Input Delay)** | < 100ms | Minimizar JavaScript, code splitting |
| **CLS (Cumulative Layout Shift)** | < 0.1 | Dimensiones explícitas en imágenes, fuentes optimizadas |

---

### 5.2. SEO On-Page (Checklist por Página)

**Homepage:**
- **Title:** "ClicUp: Plataforma Todo-en-Uno para Negocios Locales Hispanos | Más Clientes, Más Reseñas"
- **Meta Description:** "Automatiza citas, reseñas y mensajes. Negocios hispanos aumentan 42% sus clientes con ClicUp. Prueba gratis 14 días."
- **H1:** "Convierte Más Visitantes en Clientes Leales Sin Complicaciones Tecnológicas"
- **Schema Markup:** `Organization`, `SoftwareApplication`, `AggregateRating`

**Páginas de Soluciones:**
- **Title:** "ClicUp para [Industria]: Más Citas, Menos No-Shows | Prueba Gratis"
- **Meta Description:** Específica para cada industria con beneficios clave
- **H1:** Específico para cada industria
- **Schema Markup:** `Service`, `FAQPage`

---

## 6. Especificaciones de Responsive Design

### 6.1. Breakpoints

| Dispositivo | Ancho | Consideraciones Especiales |
|-------------|-------|---------------------------|
| **Mobile** | < 768px | Menú hamburguesa, CTAs apilados verticalmente, video hero con controles touch-friendly |
| **Tablet** | 768px - 1024px | Grid de 2 columnas para funcionalidades, menú completo |
| **Desktop** | > 1024px | Grid de 3 columnas, hover effects, menú completo |

### 6.2. Elementos Críticos en Mobile

- **Hero Section:** Título debe ser legible sin zoom, CTAs deben tener min 44px de altura (touch target)
- **Formularios:** Inputs con tamaño de fuente min 16px (evita zoom automático en iOS)
- **Modales:** Deben ocupar 100% del viewport en mobile
- **Videos:** Controles nativos, autoplay deshabilitado en mobile

---

## 7. Checklist de Lanzamiento

**Pre-lanzamiento:**
- [ ] Todos los formularios conectados a GHL API y probados
- [ ] Tracking de GA4 y Meta Pixel implementado y verificado
- [ ] Todos los links internos funcionando correctamente
- [ ] Todos los CTAs redirigen a los destinos correctos
- [ ] Videos cargando correctamente en todos los dispositivos
- [ ] Formularios con validación y mensajes de error claros
- [ ] Página 404 personalizada configurada
- [ ] Certificado SSL activo
- [ ] Sitemap XML generado y enviado a Google Search Console
- [ ] Robots.txt configurado
- [ ] Velocidad de carga optimizada (< 3s en 4G)
- [ ] Pruebas en Chrome, Safari, Firefox, Edge
- [ ] Pruebas en iOS y Android

**Post-lanzamiento (Primera semana):**
- [ ] Monitorear tasa de conversión de formularios
- [ ] Revisar grabaciones de Hotjar para identificar fricciones
- [ ] Analizar mapas de calor para optimizar CTAs
- [ ] Verificar que emails transaccionales se están enviando
- [ ] Revisar métricas de Core Web Vitals en Search Console
- [ ] A/B testing de headlines principales (si el tráfico lo permite)

---

**Fin del Documento**
