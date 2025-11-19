"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, Video, Sparkles } from "lucide-react";

export default function GraciasPage() {
    useEffect(() => {
        // Load the GoHighLevel calendar script
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Listen for iframe resize messages
        const handleMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === "calendar-resize") {
                const iframe = document.getElementById("bJroLVB8znaIUxaEVNUD_1763576356836") as HTMLIFrameElement;
                if (iframe && event.data.height) {
                    iframe.style.height = `${event.data.height}px`;
                }
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
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />

                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="thank-you-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#thank-you-grid)" />
                    </svg>
                </div>

                {/* Floating Orbs - Optimized */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "reverse"
                        }}
                        className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl will-change-transform"
                        style={{ opacity: 0.4 }}
                    />
                    <motion.div
                        animate={{
                            x: [0, -50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "reverse"
                        }}
                        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl will-change-transform"
                        style={{ opacity: 0.3 }}
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "reverse"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl will-change-transform"
                        style={{ opacity: 0.25 }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Success Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-2xl shadow-green-500/50"
                    >
                        <CheckCircle2 className="h-10 w-10 text-white" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4"
                    >
                        ¡Excelente Decisión! 🎉
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-3"
                    >
                        Estás a un paso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 font-semibold">transformar tu negocio</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8"
                    >
                        Agenda tu demo personalizada y descubre cómo ClicUp puede ayudarte a captar más clientes, automatizar tu negocio y crecer sin límites.
                    </motion.p>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        {[
                            { icon: Clock, text: "Solo 30 minutos" },
                            { icon: Video, text: "100% personalizada" },
                            { icon: Calendar, text: "Cero compromiso" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20"
                            >
                                <item.icon className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Calendar Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Calendar Container */}
                    <div className="relative bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800 overflow-hidden">
                        {/* Gradient Top Bar */}
                        <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

                        <div className="p-4">
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

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <p className="text-sm text-foreground">
                            ¿Tienes dudas? Nuestro equipo está listo para ayudarte.{" "}
                            <a href="tel:+1234567890" className="text-primary hover:underline font-semibold transition-all">
                                Llámanos ahora
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
