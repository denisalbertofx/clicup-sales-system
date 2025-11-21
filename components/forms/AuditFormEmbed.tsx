'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuditFormEmbed() {
    const searchParams = useSearchParams();
    const [iframeSrc, setIframeSrc] = useState('https://services.leadconnectorhq.com/prospecting/widgets/load/692065c2c4a66ab14a73875d');

    useEffect(() => {
        // Load the GHL script dynamically to ensure it runs on client-side mount
        const script = document.createElement('script');
        script.src = 'https://services.leadconnectorhq.com/prospecting/client/widget_script.js';
        script.async = true;
        document.body.appendChild(script);

        // Construct URL with parameters
        const params = new URLSearchParams();

        // Map standard params to GHL expected keys (assuming standard keys for now)
        // Adjust these keys if GHL uses different ones (e.g. 'first_name' vs 'name')
        if (searchParams.get('first_name')) params.append('first_name', searchParams.get('first_name')!);
        if (searchParams.get('email')) params.append('email', searchParams.get('email')!);
        if (searchParams.get('website')) params.append('website', searchParams.get('website')!);

        if (params.toString()) {
            setIframeSrc(`https://services.leadconnectorhq.com/prospecting/widgets/load/692065c2c4a66ab14a73875d?${params.toString()}`);
        }

        return () => {
            // Cleanup if necessary
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [searchParams]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl">
            <iframe
                id="prospecting-widget"
                src={iframeSrc}
                style={{
                    display: 'block',
                    width: '100%',
                    border: 'none',
                    minHeight: '600px',
                }}
                className="w-full"
                title="Marketing Audit Form"
            />
        </div>
    );
}
