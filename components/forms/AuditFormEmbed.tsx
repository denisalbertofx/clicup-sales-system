'use client';

import { useEffect, useState } from 'react';

export default function AuditFormEmbed() {
    const [iframeSrc, setIframeSrc] = useState('https://services.leadconnectorhq.com/prospecting/widgets/load/6921267d4f967a624e99e932');

    useEffect(() => {
        // Load the GHL script dynamically to ensure it runs on client-side mount
        const script = document.createElement('script');
        script.src = 'https://services.leadconnectorhq.com/prospecting/client/widget_script.js';
        script.async = true;
        document.body.appendChild(script);

        // Construct URL with parameters
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* Glow Effect Removed as per user request */}

            <div className="relative">
                <iframe
                    id="prospecting-widget"
                    src="https://services.leadconnectorhq.com/prospecting/widgets/load/6921267d4f967a624e99e932"
                    style={{
                        display: 'block',
                        width: '100%',
                        border: 'none',
                        minHeight: '600px', // Ensure enough height
                    }}
                    className="w-full"
                    title="Marketing Audit Form"
                />
            </div>
        </div>
    );
}
