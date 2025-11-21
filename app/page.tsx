'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';

export default function LeadMagnetPage() {
    const router = useRouter();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        website: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            if (!response.ok) throw new Error('Error al enviar el formulario');

            // Redirect to Audit page with params
            const params = new URLSearchParams({
                first_name: formState.name, // Assuming simple name mapping
                email: formState.email,
                website: formState.website
            });
            router.push(`/auditoria?${params.toString()}`);

        } catch (err) {
            setError('Hubo un error. Por favor intenta de nuevo.');
            setIsSubmitting(false);
        }
    };

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

                {/* Form Card */}
                <div className="max-w-md mx-auto relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400"></div>

                        <div className="mb-8 text-center">
                            <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 text-green-400 text-xs font-bold tracking-wider mb-3 border border-green-500/20">
                                OFERTA POR TIEMPO LIMITADO
                            </span>
                            <h3 className="text-2xl font-bold text-white">Solicita tu Auditoría Express</h3>
                            <p className="text-gray-400 text-sm mt-2">Descubre lo que tu competencia no quiere que sepas.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="sr-only">Tu Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Tu Nombre"
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="sr-only">Tu Mejor Email</label>
                                <input
                                    type="email"
                                    placeholder="Tu Mejor Email"
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="sr-only">Sitio Web (o Facebook)</label>
                                <input
                                    type="text"
                                    placeholder="Sitio Web (o Facebook)"
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
                                    value={formState.website}
                                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                                />
                            </div>

                            {error && (
                                <div className="text-red-400 text-sm flex items-center gap-2 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-8 rounded-lg text-lg font-bold text-blue-950 bg-gradient-to-r from-cyan-400 to-green-400 hover:shadow-[0_0_20px_rgba(61,255,181,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-blue-950 border-t-transparent rounded-full animate-spin" />
                                        Analizando...
                                    </span>
                                ) : 'QUIERO MI AUDITORÍA GRATIS'}
                            </button>

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                                <ShieldCheck className="w-3 h-3" />
                                <span>Tus datos están 100% seguros y encriptados.</span>
                            </div>
                        </form>
                    </div>
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
