"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Headphones, Lock, CheckCircle2, Zap } from "lucide-react";

const guarantees = [
    {
        id: 1,
        icon: Clock,
        title: "Prueba Gratis 14 Días",
        description: "Prueba todas las funciones sin tarjeta de crédito.",
    },
    {
        id: 2,
        icon: CheckCircle2,
        title: "Cancela Cuando Quieras",
        description: "Sin contratos ni penalizaciones. Tú decides.",
    },
    {
        id: 3,
        icon: Headphones,
        title: "Soporte en Español",
        description: "Equipo real que habla tu idioma, disponible por chat y email.",
    },
    {
        id: 4,
        icon: Lock,
        title: "Datos 100% Seguros",
        description: "Encriptación de nivel bancario para proteger tu información.",
    },
    {
        id: 5,
        icon: Zap,
        title: "Setup Incluido",
        description: "Te ayudamos a configurar todo en 48 horas.",
    },
    {
        id: 6,
        icon: Shield,
        title: "Garantía de Satisfacción",
        description: "Si no ves resultados en 30 días, te devolvemos tu dinero.",
    },
];

export const Guarantees = memo(function Guarantees() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        Sin Riesgos, Solo Resultados
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Estamos tan seguros de que ClicUp transformará tu negocio que te lo garantizamos.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {guarantees.map((guarantee, index) => (
                        <motion.div
                            key={guarantee.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{ willChange: 'transform, opacity' }}
                            className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all"
                        >
                            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                                <guarantee.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">
                                {guarantee.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {guarantee.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});
