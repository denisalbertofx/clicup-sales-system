'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BarChart3, Users, Zap, Globe } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen font-sans selection:bg-green-400 selection:text-blue-950 bg-[#0B1120] overflow-hidden relative">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">
                                La Plataforma #1 para Agencias Hispanas
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                            Todo tu Negocio <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                                En Un Solo Lugar
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Deja de pagar por 10 herramientas diferentes. ClicUp te da CRM, embudos, email marketing y automatización en una sola plataforma diseñada para escalar.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/auditoria" className="w-full sm:w-auto group relative px-8 py-4 bg-white text-blue-950 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                                <Zap className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                <span>Auditar Mi Negocio Gratis</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/demo" className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 text-white font-bold rounded-xl border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                                <span>Ver Demo en Vivo</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-20 relative mx-auto max-w-5xl"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800/20 to-transparent pointer-events-none"></div>
                            {/* Placeholder for Dashboard Image - Using a gradient box for now */}
                            <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600 font-mono text-sm">
                                [Dashboard Preview Image Placeholder]
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-900/50 border-y border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Más Potencia. Menos Estrés.</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Hemos simplificado lo complejo. Todo lo que necesitas para vender, entregar y retener clientes está aquí.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="w-8 h-8 text-cyan-400" />,
                                title: "Sitios Web y Embudos",
                                desc: "Crea páginas de aterrizaje que convierten visitantes en clientes en minutos, no días."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-purple-400" />,
                                title: "CRM Inteligente",
                                desc: "Gestiona todos tus leads y clientes en un solo lugar. Nunca pierdas una oportunidad de venta."
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8 text-green-400" />,
                                title: "Automatización Total",
                                desc: "Email, SMS, y seguimientos automáticos que trabajan por ti las 24 horas del día."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-900/10">
                                <div className="mb-6 p-4 rounded-xl bg-gray-800 w-fit group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        ¿Listo para Escalar tu Agencia?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Únete a las agencias que están facturando más y trabajando menos con ClicUp.
                    </p>
                    <Link href="/auditoria" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300 text-lg">
                        Comenzar con una Auditoría Gratis
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
