"use client";

import { useState, useEffect } from "react";
import { DemoFormModal } from "@/components/forms/DemoFormModal";

export function DemoFormProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <DemoFormModalWrapper />
        </>
    );
}

function DemoFormModalWrapper() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.openDemoModal = () => setIsOpen(true);
        }
        return () => {
            if (typeof window !== "undefined") {
                // @ts-expect-error - window extension
                delete window.openDemoModal;
            }
        };
    }, []);

    return <DemoFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

// Extend Window interface
declare global {
    interface Window {
        openDemoModal: () => void;
    }
}
