"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarX, Check, Zap, Layers, Star, MessagesSquare, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const painPoints = [
    {
        id: 1,
        problemIcon: CalendarX,
        solutionIcon: Check,
        problemTitle: "Citas perdidas y no-shows constantes",
        solutionTitle: "Recordatorios automáticos por SMS que reducen no-shows hasta 40%",
        mockupType: "calendar" as const,
        color: "from-red-500 to-pink-500",
    },
    {
        id: 2,
        problemIcon: Zap,
        solutionIcon: Zap,
        problemTitle: "Seguimiento manual e ineficiente",
        solutionTitle: "Automatización con IA que trabaja 24/7 por ti",
        mockupType: "automation" as const,
        color: "from-purple-500 to-indigo-500",
    },
    {
        id: 3,
        problemIcon: Layers,
        solutionIcon: Check,
        problemTitle: "Múltiples herramientas desconectadas",
        solutionTitle: "Una sola plataforma que unifica todo tu negocio",
        mockupType: "unified" as const,
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 4,
        problemIcon: Star,
        solutionIcon: Star,
        problemTitle: "Pocas reseñas online",
        solutionTitle: "Genera reseñas 5 estrellas automáticamente después de cada cita",
        mockupType: "reviews" as const,
        color: "from-yellow-500 to-orange-500",
    },
    {
        id: 5,
        problemIcon: MessagesSquare,
        solutionIcon: MessagesSquare,
        problemTitle: "Comunicación desorganizada",
        solutionTitle: "Inbox unificado para SMS, WhatsApp, Facebook e Instagram",
        mockupType: "messaging" as const,
        color: "from-green-500 to-emerald-500",
    },
    {
        id: 6,
        problemIcon: CreditCard,
        solutionIcon: CreditCard,
        problemTitle: "Procesos de cobro complicados",
        solutionTitle: "Enlaces de pago por SMS - cobrar nunca fue tan fácil",
        mockupType: "payments" as const,
        color: "from-teal-500 to-cyan-500",
    },
];

export function PainPoints() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activePainPoint = painPoints[activeIndex];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % painPoints.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);
    };

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        ¿Te Suena Familiar?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Los dolores de cabeza que enfrentan los negocios locales... y cómo ClicUp los resuelve.
                    </motion.p>
                </div>

                {/* Main Showcase */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Left Side - Problem */}
                                <div className="p-8 md:p-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-r border-zinc-200 dark:border-zinc-800">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-red-100 dark:bg-red-950/50 border-2 border-red-300 dark:border-red-800">
                                            <activePainPoint.problemIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">PROBLEMA</h3>
                                            <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                                                {activePainPoint.problemTitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Visual Mockup */}
                                    <div className="mt-8 h-64 bg-white dark:bg-zinc-900 rounded-xl border-2 border-red-200 dark:border-red-900 overflow-hidden relative">
                                        {renderProblemMockup(activePainPoint.mockupType)}
                                    </div>
                                </div>

                                {/* Right Side - Solution */}
                                <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-green-100 dark:bg-green-950/50 border-2 border-green-300 dark:border-green-800">
                                            <activePainPoint.solutionIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">SOLUCIÓN CLICUP</h3>
                                            <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                                                {activePainPoint.solutionTitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Visual Mockup */}
                                    <div className="mt-8 h-64 bg-white dark:bg-zinc-900 rounded-xl border-2 border-green-200 dark:border-green-900 overflow-hidden relative">
                                        {renderSolutionMockup(activePainPoint.mockupType)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="rounded-full"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex gap-2">
                            {painPoints.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === activeIndex
                                        ? "w-8 bg-primary"
                                        : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="rounded-full"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-muted-foreground">
                            {activeIndex + 1} de {painPoints.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Problem Mockups (showing the issue)
function renderProblemMockup(type: string) {
    switch (type) {
        case "calendar":
            return (
                <div className="absolute inset-0 p-6">
                    <div className="grid grid-cols-2 gap-3 h-full">
                        {[
                            { status: "confirmed", time: "9:00 AM", name: "María G." },
                            { status: "no-show", time: "10:00 AM", name: "Carlos R." },
                            { status: "confirmed", time: "11:00 AM", name: "Ana M." },
                            { status: "no-show", time: "2:00 PM", name: "Luis P." },
                        ].map((apt, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-lg p-3 border-2 ${apt.status === "no-show"
                                    ? "bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-800"
                                    : "bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800"
                                    }`}
                            >
                                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{apt.time}</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{apt.name}</div>
                                {apt.status === "no-show" && (
                                    <div className="text-[10px] text-red-600 dark:text-red-400 font-semibold mt-1">❌ No Show</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "automation":
            return (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-4 border-zinc-300 dark:border-zinc-700 border-t-red-500 rounded-full mx-auto mb-4"
                        />
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Trabajo Manual...</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">Perdiendo tiempo valioso</p>
                    </div>
                </div>
            );

        case "unified":
            return (
                <div className="absolute inset-0 p-6">
                    <div className="grid grid-cols-2 gap-3">
                        {["📱 SMS", "📧 Email", "💬 WhatsApp", "👥 Facebook", "📸 Instagram", "📞 Llamadas"].map((tool, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 text-center text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                            >
                                {tool}
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "reviews":
            return (
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                    <div className="text-center mb-4">
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Reseñas Actuales</p>
                        <div className="text-4xl font-bold text-red-600 dark:text-red-400">3</div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">reseñas en 6 meses</p>
                    </div>
                    <div className="flex justify-center gap-1">
                        {[1, 2, 3].map((i) => (
                            <span key={i} className="text-yellow-500 text-2xl">★</span>
                        ))}
                    </div>
                </div>
            );

        case "messaging":
            return (
                <div className="absolute inset-0 p-6 flex flex-col gap-3">
                    {[
                        { app: "SMS", count: 12, color: "bg-blue-100 dark:bg-blue-950/30" },
                        { app: "WhatsApp", count: 8, color: "bg-green-100 dark:bg-green-950/30" },
                        { app: "Facebook", count: 5, color: "bg-purple-100 dark:bg-purple-950/30" },
                    ].map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.15 }}
                            className={`${msg.color} border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 flex justify-between items-center`}
                        >
                            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{msg.app}</span>
                            <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                {msg.count}
                            </span>
                        </motion.div>
                    ))}
                </div>
            );

        case "payments":
            return (
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center gap-4">
                    <div className="text-center">
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-2">Proceso Actual</p>
                        <div className="flex flex-col gap-2">
                            {["1. Llamar cliente", "2. Explicar monto", "3. Esperar pago", "4. Confirmar recibo"].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="text-xs text-zinc-600 dark:text-zinc-400 text-left"
                                >
                                    {step}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            );

        default:
            return null;
    }
}

// Solution Mockups (showing ClicUp's solution)
function renderSolutionMockup(type: string) {
    switch (type) {
        case "calendar":
            return (
                <div className="absolute inset-0 p-6">
                    <div className="mb-3">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-950/50 border border-green-300 dark:border-green-800"
                        >
                            <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                            <span className="text-xs font-semibold text-green-700 dark:text-green-400">Recordatorios Activos</span>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { time: "9:00 AM", name: "María G.", status: "✓ Confirmado" },
                            { time: "10:00 AM", name: "Carlos R.", status: "✓ Confirmado" },
                            { time: "11:00 AM", name: "Ana M.", status: "✓ Confirmado" },
                            { time: "2:00 PM", name: "Luis P.", status: "✓ Confirmado" },
                        ].map((apt, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-lg p-3 bg-green-50 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-800"
                            >
                                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{apt.time}</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{apt.name}</div>
                                <div className="text-[10px] text-green-600 dark:text-green-400 font-semibold mt-1">{apt.status}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "automation":
            return (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="flex items-center gap-3">
                        {[1, 2, 3].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold shadow-lg">
                                    {step}
                                </div>
                                {i < 2 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 20 }}
                                        transition={{ delay: 0.3 + i * 0.2 }}
                                        className="h-1 bg-purple-500 rounded"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "unified":
            return (
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-2xl mb-4"
                    >
                        ClicUp
                    </motion.div>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">Todo en un solo lugar</p>
                </div>
            );

        case "reviews":
            return (
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                    <div className="text-center mb-4">
                        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Con ClicUp</p>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-4xl font-bold text-green-600 dark:text-green-400"
                        >
                            156
                        </motion.div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">reseñas en 6 meses</p>
                    </div>
                    <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.span
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-yellow-500 text-2xl"
                            >
                                ★
                            </motion.span>
                        ))}
                    </div>
                </div>
            );

        case "messaging":
            return (
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-full max-w-xs bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-xl"
                    >
                        <div className="text-sm font-bold mb-3">Inbox Unificado</div>
                        <div className="space-y-2">
                            {["SMS", "WhatsApp", "Facebook"].map((platform, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="bg-white/20 backdrop-blur rounded px-3 py-2 text-xs font-semibold"
                                >
                                    {platform}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            );

        case "payments":
            return (
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center gap-4">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl px-8 py-4 text-lg font-bold shadow-xl"
                    >
                        Pagar $150
                    </motion.div>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-2 bg-green-500 rounded-full"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 }}
                        className="text-green-600 dark:text-green-400 font-bold flex items-center gap-2"
                    >
                        <Check className="h-5 w-5" />
                        <span>¡Pagado en segundos!</span>
                    </motion.div>
                </div>
            );

        default:
            return null;
    }
}
