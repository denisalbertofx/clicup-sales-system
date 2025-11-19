"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { openDemoForm } from "@/lib/demo-form";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background border-l border-border z-50 p-6 md:hidden flex flex-col"
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={onClose}
                                className="p-2 text-muted-foreground hover:text-foreground"
                                aria-label="Cerrar menú"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            <Link
                                href="/soluciones"
                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                onClick={onClose}
                            >
                                Soluciones
                            </Link>
                            <Link
                                href="/funcionalidades"
                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                onClick={onClose}
                            >
                                Funcionalidades
                            </Link>
                            <Link
                                href="/precios"
                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                onClick={onClose}
                            >
                                Precios
                            </Link>
                            <Link
                                href="/recursos"
                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                onClick={onClose}
                            >
                                Recursos
                            </Link>
                        </nav>

                        <div className="mt-auto pt-6 border-t border-border space-y-4">
                            <a
                                href="https://app.goclicup.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                onClick={onClose}
                            >
                                Iniciar Sesión
                            </a>
                            <Button
                                variant="default"
                                className="w-full font-semibold"
                                onClick={() => {
                                    openDemoForm();
                                    onClose();
                                }}
                            >
                                Agendar Demo
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

