"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Video, Shield, Sparkles, Calendar as CalendarIcon } from "lucide-react";

export default function CalendarioPage() {
    const [formData, setFormData] = useState<any>(null);

    useEffect(() => {
        // Load form data from localStorage
        const savedData = localStorage.getItem("demoFormData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }

        // Load the GoHighLevel calendar script
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Listen for iframe resize messages and booking completion
        const handleMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === "calendar-resize") {
                const iframe = document.getElementById("bJroLVB8znaIUxaEVNUD_1763576356836") as HTMLIFrameElement;
                if (iframe && event.data.height) {
                    iframe.style.height = `${event.data.height}px`;
                }
            }
            // Redirect to confirmation page after booking
            if (event.data && (event.data.type === "booking-confirmed" || event.data.type === "appointment-booked")) {
                window.location.href = "/confirmado";
            }
        };

        window.addEventListener("message", handleMessage);

        // Set initial height after load
        const handleLoad = () => {
            const iframe = document.getElementById("bJroLVB8znaIUxaEVNUD_1763576356836") as HTMLIFrameElement;
            if (iframe) {
                iframe.style.height = "1000px";
            }
        };

        window.addEventListener("load", handleLoad);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            window.removeEventListener("message", handleMessage);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10 opacity-50">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="calendar-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#calendar-grid)" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Paso 2 de 2</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        ¡Perfecto{formData?.nombre ? `, ${formData.nombre.split(' ')[0]}` : ''}! Elige Tu Mejor Horario
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Selecciona el día y hora que mejor te funcione para tu demo personalizada de 15 minutos.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Calendar - Left Side (2/3) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800 overflow-hidden">
                            {/* Gradient Top Bar */}
                            <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

                            <div className="p-6">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/booking/bJroLVB8znaIUxaEVNUD"
                                    style={{ width: "100%", border: "none", minHeight: "900px", height: "100%" }}
                                    id="bJroLVB8znaIUxaEVNUD_1763576356836"
                                    title="Agendar Demo"
                                    allow="payment"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar - Right Side (1/3) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* What to Expect */}
                        <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-zinc-800 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <CalendarIcon className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-heading font-bold text-foreground">Qué Esperar en Tu Demo</h3>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "Análisis personalizado de tu negocio",
                                    "Demostración en vivo del dashboard",
                                    "Cálculo de ROI específico para ti",
                                    "Respuestas a todas tus preguntas",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-primary/20 p-6">
                            <h3 className="text-lg font-heading font-bold text-foreground mb-4">Por Qué Agendar Ahora</h3>

                            <div className="space-y-4">
                                {[
                                    { icon: Clock, text: "Solo 15 minutos de tu tiempo" },
                                    { icon: Video, text: "100% personalizada para tu negocio" },
                                    { icon: Shield, text: "Sin compromiso ni tarjeta requerida" },
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-white/10">
                                            <benefit.icon className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Signals */}
                        <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-zinc-800 p-6">
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>✓ Cancela o reprograma cuando quieras</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>✓ Recibirás recordatorios automáticos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span>✓ Soporte en español garantizado</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl border border-green-500/20 p-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-green-500/20">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground mb-1">
                                        "La mejor decisión para mi salón"
                                    </p>
                                    <p className="text-xs text-muted-foreground mb-2">
                                        Recuperé $4,200 en el primer mes gracias a la automatización de citas.
                                    </p>
                                    <p className="text-xs text-muted-foreground font-medium">
                                        — María G., Salón de Belleza
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
