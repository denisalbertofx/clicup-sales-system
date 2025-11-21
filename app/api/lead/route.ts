import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, website } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: 'Nombre y Email son requeridos' },
                { status: 400 }
            );
        }

        // Enviar datos al Webhook de GHL
        const webhookUrl = process.env.GHL_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('GHL_WEBHOOK_URL no está definida');
            return NextResponse.json(
                { error: 'Error de configuración del servidor' },
                { status: 500 }
            );
        }

        await axios.post(webhookUrl, {
            name,
            email,
            website,
            source: 'ClicUp Funnel',
            tags: ['Lead_Magnet_Limpieza']
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error en API lead (Webhook):', error.message);
        return NextResponse.json(
            { error: 'Error al procesar el registro' },
            { status: 500 }
        );
    }
}
