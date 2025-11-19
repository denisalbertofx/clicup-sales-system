"use client";

import { useState } from "react";
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

    // Listen for custom event to open modal
    if (typeof window !== "undefined") {
        window.openDemoModal = () => setIsOpen(true);
    }

    return <DemoFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

// Extend Window interface
declare global {
    interface Window {
        openDemoModal: () => void;
    }
}
