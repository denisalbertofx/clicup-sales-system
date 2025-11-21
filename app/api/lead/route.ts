import { NextResponse } from 'next/server';
import { createGHLContact } from '@/lib/ghl';

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

        // Crear contacto en GHL
        const contact = await createGHLContact({
            email,
            name, // GHL a veces usa 'name' o 'firstName'/'lastName' dependiendo de la versión, pero el helper lo maneja
            firstName: name.split(' ')[0],
            lastName: name.split(' ').slice(1).join(' '),
            tags: ['Lead_Magnet_Limpieza'],
            customFields: [
                { key: 'website', value: website } // Asegúrate de que este campo exista en GHL o usa uno estándar
            ]
        });

        if (!contact) {
            // Si falla GHL, aún así podemos devolver éxito al frontend si queremos "fail open"
            // o devolver error. Para este caso, devolvemos error para debuggear.
            console.error('Fallo al crear contacto en GHL');
            return NextResponse.json(
                { error: 'Error al procesar el registro' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, contact });
    } catch (error) {
        console.error('Error en API lead:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
