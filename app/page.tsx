'use client';

import { motion } from 'framer-motion';
import AuditFormEmbed from '@/components/forms/AuditFormEmbed';
import { ShieldCheck, Zap, TrendingUp, Lock } from 'lucide-react';

export default function LeadMagnetPage() {
    return (
        <div className="min-h-screen font-sans selection:bg-green-400 selection:text-blue-950 bg-[#0B1120] overflow-hidden relative">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Copy & Value Prop */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">
                                Sistema de Auditoría IA v2.0
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                            Descubre Dónde <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                                Pierdes Dinero
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                            Nuestra IA analiza tu presencia digital en segundos y te revela exactamente qué está frenando tus ventas. <span className="text-white font-semibold">Sin costo. Sin compromiso.</span>
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <span>Análisis de SEO y Velocidad Web</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <span>Revisión de Reputación Online</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <span>Detección de Fugas de Conversión</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800/50">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-gray-700 overflow-hidden relative">
                                            <img
                                                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                    </div>
                                    <p className="text-gray-500"><span className="text-white font-bold">1,200+</span> negocios analizados</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: The Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative Elements behind widget */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

                        <div className="relative z-10">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-xs font-bold border border-green-400/20">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    DISPONIBLE AHORA
                                </div>
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                    <ShieldCheck className="w-3 h-3" />
                                    100% Seguro
                                </div>
                            </div>

                            {/* The Widget Component */}
                            <AuditFormEmbed />

                            <p className="text-center text-xs text-gray-600 mt-4">
                                Al hacer clic en &quot;Analizar&quot;, aceptas recibir tu reporte detallado y consejos de optimización.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
