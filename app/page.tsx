'use client';

import { motion } from 'framer-motion';
import { Clock, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';
import AuditFormEmbed from '@/components/forms/AuditFormEmbed';

export default function LeadMagnetPage() {
    return (
        <div className="min-h-screen font-sans selection:bg-green-400 selection:text-blue-950">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        ¿Cansado de perder clientes de limpieza que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">cotizan y desaparecen?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
                        Recibe una <span className="text-white font-bold">Auditoría GRATIS</span> en 5 minutos que te muestra exactamente por dónde se están escapando tus ganancias y cómo tapar esas fugas para siempre.
                    </p>
                </motion.div>

                {/* Visual Representation of "Money Leaking" */}
                <div className="my-12 flex justify-center">
                    <div className="relative w-64 h-64 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-[0_0_50px_rgba(61,255,181,0.1)]">
                        <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-20">
                            <div className="w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
                        </div>
                        <TrendingUp className="w-32 h-32 text-red-500 rotate-180" /> {/* Arrow going down representing loss */}
                    </div>
                </div>

                {/* Form Card */}
                <div className="max-w-2xl mx-auto relative z-10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-t-2xl"></div>
                    <AuditFormEmbed />
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="bg-gray-900 py-20 border-y border-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <TrendingUp className="w-8 h-8 text-blue-950" />,
                                title: "¿Inviertes en anuncios pero solo llegan curiosos?",
                                desc: "Te mostraremos por qué tu seguimiento actual no convierte y cómo filtrarlos automáticamente."
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8 text-blue-950" />,
                                title: "¿Te dejan en 'visto' tras cotizar?",
                                desc: "Descubre la secuencia de mensajes exacta que hace que te respondan y te contraten."
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-blue-950" />,
                                title: "¿Tu competencia siempre tiene agenda llena?",
                                desc: "No es suerte. Es un sistema. Te revelamos el componente clave que ellos usan y tú no."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-green-400 mb-6 shadow-lg shadow-green-400/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audit Description */}
            <section className="max-w-4xl mx-auto px-4 py-20">
                <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Lo que descubrirás en tu Auditoría Express
                    </h2>
                    <div className="space-y-8">
                        {[
                            {
                                title: "Tu Puntaje de 'Velocidad de Contacto'",
                                desc: "¿Sabías que si no contactas a un lead en los primeros 5 minutos, la probabilidad de cerrarlo cae un 80%? Mediremos tu velocidad actual."
                            },
                            {
                                title: "El Agujero Negro de las Cotizaciones Perdidas",
                                desc: "Identificaremos si tienes un sistema para recuperar a los que preguntaron precio y nunca más respondieron."
                            },
                            {
                                title: "Tu Potencial de Reputación Online",
                                desc: "Analizaremos cómo estás (o no estás) usando las reseñas de tus clientes felices para atraer nuevos contratos en automático."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <ShieldCheck className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}
