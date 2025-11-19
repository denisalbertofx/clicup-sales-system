"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Dumbbell, Stethoscope, UtensilsCrossed, Briefcase, ArrowRight } from "lucide-react";

const industries = [
    { id: 1, name: "Salones y Spas", icon: Scissors, href: "/soluciones/salones", color: "from-pink-500 to-rose-500" },
    { id: 2, name: "Gimnasios y Fitness", icon: Dumbbell, href: "/soluciones/gimnasios", color: "from-orange-500 to-red-500" },
    { id: 3, name: "Dentistas y Clínicas", icon: Stethoscope, href: "/soluciones/dentistas", color: "from-blue-500 to-cyan-500" },
    { id: 4, name: "Restaurantes", icon: UtensilsCrossed, href: "/soluciones/restaurantes", color: "from-yellow-500 to-amber-500" },
    { id: 5, name: "Servicios Profesionales", icon: Briefcase, href: "/soluciones/servicios", color: "from-purple-500 to-indigo-500" },
];

export function Industries() {
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
                        Diseñado Para Tu Industria
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Plantillas y automatizaciones pre-configuradas para tu tipo de negocio.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={industry.href}
                                className="group block bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                            >
                                <div className={`p-4 rounded-lg bg-gradient-to-br ${industry.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                                    <industry.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {industry.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                    <span>Ver solución</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

