import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { createGHLContact, updateGHLContact, getGHLContactByEmail } from '@/lib/ghl';

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('stripe-signature') as string;

    let event;

    try {
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            throw new Error('Falta STRIPE_WEBHOOK_SECRET');
        }
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
    }

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as any;
                const email = session.customer_details?.email;
                const name = session.customer_details?.name;
                const stripeCustomerId = session.customer;

                if (email) {
                    // Verificar si hubo Order Bump (esto depende de cómo configures el bump en Stripe,
                    // generalmente se ve en line_items o metadata, aquí asumimos lógica simple por ahora)
                    // Para simplificar, asumimos que si el total es > $27, hubo bump, o verificamos metadata

                    const tags = ['Starter_Buyer'];
                    // Lógica simple de detección de bump por monto (ajustar según precio real)
                    if (session.amount_total > 2700) {
                        tags.push('Bump_TurboPack');
                    }

                    // Buscar contacto existente o crear uno nuevo
                    let contact = await getGHLContactByEmail(email);

                    if (contact) {
                        await updateGHLContact(contact.id, {
                            tags: [...(contact.tags || []), ...tags],
                            customFields: [{ key: 'stripe_customer_id', value: stripeCustomerId }]
                        });
                    } else {
                        await createGHLContact({
                            email,
                            name: name || 'Cliente',
                            tags: tags,
                            customFields: [{ key: 'stripe_customer_id', value: stripeCustomerId }]
                        });
                    }
                }
                break;
            }

            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as any;

                // Verificar si es el Upsell (por metadata o monto)
                if (paymentIntent.metadata?.product === 'upsell_acelerador' || paymentIntent.amount === 9700) {
                    // Necesitamos el email. En PI a veces no está directo si no se pasó, 
                    // pero podemos recuperar el customer de Stripe
                    const customerId = paymentIntent.customer;
                    if (customerId) {
                        const customer = await stripe.customers.retrieve(customerId) as any;
                        const email = customer.email;

                        if (email) {
                            const contact = await getGHLContactByEmail(email);
                            if (contact) {
                                await updateGHLContact(contact.id, {
                                    tags: [...(contact.tags || []), 'Multiplier_Buyer']
                                });
                            }
                        }
                    }
                }
                break;
            }

            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Error processing webhook:', error);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 500 }
        );
    }
}
