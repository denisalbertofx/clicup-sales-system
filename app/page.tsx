'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import ProblemSolutionMockup from '@/components/ui/problem-solution-mockup';
import FeatureVisual from '@/components/ui/feature-visual';

export default function HomePage() {
    return (
        <div className="min-h-screen font-sans selection:bg-green-400 selection:text-blue-950 bg-[#0B1120] overflow-hidden relative">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            {/* Hero Section: The Hook */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm mb-8">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-red-400 text-xs font-bold tracking-wider uppercase">
                                El 80% de tus leads te están ignorando
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                            Deja de Perder Dinero en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
                                Seguimientos Manuales
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Tu competencia no es más inteligente. Solo tienen un sistema que trabaja mientras ellos duermen. ¿Tú qué tienes?
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/auditoria" className="w-full sm:w-auto group relative px-8 py-4 bg-white text-blue-950 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                                <Zap className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                <span>Auditar Mi Negocio Gratis</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem vs Solution Section */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">La Diferencia es Brutal</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            No necesitas "más leads". Necesitas dejar de quemar los que ya tienes.
                        </p>
                    </div>
                    <ProblemSolutionMockup />
                </div>
            </section>

            {/* Feature Visual Section */}
            <section className="py-24 bg-gray-900/30 border-y border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            El Motor Invisible de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Tu Crecimiento
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Imagina un sistema que captura, nutre y agenda citas por ti. Sin que tengas que levantar un dedo. ClicUp no es solo software, es tu mejor empleado.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Embudos de Venta Probados', 'Automatización de WhatsApp y Email', 'CRM Integrado con IA'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/demo" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center gap-2 group">
                            Ver cómo funciona en vivo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <FeatureVisual />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        ¿Vas a seguir perdiendo ventas?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Tu competencia ya está automatizando. No te quedes atrás. Empieza hoy mismo con una auditoría gratuita.
                    </p>
                    <Link href="/auditoria" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-950 font-bold rounded-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 text-lg">
                        Quiero mi Auditoría Ahora
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
