'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowRight, AlertTriangle, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function StarterContent() {
    const searchParams = useSearchParams();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const emailParam = searchParams.get('email');
        if (emailParam) setEmail(emailParam);
    }, [searchParams]);

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, addBump: false }), // Bump logic handled in checkout page usually, but here we start basic
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al iniciar el pago');
            if (data.url) window.location.href = data.url;

        } catch (err: any) {
            setError(err.message || 'Hubo un error. Intenta de nuevo.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 font-sans text-white selection:bg-green-400 selection:text-blue-950">

            {/* Header / Nav Placeholder */}
            <nav className="p-4 text-center border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
                <span className="font-bold text-xl tracking-tight">ClicUp <span className="text-green-400">Starter</span></span>
            </nav>

            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-4 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-red-500/10 border border-red-500/50 text-red-400 text-sm font-bold uppercase tracking-wider">
                        Oferta Limitada
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        El Sistema Exacto para Instalar una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Agenda Automática</span> en tu Negocio de Limpieza
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Deja de perder tiempo con clientes que no responden y obtén un flujo constante de citas calificadas. <span className="text-green-400 font-bold">Por solo $27.</span>
                    </p>
                </motion.div>
            </section>

            {/* VSL / Problem Section */}
            <section className="max-w-3xl mx-auto px-4 py-12">
                <div className="prose prose-invert prose-lg mx-auto">
                    <p className="text-gray-400 italic text-lg border-l-4 border-green-400 pl-4 mb-8">
                        "Déjame adivinar. Amas tu negocio de limpieza, eres bueno en lo que haces, pero odias la parte de 'vender'..."
                    </p>
                    <p>
                        Odias enviar una cotización y sentir esa ansiedad de no saber si te responderán. Odias llamar a un cliente potencial y que te digan "lo voy a pensar".
                    </p>
                    <p>
                        Ese ciclo es agotador. Y es la razón #1 por la que el 90% de los negocios de servicios locales fracasan.
                    </p>
                    <p className="font-bold text-white text-xl">
                        Pero, ¿y si el problema no fueras tú? ¿Y si el problema fuera que sigues usando un modelo roto?
                    </p>
                    <p>
                        Hoy te presento la solución definitiva: el <strong>Starter de Agenda Automática para Negocios de Limpieza</strong>.
                    </p>
                </div>
            </section>

            {/* Solution / Value Stack */}
            <section className="bg-gray-900 py-20 border-y border-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Esto es TODO lo que recibes por solo $27:
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Embudo de 1-Click para Limpieza",
                                desc: "Landing page y página de agendamiento probadas, listas para clonar.",
                                value: "$197"
                            },
                            {
                                title: "Pipeline de Ventas Pre-configurado",
                                desc: "Visualiza en qué etapa está cada cliente potencial. Cero desorden.",
                                value: "$97"
                            },
                            {
                                title: "Secuencia 'Anti-Fantasmas' (7 Días)",
                                desc: "SMS y Emails automáticos que recuperan hasta un 40% de los leads perdidos.",
                                value: "$297"
                            },
                            {
                                title: "Sistema de 'Respuesta a Llamadas Perdidas'",
                                desc: "SMS automático al instante cuando no puedes contestar el teléfono.",
                                value: "$47"
                            },
                            {
                                title: "Plantillas de Mensajes 'Cierra-Ventas'",
                                desc: "Las 5 respuestas exactas para objeciones como 'es muy caro'.",
                                value: "$97"
                            },
                            {
                                title: "Acceso por 7 Días a ClicUp Pro",
                                desc: "Usa la plataforma completa sin limitaciones.",
                                value: "$69"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-400/50 transition-colors"
                            >
                                <div className="flex-shrink-0 bg-green-400/10 p-2 rounded-full">
                                    <Check className="w-6 h-6 text-green-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-gray-400 mt-1">{item.desc}</p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <span className="text-xs text-gray-500 uppercase">Valor</span>
                                    <div className="text-gray-400 line-through font-mono">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-2xl text-gray-500">Valor Total: <span className="line-through decoration-red-500">$704</span></p>
                    </div>
                </div>
            </section>

            {/* Offer Box */}
            <section className="max-w-3xl mx-auto px-4 py-20">
                <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border-2 border-green-400 shadow-[0_0_60px_rgba(61,255,181,0.15)] relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-green-400 text-blue-950 font-bold py-1 px-8 transform rotate-45 translate-x-8 translate-y-4 shadow-lg">
                        AHORRA 96%
                    </div>

                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-white mb-4">Obtén Acceso Inmediato</h3>
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <span className="text-4xl text-gray-600 line-through">$197</span>
                            <span className="text-7xl font-extrabold text-white tracking-tight">$27</span>
                        </div>
                        <p className="text-green-400 font-medium">Pago único. Sin contratos.</p>
                    </div>

                    <form onSubmit={handleCheckout} className="max-w-md mx-auto space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                Tu Email para el acceso:
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="ejemplo@correo.com"
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-green-400 outline-none transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 px-8 rounded-lg text-2xl font-bold text-blue-950 bg-gradient-to-r from-cyan-400 to-green-400 hover:scale-105 transition-transform duration-200 shadow-xl shadow-green-400/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                'Procesando...'
                            ) : (
                                <>
                                    SÍ, QUIERO MI STARTER
                                    <ArrowRight className="w-6 h-6" />
                                </>
                            )}
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                            <Shield className="w-4 h-4" />
                            Pago 100% Seguro con Stripe
                        </div>
                    </form>
                </div>

                {/* Guarantee */}
                <div className="mt-12 bg-blue-950/50 border border-cyan-500/30 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
                    <div className="flex-shrink-0">
                        <Shield className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold text-white mb-2">Garantía de Implementación en 7 Días</h4>
                        <p className="text-gray-400 text-sm">
                            Si después de 7 días no tienes tu sistema andando, te devolvemos tu dinero y te quedas con todas las plantillas. Sin preguntas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900">
                <p>© {new Date().getFullYear()} ClicUp. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default function StarterPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Cargando...</div>}>
            <StarterContent />
        </Suspense>
    );
}
