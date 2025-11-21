# 🚀 Guía de Despliegue en Vercel

Sigue estos pasos para subir tu sistema a internet y conectar los pagos reales.

## 1. Preparar el Repositorio (GitHub)
Si aún no has subido tu código a GitHub:

1.  Ve a [GitHub.com](https://github.com) y crea un **Nuevo Repositorio** (público o privado) llamado `clicup-sales-system`.
2.  En tu terminal (VS Code), ejecuta estos comandos:
    ```bash
    git add .
    git commit -m "Sistema completo listo para deploy"
    git branch -M main
    git remote add origin https://github.com/TU_USUARIO/clicup-sales-system.git
    git push -u origin main
    ```

## 2. Conectar con Vercel
1.  Ve a [Vercel.com](https://vercel.com) e inicia sesión.
2.  Haz clic en **"Add New..."** > **"Project"**.
3.  Selecciona tu repositorio `clicup-sales-system` y dale a **Import**.

## 3. Configurar Variables de Entorno (IMPORTANTE)
En la pantalla de configuración de Vercel, antes de darle a "Deploy", busca la sección **Environment Variables**.
Añade las siguientes claves (copia los valores de tu bloc de notas o de Stripe/GHL):

| Key (Nombre) | Value (Valor) |
| :--- | :--- |
| `STRIPE_SECRET_KEY` | `sk_test_...` (Tu clave secreta) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` (Tu clave pública) |
| `STRIPE_PRICE_ID_STARTER` | `price_...` (ID del Starter) |
| `STRIPE_PRICE_ID_UPSELL` | `price_...` (ID del Upsell) |
| `GHL_API_KEY` | `...` (Tu API Key de GHL) |
| `GHL_LOCATION_ID` | `...` (Tu Location ID) |
| `STRIPE_WEBHOOK_SECRET` | *Déjalo pendiente por un momento* |

Dale a **Deploy**. Espera a que termine (puede dar error en el webhook, es normal).

## 4. Obtener tu URL y Configurar el Webhook
Una vez desplegado, Vercel te dará una URL (ej: `https://clicup-system.vercel.app`).

1.  Ve a tu **Dashboard de Stripe > Developers > Webhooks**.
2.  Crea el Endpoint (o edita el existente) con tu nueva URL:
    *   URL: `https://TU-DOMINIO-VERCEL.app/api/webhooks/stripe`
3.  Selecciona los eventos: `checkout.session.completed` y `payment_intent.succeeded`.
4.  Guarda y revela el **Signing Secret** (`whsec_...`).

## 5. Paso Final: Poner el Secreto en Vercel
1.  Vuelve a tu proyecto en Vercel > **Settings > Environment Variables**.
2.  Añade la variable que faltaba:
    *   Key: `STRIPE_WEBHOOK_SECRET`
    *   Value: `whsec_...` (El que acabas de copiar de Stripe).
3.  Ve a la pestaña **Deployments**, haz clic en los 3 puntos del último deploy y selecciona **Redeploy** para que tome la nueva variable.

¡Listo! Tu sistema está en vivo y los webhooks funcionarán perfectamente.
