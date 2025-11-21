import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { sessionId } = body;

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
        }

        // 1. Recuperar la sesión original para obtener el cliente y el método de pago
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['payment_intent.payment_method'],
        });

        const customerId = session.customer as string;
        const paymentIntent = session.payment_intent as any;
        const paymentMethodId = paymentIntent?.payment_method?.id;

        if (!customerId || !paymentMethodId) {
            return NextResponse.json(
                { error: 'No se pudo recuperar la información de pago original.' },
                { status: 400 }
            );
        }

        // 2. Obtener el precio del Upsell (Acelerador Pro)
        const upsellPriceId = process.env.STRIPE_PRICE_ID_UPSELL || 'price_1SVkXyKlqGHYKcGFo3dMqusl';
        if (!upsellPriceId) {
            throw new Error('Falta STRIPE_PRICE_ID_UPSELL en variables de entorno');
        }

        // Calcular monto (Stripe requiere el monto en centavos si creamos el PI manualmente,
        // pero es mejor crear un PI basado en el Price si es posible, o simplemente hardcodear el monto si es fijo.
        // Para simplificar y ser robustos, recuperamos el precio de Stripe o usamos el valor conocido $97 USD)
        const amount = 9700; // $97.00 USD

        // 3. Crear y confirmar el nuevo PaymentIntent (Cobro 1-Click)
        const newPaymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            customer: customerId,
            payment_method: paymentMethodId,
            off_session: true, // Importante: Indica que el usuario no está en el flujo de checkout estándar
            confirm: true, // Intenta cobrar inmediatamente
            metadata: {
                product: 'upsell_acelerador',
                original_session_id: sessionId,
                source: 'funnel_v1_upsell'
            },
            description: 'Upgrade: Acelerador Pro (1-Click)'
        });

        if (newPaymentIntent.status === 'succeeded') {
            return NextResponse.json({ success: true });
        } else {
            // Si requiere acción (3DSecure, etc.), en un flujo real deberíamos manejarlo,
            // pero para este MVP asumimos fallo si no pasa directo.
            return NextResponse.json(
                { error: 'El pago requiere autenticación adicional o falló.' },
                { status: 400 }
            );
        }

    } catch (error: any) {
        console.error('Error en Upsell 1-Click:', error);
        return NextResponse.json(
            { error: error.message || 'Error procesando el upsell' },
            { status: 500 }
        );
    }
}
