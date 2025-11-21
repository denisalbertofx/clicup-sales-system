import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;
        const origin = req.headers.get('origin') || 'http://localhost:3000';

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Asegúrate de tener este Price ID en tu .env.local
        const priceId = process.env.STRIPE_PRICE_ID_STARTER || 'price_1SVkVBKlqGHYKcGFZBLX5b9n';

        if (!priceId) {
            console.error('Falta STRIPE_PRICE_ID_STARTER en variables de entorno');
            return NextResponse.json(
                { error: 'Error de configuración del servidor' },
                { status: 500 }
            );
        }

        const session = await stripe.checkout.sessions.create({
            customer_email: email,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/upsell?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/starter`,
            payment_intent_data: {
                setup_future_usage: 'off_session', // CRÍTICO para el Upsell 1-Click
            },
            metadata: {
                product: 'starter',
                source: 'funnel_v1'
            }
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error('Error creando sesión de checkout:', error);
        return NextResponse.json(
            { error: error.message || 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
