"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AuditFormEmbed from "@/components/forms/AuditFormEmbed";

export default function AuditPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="audit-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#audit-grid)" />
                    </svg>
                </div>

                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Auditoría Gratuita</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            Obtén tu Reporte de Marketing en Segundos
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Descubre exactamente qué está frenando el crecimiento de tu negocio de limpieza y cómo solucionarlo.
                        </p>
                    </motion.div>

                    {/* Form Embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <AuditFormEmbed />
                    </motion.div>

                    {/* Trust Signals */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Análisis Instantáneo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>100% Gratis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Resultados en Tiempo Real</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
