"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Download, Users, Sparkles, Clock, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

export default function ConfirmadoPage() {
    const [formData, setFormData] = useState<any>(null);

    useEffect(() => {
        // Load form data
        const savedData = localStorage.getItem("demoFormData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }

        // Trigger confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8b5cf6', '#ec4899', '#f59e0b'],
        });
    }, []);

    const handleAddToCalendar = () => {
        // This would integrate with Google Calendar API
        window.open('https://calendar.google.com', '_blank');
    };

    const handleDownloadGuide = () => {
        // This would trigger guide download
        alert('Descargando guía...');
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />

                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="confirm-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#confirm-grid)" />
                    </svg>
                </div>

                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Success Message */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6 shadow-2xl shadow-green-500/50"
                        >
                            <CheckCircle2 className="h-12 w-12 text-white" />
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
                            ¡Tu Demo Está Confirmada! 🎉
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
                            Excelente decisión{formData?.nombre ? `, ${formData.nombre.split(' ')[0]}` : ''}. Estás a punto de descubrir cómo transformar tu negocio.
                        </p>

                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                            <Sparkles className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-primary">Revisa tu email para los detalles completos</span>
                        </div>
                    </motion.div>

                    {/* Demo Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800 p-8 mb-8"
                    >
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Detalles de Tu Demo</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Calendar className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Fecha y Hora</div>
                                    <div className="text-lg font-semibold text-foreground">Revisa tu email de confirmación</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Duración</div>
                                    <div className="text-lg font-semibold text-foreground">15 minutos</div>
                                </div>
                            </div>
                        </div>

                        <Button onClick={handleAddToCalendar} variant="outline" className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Agregar a Mi Calendario
                        </Button>
                    </motion.div>

                    {/* Preparation Checklist */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-primary/20 p-8 mb-8"
                    >
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Prepárate Para Tu Demo</h2>
                        <p className="text-muted-foreground mb-6">
                            Para aprovechar al máximo tu demo, ten estas 3 cosas listas:
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Calendar, text: "Tu calendario de citas del último mes", desc: "Para calcular tu ROI exacto" },
                                { icon: FileText, text: "Lista de tus mayores desafíos actuales", desc: "Para personalizar la demostración" },
                                { icon: Clock, text: "15 minutos sin interrupciones", desc: "Para enfocarte completamente" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-zinc-900/50">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-foreground mb-1">{item.text}</div>
                                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                                    </div>
                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* While You Wait */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800 p-8 mb-8"
                    >
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Mientras Tanto...</h2>
                        <p className="text-muted-foreground mb-6">
                            Descarga nuestra guía gratuita y empieza a preparar tu negocio para el éxito:
                        </p>

                        <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 mb-6">
                            <div className="p-4 rounded-lg bg-white dark:bg-zinc-900">
                                <Download className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1">Guía: 5 Formas de Recuperar Citas Perdidas</h3>
                                <p className="text-sm text-muted-foreground">Estrategias probadas para aumentar tu tasa de asistencia</p>
                            </div>
                        </div>

                        <Button onClick={handleDownloadGuide} className="w-full" size="lg">
                            <Download className="mr-2 h-5 w-5" />
                            Descargar Guía Gratis
                        </Button>
                    </motion.div>

                    {/* Reminders */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl border border-green-500/20 p-8"
                    >
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">No Te Preocupes por Olvidarlo</h2>
                        <p className="text-muted-foreground mb-6">
                            Te enviaremos recordatorios automáticos:
                        </p>

                        <div className="space-y-3">
                            {[
                                "✓ Email de confirmación (ahora mismo)",
                                "✓ Recordatorio 24 horas antes",
                                "✓ SMS 1 hora antes de tu demo",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 rounded-lg bg-white/50 dark:bg-zinc-900/50">
                            <p className="text-sm text-muted-foreground">
                                ¿Necesitas reprogramar? No hay problema. Simplemente responde al email de confirmación.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
