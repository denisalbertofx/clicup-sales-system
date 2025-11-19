"use client";

import { motion } from "framer-motion";
import { Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
    {
        id: 1,
        number: "01",
        icon: Settings,
        title: "Configuración Guiada",
        description: "Nuestro equipo configura tu cuenta en 48 horas con plantillas pre-diseñadas para tu industria.",
    },
    {
        id: 2,
        number: "02",
        icon: Rocket,
        title: "Lanzamiento",
        description: "Activa tus automatizaciones y empieza a capturar leads, agendar citas y generar reseñas desde el día 1.",
    },
    {
        id: 3,
        number: "03",
        icon: TrendingUp,
        title: "Crecimiento Automático",
        description: "Observa cómo tu negocio crece mientras ClicUp trabaja 24/7 convirtiendo visitantes en clientes leales.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        De Cero a Resultados en 3 Pasos Simples
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        No necesitas ser un experto en tecnología. Nosotros nos encargamos de todo.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connection Lines (Desktop) */}
                    <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="p-6 rounded-2xl bg-card border-2 border-border mb-6 relative z-10">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

