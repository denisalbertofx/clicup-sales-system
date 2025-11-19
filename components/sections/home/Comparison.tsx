"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
    { aspect: "Herramientas necesarias", without: "5-10 diferentes", with: "1 plataforma todo-en-uno" },
    { aspect: "Costo mensual", without: "$300-500/mes", with: "Desde $97/mes" },
    { aspect: "Tiempo de configuración", without: "Semanas o meses", with: "48 horas" },
    { aspect: "Seguimiento de leads", without: "Manual y desorganizado", with: "100% automatizado con IA" },
    { aspect: "Generación de reseñas", without: "Rogando a clientes", with: "Automático después de cada cita" },
    { aspect: "Soporte técnico", without: "En inglés, lento", with: "En español, inmediato" },
];

export function Comparison() {
    return (
        <section className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        La Diferencia Es Obvia
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Compara cómo era tu vida antes de ClicUp vs. cómo será después.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-card border border-border rounded-lg overflow-hidden"
                >
                    <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
                        <div className="p-4"></div>
                        <div className="p-4 text-center border-x border-border">
                            <p className="font-semibold text-muted-foreground">Sin ClicUp</p>
                        </div>
                        <div className="p-4 text-center bg-primary/10">
                            <p className="font-semibold text-primary">Con ClicUp</p>
                        </div>
                    </div>

                    {comparisons.map((item, index) => (
                        <div key={index} className="grid grid-cols-3 border-b border-border last:border-b-0">
                            <div className="p-4 font-medium text-foreground">
                                {item.aspect}
                            </div>
                            <div className="p-4 text-center border-x border-border">
                                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                    <X className="h-4 w-4 text-destructive flex-shrink-0" />
                                    <span className="text-sm">{item.without}</span>
                                </div>
                            </div>
                            <div className="p-4 text-center bg-primary/5">
                                <div className="flex items-center justify-center gap-2 text-foreground">
                                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium">{item.with}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

