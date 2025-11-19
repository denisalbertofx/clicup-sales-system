"use client";

import { useEffect } from "react";

export function DemoFormEmbed() {
    useEffect(() => {
        // Load the GoHighLevel form script
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Listen for form submission
        const handleMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === "form-submitted" && event.data.formId === "uvphqBfJ6CmCRhBYX5Ge") {
                // Redirect to thank you page after form submission
                window.location.href = "/gracias";
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <iframe
            src="https://api.leadconnectorhq.com/widget/form/uvphqBfJ6CmCRhBYX5Ge"
            style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
            id="popup-uvphqBfJ6CmCRhBYX5Ge"
            data-layout='{"id":"POPUP"}'
            data-trigger-type="manual"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Captura de Demo"
            data-height="423"
            data-layout-iframe-id="popup-uvphqBfJ6CmCRhBYX5Ge"
            data-form-id="uvphqBfJ6CmCRhBYX5Ge"
            data-redirect-url="/gracias"
            title="Captura de Demo"
        />
    );
}
