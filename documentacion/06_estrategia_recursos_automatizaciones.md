# Estrategia de Precios, Recursos y Automatizaciones de GHL

## 1. Estrategia de Precios Completa

La estrategia de precios de ClicUp está diseñada para maximizar el valor del ciclo de vida del cliente (LTV) y recuperar rápidamente el costo de adquisición del cliente (CAC) a través de una escalera de productos.

### Escalera de Precios

| Nivel | Producto | Precio | Tipo | Objetivo |
| :--- | :--- | :--- | :--- | :--- |
| **0** | Lead Magnet (Auditoría) | $0 | Gratis | Captura de contacto + cita corta |
| **1** | Starter de Agenda Automática | $27 | Pago único | Convertir lead → cliente |
| **1.5** | Pack Turbo de Conversión (Bump) | $17 | Pago único | Aumentar ticket promedio 25-40% |
| **2** | Acelerador Pro 30 días (Upsell) | $97 | Pago único | Aumentar ganancia inmediata |
| **3** | ClicUp Pro (Core SaaS) | $297/mes | Suscripción | Recurrencia + margen |
| **3** | ClicUp Elite (Core SaaS) | $597/mes | Suscripción | Alto margen + servicio premium |
| **4** | Servicios Adicionales (Cross-sell) | $500-$2,000/mes | Suscripción | Ads management, SEO, IA avanzada |

### Análisis de Valor y Margen

**Escenario 1: Cliente Básico (Solo Starter)**
- Ingreso: $27
- Costo de entrega: ~$5 (tiempo de soporte mínimo)
- Margen: $22

**Escenario 2: Cliente con Bump (Starter + Turbo)**
- Ingreso: $44
- Costo de entrega: ~$7
- Margen: $37

**Escenario 3: Cliente con Upsell (Starter + Bump + Acelerador)**
- Ingreso: $141
- Costo de entrega: ~$30 (incluye llamada de onboarding de 60 min)
- Margen: $111

**Escenario 4: Cliente Pro (Upgrade a suscripción)**
- Ingreso Inicial: $141 (Starter + Bump + Acelerador)
- Ingreso Mensual: $297
- Ingreso en 6 meses: $1,923
- Costo de entrega (6 meses): ~$200 (soporte + infraestructura)
- Margen en 6 meses: $1,723

### Métricas de Éxito (KPIs)

Para que el sistema sea rentable con ads pagados, debes alcanzar las siguientes métricas mínimas:

| Métrica | Objetivo Mínimo | Objetivo Ideal |
| :--- | :--- | :--- |
| CTR de anuncios (frío) | >1.5% | >2.5% |
| Opt-in en landing | 20-35% | 35-50% |
| Show-up a llamada (si agendaron) | 60-80% | 80-90% |
| Compra Starter (de leads) | 5-15% | 15-25% |
| Take rate Order Bump | 25-40% | 40-60% |
| Take rate Upsell (Multiplicador) | 10-25% | 25-40% |
| Upgrade a Pro (desde Starter) | 20-40% | 40-60% |
| Churn mensual Pro | <7% | <5% |

**Ejemplo de Cálculo de ROI:**

Supongamos que inviertes $1,000 en ads y obtienes 500 leads:
- Opt-in: 30% → 150 leads capturados
- Compra Starter: 10% → 15 clientes
- Bump: 30% → 4.5 clientes (redondeamos a 5)
- Upsell: 20% → 3 clientes

**Ingresos inmediatos:**
- 10 clientes solo Starter: 10 × $27 = $270
- 5 clientes Starter + Bump: 5 × $44 = $220
- 3 clientes Starter + Bump + Upsell: 3 × $141 = $423
- **Total inmediato: $913**

**Ingresos a 90 días (si 30% de los 15 upgradean a Pro):**
- 4.5 clientes Pro (redondeamos a 5) × $297 × 3 meses = $4,455
- **Total a 90 días: $5,368**

**ROI a 90 días:** ($5,368 - $1,000) / $1,000 = **437%**

---

## 2. Recursos Necesarios para Entregar

A continuación, se detallan los recursos que debes crear para cumplir con las promesas de cada producto.

### 2.1. Recursos para el Starter ($27)

**Snapshot de GHL (Embudo 1-Click):**
- Una landing page simple para capturar leads de limpieza.
- Un calendario de agendamiento.
- Un pipeline básico con 4 etapas: "Lead Nuevo", "Cotización Enviada", "Seguimiento", "Cliente".

**Workflow de Secuencia "Anti-Fantasmas" (7 días):**
- **Día 0 (inmediato):** SMS de bienvenida + Email con la cotización.
- **Día 1:** SMS recordatorio suave: "Hola [Nombre], ¿tuviste oportunidad de revisar nuestra cotización?"
- **Día 3:** Email con valor agregado: "3 Razones por las que [Nombre de Empresa] es la Mejor Opción para tu Limpieza".
- **Día 5:** SMS con urgencia suave: "Hola [Nombre], tenemos disponibilidad limitada esta semana. ¿Te gustaría agendar?"
- **Día 7:** Email final con oferta especial: "Última oportunidad: 10% de descuento si agendas hoy".

**Sistema de "Respuesta a Llamadas Perdidas":**
- Workflow en GHL que se dispara cuando un contacto llama y no se contesta.
- Envía un SMS automático: "¡Hola! Vimos que intentaste comunicarte con [Tu Negocio]. ¿En qué podemos ayudarte? Responde a este mensaje o llámanos de nuevo."

**Plantillas de Mensajes "Cierra-Ventas":**
- Un documento PDF o Google Doc con 5 plantillas de respuesta para objeciones comunes:
  1. "Es muy caro"
  2. "Déjame pensarlo"
  3. "Necesito hablar con mi socio/esposa"
  4. "Ya tengo otra empresa de limpieza"
  5. "¿Qué incluye exactamente el servicio?"

### 2.2. Recursos para el Order Bump ($17)

**Secuencia de Reactivación (3 emails):**
- Email 1: "¿Sigues ahí? Te extrañamos."
- Email 2: "Oferta Especial Solo para Ti: 15% de Descuento en tu Próxima Limpieza".
- Email 3: "Última Oportunidad: Reactiva tu Servicio Hoy".

**10 Plantillas de WhatsApp/SMS para Cierre:**
- Mensajes cortos y directos para confirmar citas, enviar recordatorios y cerrar ventas por chat.

**Landing Page Alternativa (Split Test):**
- Una segunda versión del embudo del Starter con un diseño o copy ligeramente diferente para hacer A/B testing.

### 2.3. Recursos para el Multiplicador ($97)

**Sesión de Onboarding Express (60 min):**
- Un checklist de lo que se cubrirá en la llamada:
  1. Importar el snapshot del Starter.
  2. Conectar el calendario.
  3. Configurar el número de teléfono para SMS.
  4. Activar los workflows.
  5. Prueba de envío de mensajes.

**2 Automatizaciones Adicionales:**
- **Workflow de Solicitud de Reseñas:** Se dispara 7 días después de que un cliente marca un trabajo como "Completado". Envía un email y un SMS pidiendo una reseña en Google.
- **Workflow de Reactivación de Clientes Inactivos:** Se dispara si un cliente no agenda un servicio en 60 días. Envía una secuencia de 3 mensajes para recuperarlo.

**Checklist de Implementación (PDF):**
- Un documento paso a paso que el cliente puede seguir antes y después de la llamada de onboarding.

---

## 3. Automatizaciones de GHL (Workflows)

A continuación, se describen las automatizaciones clave que debes configurar en GHL para que el sistema funcione sin intervención manual.

### 3.1. Workflow: Lead Magnet Capturado

**Disparador:** Tag añadido: `Lead_Magnet_Limpieza`.

**Acciones:**
1. **Esperar 1 minuto** (para asegurar que el email se procesó).
2. **Enviar Email:** Asunto: "Tu Reporte: Las 3 Fugas de Clientes de tu Negocio". Cuerpo: Adjuntar el PDF de la auditoría (o link a la auditoría online).
3. **Enviar SMS:** "¡Hola [Nombre]! Tu auditoría está lista. Revisa tu email. ¿Quieres hablar 10 min sobre los resultados? Agenda aquí: [Link Calendario]".
4. **Crear Oportunidad en Pipeline:** Etapa: "Lead Magnet".
5. **Si NO agenda en 24 horas:**
   - **Enviar Email de Seguimiento:** "¿Revisaste tu auditoría? Aquí hay 3 acciones rápidas que puedes tomar hoy".

### 3.2. Workflow: Starter Comprado

**Disparador:** Tag añadido: `Starter_Buyer`.

**Acciones:**
1. **Enviar Email:** Asunto: "[IMPORTANTE] Tus Accesos a ClicUp y el Starter Kit". Cuerpo: Incluir usuario, contraseña, link al snapshot, y link al video de activación rápida.
2. **Enviar SMS:** "¡Felicidades [Nombre]! Tu Starter está listo. Revisa tu email para activarlo en minutos."
3. **Mover Oportunidad en Pipeline:** Etapa: "Cliente - Starter".
4. **Esperar 5 días.**
5. **Enviar Email de Upgrade a Pro:** (Usar el copy del documento de copywriting para el email del "Puente al Core Mensual").

### 3.3. Workflow: Multiplicador Comprado

**Disparador:** Tag añadido: `Multiplier_Buyer`.

**Acciones:**
1. **Enviar Email:** Asunto: "¡Bienvenido al Acelerador Pro! Agenda tu Sesión de Onboarding". Cuerpo: Explicar qué esperar en la llamada y proporcionar el link al calendario para agendar.
2. **Crear Tarea Interna:** Asignar al equipo de soporte para que preparen la sesión de onboarding.
3. **Mover Oportunidad en Pipeline:** Etapa: "Cliente - Acelerador Pro".
4. **Después de la llamada de onboarding (manual o automático si se marca la cita como completada):**
   - **Enviar Email:** "Checklist Post-Onboarding: Asegúrate de que todo esté funcionando".
5. **Esperar 25 días (para completar los 30 días del Acelerador).**
6. **Enviar Email de Upgrade a Pro:** Similar al del Starter, pero con un tono de "ya conoces el poder de ClicUp, ahora es el momento de desbloquearlo al 100%".

### 3.4. Workflow: Pro Suscrito

**Disparador:** Tag añadido: `Pro_Subscriber`.

**Acciones:**
1. **Enviar Email de Bienvenida a Pro:** "¡Bienvenido a ClicUp Pro! Aquí está todo lo que puedes hacer ahora".
2. **Mover Oportunidad en Pipeline:** Etapa: "Cliente - Pro Activo".
3. **Cada 30 días:**
   - **Enviar Email de Check-in:** "¿Cómo va todo con ClicUp? ¿Necesitas ayuda con algo?"
4. **Si el pago falla (webhook de Stripe `invoice.payment_failed`):**
   - **Enviar SMS inmediato:** "Hola [Nombre], hubo un problema con tu pago de ClicUp Pro. Por favor actualiza tu método de pago aquí: [Link]".
   - **Enviar Email:** Mismo mensaje, con más detalles.
   - **Esperar 3 días.**
   - **Si sigue sin pagar:** Enviar email final de "Tu cuenta será suspendida en 24 horas".

---

## 4. Configuración de Calendarios en GHL

Debes tener al menos 2 calendarios configurados:

### Calendario 1: "Demo de 10 Minutos (Lead Magnet)"
- **Duración:** 10 minutos.
- **Disponibilidad:** Amplia (ej: Lunes a Viernes, 9am - 6pm).
- **Confirmaciones:** Solo enviar confirmación por email y SMS 1 hora antes.
- **No enviar recordatorios previos** (para evitar cancelaciones, según tu preferencia).

### Calendario 2: "Onboarding Acelerador Pro (60 min)"
- **Duración:** 60 minutos.
- **Disponibilidad:** Más limitada (ej: Martes y Jueves, 10am - 4pm).
- **Confirmaciones:** Enviar confirmación inmediata y recordatorio 24 horas antes.
- **Incluir:** Link a Zoom o Google Meet en la confirmación.

---

## 5. Recursos Adicionales Recomendados

### 5.1. Videos de Onboarding
Si decides crear videos en lugar de llamadas en vivo (o como complemento):
- **Video 1:** "Cómo Importar tu Snapshot del Starter en 5 Minutos" (5-7 min).
- **Video 2:** "Configuración de tu Primer Workflow de Seguimiento" (8-10 min).
- **Video 3:** "Cómo Conectar tu Número de Teléfono para SMS" (5 min).

### 5.2. PDFs Descargables
- **Checklist de Activación del Starter:** Una lista de verificación visual de 1 página.
- **Guía de Mejores Prácticas para Seguimiento de Leads:** Un PDF de 3-5 páginas con consejos sobre cómo y cuándo contactar a los leads.

### 5.3. Plantillas de Emails y SMS
- Crea un documento compartido (Google Doc o Notion) con todas las plantillas de mensajes, organizadas por etapa del pipeline. Esto facilita que el cliente las copie y pegue o las personalice.

---

Con estos recursos y automatizaciones en su lugar, tu sistema ClicUp estará completamente operativo y listo para escalar. El cliente recibirá un valor tangible en cada nivel de la escalera de precios, y tú podrás gestionar múltiples clientes con un mínimo de intervención manual.
