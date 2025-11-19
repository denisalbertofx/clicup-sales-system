"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DemoFormModal({ isOpen, onClose }: DemoFormModalProps) {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Redirect to thank you page
        window.location.href = "/gracias";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-border max-w-md w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="relative p-6 border-b border-border">
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-4 p-2 rounded-lg hover:bg-secondary transition-colors"
                                >
                                    <X className="h-5 w-5 text-muted-foreground" />
                                </button>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-heading font-bold text-foreground">
                                        Agenda tu Demo
                                    </h2>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Completa el formulario y te contactaremos en minutos
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
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

                                {/* Empresa */}
                                <div>
                                    <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                                        Nombre de tu Negocio *
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <input
                                            type="text"
                                            id="empresa"
                                            name="empresa"
                                            required
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            placeholder="Mi Negocio LLC"
                                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 text-base font-semibold"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Enviando...
                                        </div>
                                    ) : (
                                        "Agendar mi Demo Gratis"
                                    )}
                                </Button>

                                <p className="text-xs text-center text-muted-foreground">
                                    Al enviar este formulario, aceptas nuestros términos y condiciones
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
