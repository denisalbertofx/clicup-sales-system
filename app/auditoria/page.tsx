'use client';

import { motion } from 'framer-motion';
import AuditFormEmbed from '@/components/forms/AuditFormEmbed';
import { ShieldCheck, Zap, TrendingUp, Lock } from 'lucide-react';

export default function AuditPage() {
    return (
        <div className="min-h-screen font-sans selection:bg-green-400 selection:text-blue-950 bg-[#0B1120] relative flex flex-col items-center justify-center overflow-x-hidden">

            {/* Enhanced Background Effects */}
            <div className="fixed inset-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
            <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            {/* Content Container */}
            <section className="w-full max-w-4xl mx-auto px-4 py-12 relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mx-auto">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">
                            Auditoría IA Gratuita
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Analiza tu Negocio en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                            Tiempo Real
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Descubre exactamente qué está frenando tus ventas y recibe un plan de acción personalizado.
                    </p>
                </motion.div>

                {/* Widget Container - Centered & Seamless */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-2xl relative"
                >
                    {/* Subtle Glow behind widget */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>

                    <div className="relative z-10">
                        <AuditFormEmbed />
                    </div>

                    <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-green-400" />
                            <span>Datos 100% Seguros</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span>Resultados Instantáneos</span>
                        </div>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}
