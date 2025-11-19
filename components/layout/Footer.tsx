"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-16 md:py-20 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                        ¿Listo para Transformar tu Negocio?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        Prueba gratis por 14 días. Sin tarjeta de crédito. Cancela cuando quieras.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/demo">
                            <Button size="lg" className="h-14 px-8 text-lg font-semibold group shadow-xl shadow-primary/25">
                                Empezar Ahora Gratis
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span>14 días gratis • Sin tarjeta • Cancela cuando quieras</span>
                    </p>
                </motion.div>

                {/* Trust Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-border py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Todo-en-Uno</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Una Sola Plataforma</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Hasta 40%</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Menos Cancelaciones</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Automatización IA</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
                        <div className="text-xs md:text-sm text-muted-foreground">En Español</div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <div className="border-t border-border py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Brand */}
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                                    <Zap className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                    ClicUp
                                </span>
                            </Link>
                        </div>

                        {/* Essential Links */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                                Privacidad
                            </Link>
                            <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                                Términos
                            </Link>
                            <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                                Contacto
                            </Link>
                            <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                                Iniciar Sesión
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>© {new Date().getFullYear()} ClicUp</span>
                            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
        </footer>
    );
}
