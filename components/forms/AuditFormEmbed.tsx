'use client';

import { useEffect } from 'react';

export default function AuditFormEmbed() {
    useEffect(() => {
        // Load the GHL script dynamically to ensure it runs on client-side mount
        const script = document.createElement('script');
        script.src = 'https://services.leadconnectorhq.com/prospecting/client/widget_script.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if necessary, though GHL scripts usually persist
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-2xl">
            <iframe
                id="prospecting-widget"
                src="https://services.leadconnectorhq.com/prospecting/widgets/load/692065c2c4a66ab14a73875d"
                style={{
                    display: 'block',
                    width: '100%',
                    border: 'none',
                    minHeight: '600px', // Initial height, GHL script might adjust
                }}
                className="w-full"
                title="Marketing Audit Form"
            />
        </div>
    );
}
