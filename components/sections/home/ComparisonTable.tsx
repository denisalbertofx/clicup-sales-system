"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = {
    criteria: [
        "Recordatorios automáticos",
        "Inbox unificado (SMS, WhatsApp, etc.)",
        "Generador de reseñas",
        "Cobros por SMS",
        "Automatización con IA",
        "Soporte en español",
        "Setup incluido",
        "Sin contratos largos",
    ],
    columns: [
        {
            name: "ClicUp",
            highlight: true,
            values: [true, true, true, true, true, true, true, true],
        },
        {
            name: "Otras Plataformas",
            highlight: false,
            values: [true, false, false, true, false, false, false, false],
        },
        {
            name: "Sin Sistema",
            highlight: false,
            values: [false, false, false, false, false, false, false, true],
        },
    ],
};

export function ComparisonTable() {
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
                        ¿Por Qué Elegir ClicUp?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Compara y descubre por qué somos la mejor opción para tu negocio.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Mobile: Scroll hint */}
                    <div className="md:hidden text-center mb-4">
                        <p className="text-xs text-muted-foreground">← Desliza para ver más →</p>
                    </div>

                    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                        <div className="bg-card border border-border rounded-xl overflow-hidden min-w-[600px] md:min-w-0">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left p-3 md:p-4 font-semibold text-foreground w-2/5 text-xs md:text-sm">
                                            Características
                                        </th>
                                        {comparisonData.columns.map((column, idx) => (
                                            <th
                                                key={idx}
                                                className={`p-3 md:p-4 text-center font-semibold text-xs md:text-sm ${column.highlight
                                                        ? "bg-primary/10 border-x-2 border-primary text-primary"
                                                        : "text-foreground"
                                                    }`}
                                            >
                                                {column.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.criteria.map((criterion, rowIdx) => (
                                        <tr
                                            key={rowIdx}
                                            className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
                                        >
                                            <td className="p-3 md:p-4 text-xs md:text-sm text-foreground font-medium leading-tight">
                                                {criterion}
                                            </td>
                                            {comparisonData.columns.map((column, colIdx) => (
                                                <td
                                                    key={colIdx}
                                                    className={`p-3 md:p-4 text-center ${column.highlight ? "bg-primary/5" : ""
                                                        }`}
                                                >
                                                    {column.values[rowIdx] ? (
                                                        <Check className="h-5 w-5 md:h-6 md:w-6 text-green-600 dark:text-green-500 mx-auto font-bold stroke-[3]" />
                                                    ) : (
                                                        <X className="h-5 w-5 md:h-6 md:w-6 text-red-500 dark:text-red-400 mx-auto opacity-40" />
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <p className="text-sm text-muted-foreground">
                        * Comparación basada en funcionalidades estándar de plataformas similares
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
