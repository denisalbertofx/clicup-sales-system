"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    MessageSquare,
    Star,
    Zap,
    CreditCard,
    BarChart3
} from "lucide-react";

const features = [
    {
        id: 1,
        icon: Calendar,
        title: "Calendario Inteligente",
        description: "Agenda citas 24/7 con recordatorios automáticos por SMS que reducen cancelaciones hasta 40%.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        icon: MessageSquare,
        title: "Inbox Unificado",
        description: "Todos tus mensajes de SMS, WhatsApp, Facebook e Instagram en un solo lugar.",
        color: "from-green-500 to-emerald-500",
    },
    {
        id: 3,
        icon: Star,
        title: "Generador de Reseñas",
        description: "Solicita reseñas automáticamente después de cada cita para mejorar tu reputación online.",
        color: "from-yellow-500 to-orange-500",
    },
    {
        id: 4,
        icon: Zap,
        title: "Automatización con IA",
        description: "Seguimientos automáticos que convierten más leads sin trabajo manual.",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: 5,
        icon: CreditCard,
        title: "Cobros por SMS",
        description: "Envía enlaces de pago por mensaje de texto y cobra en segundos.",
        color: "from-teal-500 to-cyan-500",
    },
    {
        id: 6,
        icon: BarChart3,
        title: "Reportes Claros",
        description: "Visualiza el crecimiento de tu negocio con métricas fáciles de entender.",
        color: "from-indigo-500 to-purple-500",
    },
];

export const Features = memo(function Features() {
    return (
        <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        Todo lo que Necesitas en Una Plataforma
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Deja de usar 5 herramientas diferentes. ClicUp tiene todo lo que tu negocio necesita.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
                                {/* Icon with Gradient */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="h-7 w-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});
