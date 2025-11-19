"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Mail, Phone, Building2, Users, MessageSquare, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DemoPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        tipoNegocio: "",
        clientesMes: "",
        desafio: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Store form data in localStorage for calendar page
        localStorage.setItem("demoFormData", JSON.stringify(formData));

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Redirect to calendar
        router.push("/calendario");
    };

    const isFormValid = formData.nombre && formData.email && formData.telefono && formData.tipoNegocio && formData.clientesMes && formData.desafio;

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="demo-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#demo-grid)" />
                    </svg>
                </div>

                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">Paso 1 de 2</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            ¡Perfecto! Cuéntanos Sobre Tu Negocio
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Esto nos ayudará a personalizar tu demo y mostrarte exactamente cómo ClicUp puede transformar tu negocio.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800 p-8">
                            <div className="space-y-6">
                                {/* Row 1: Nombre y Email */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Nombre */}
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                                            Nombre Completo *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                required
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                placeholder="Juan Pérez"
                                                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="juan@ejemplo.com"
                                                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2: Teléfono y Tipo de Negocio */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Teléfono */}
                                    <div>
                                        <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                                            Teléfono *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                required
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 123-4567"
                                                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Tipo de Negocio */}
                                    <div>
                                        <label htmlFor="tipoNegocio" className="block text-sm font-medium text-foreground mb-2">
                                            Tipo de Negocio *
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <select
                                                id="tipoNegocio"
                                                name="tipoNegocio"
                                                required
                                                value={formData.tipoNegocio}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                                            >
                                                <option value="">Selecciona una opción</option>
                                                <option value="salon">Salón de Belleza</option>
                                                <option value="dental">Clínica Dental</option>
                                                <option value="gym">Gimnasio</option>
                                                <option value="spa">Spa/Masajes</option>
                                                <option value="medico">Consultorio Médico</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Clientes por Mes */}
                                <div>
                                    <label htmlFor="clientesMes" className="block text-sm font-medium text-foreground mb-2">
                                        ¿Cuántos clientes atiendes al mes? *
                                    </label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <select
                                            id="clientesMes"
                                            name="clientesMes"
                                            required
                                            value={formData.clientesMes}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                                        >
                                            <option value="">Selecciona un rango</option>
                                            <option value="0-50">0-50 clientes</option>
                                            <option value="51-100">51-100 clientes</option>
                                            <option value="101-200">101-200 clientes</option>
                                            <option value="200+">Más de 200 clientes</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Mayor Desafío */}
                                <div>
                                    <label htmlFor="desafio" className="block text-sm font-medium text-foreground mb-2">
                                        ¿Cuál es tu mayor desafío ahora? *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                        <textarea
                                            id="desafio"
                                            name="desafio"
                                            required
                                            value={formData.desafio}
                                            onChange={handleChange}
                                            placeholder="Ej: Muchas citas canceladas, seguimiento manual, etc."
                                            rows={4}
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={!isFormValid || isSubmitting}
                                    className="w-full h-14 text-lg font-semibold group"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Procesando...
                                        </div>
                                    ) : (
                                        <>
                                            Continuar al Calendario
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-center text-muted-foreground">
                                    Al continuar, aceptas nuestros términos y condiciones. Tu información está segura con nosotros.
                                </p>
                            </div>
                        </form>
                    </motion.div>

                    {/* Trust Signals */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>100% Gratis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Sin Tarjeta</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Solo 15 Minutos</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
