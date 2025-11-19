"use client";

import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/ui/dashboard-mockup";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-grid)" />
                    </svg>
                </div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Column - Copy (First on mobile) */}
                    <div className="text-center lg:text-left order-1 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-4"
                        >
                            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                            <span className="text-xs sm:text-sm font-semibold text-primary">El CRM #1 para Negocios Hispanos</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-3 sm:mb-4 leading-tight"
                        >
                            ¿Cuánto Dinero Pierdes por <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Citas Canceladas</span>?
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
                        >
                            Descubre cómo <span className="text-foreground font-semibold">reducir cancelaciones y recuperar ingresos</span> con el CRM diseñado para negocios locales hispanos.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6"
                        >
                            <Link href="/demo" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-semibold group shadow-xl shadow-primary/25">
                                    Agendar Mi Demo Gratis
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center justify-center lg:justify-start gap-2"
                        >
                            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                            <span className="font-semibold text-orange-500">Espacios limitados esta semana</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Sin tarjeta</span>
                            <span className="hidden sm:inline">•</span>
                            <span>15 minutos</span>
                        </motion.p>
                    </div>

                    {/* Right Column - Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative order-first lg:order-last w-full max-w-md lg:max-w-none mx-auto"
                    >
                        <DashboardMockup />

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white dark:bg-zinc-900 border-2 border-primary rounded-xl p-3 sm:p-4 shadow-2xl max-w-[200px] sm:max-w-none"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="p-1.5 sm:p-2 rounded-lg bg-green-100 dark:bg-green-950">
                                    <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <div className="text-xs sm:text-sm font-semibold text-foreground">+156 Citas</div>
                                    <div className="text-[10px] sm:text-xs text-muted-foreground">Recuperadas este mes</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
