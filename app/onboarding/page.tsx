'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, PlayCircle, Users, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
    const searchParams = useSearchParams();
    const isVip = searchParams.get('upsell') === 'true';

    return (
        <div className="min-h-screen bg-gray-950 font-sans text-white selection:bg-green-400 selection:text-blue-950">

            {/* Navbar Simple */}
            <nav className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur-sm">
                <span className="font-bold text-xl tracking-tight">ClicUp <span className="text-green-400">Member Area</span></span>
                <div className="text-sm text-gray-400">
                    {isVip ? <span className="flex items-center gap-2 text-yellow-400"><Star className="w-4 h-4 fill-yellow-400" /> Miembro VIP</span> : 'Miembro Starter'}
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-4 py-16">

                {/* Welcome Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-full mb-6">
                        <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        {isVip ? (
                            <span>¡Felicidades! Has desbloqueado el <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Nivel VIP</span></span>
                        ) : (
                            <span>¡Todo listo! Bienvenido a <span className="text-green-400">ClicUp</span></span>
                        )}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {isVip
                            ? "Tu cuenta ha sido actualizada con el Acelerador Pro. Vamos a configurar todo contigo ahora mismo."
                            : "Tu sistema de Agenda Automática está listo para ser activado. Sigue los pasos abajo."}
                    </p>
                </motion.div>

                {/* Steps Container */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-900 rounded-xl border border-gray-800 p-8 relative overflow-hidden group hover:border-green-400/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 bg-gray-800 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-400">PASO 1</div>
                        <div className="mb-6">
                            {isVip ? (
                                <Calendar className="w-10 h-10 text-yellow-400" />
                            ) : (
                                <PlayCircle className="w-10 h-10 text-green-400" />
                            )}
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            {isVip ? "Agenda tu Onboarding 1 a 1" : "Mira el Video de Activación"}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
                            {isVip
                                ? "Reserva tu sesión privada de 60 minutos con un experto para configurar tu sistema completo."
                                : "Este video de 10 minutos te muestra exactamente cómo importar las plantillas a tu cuenta."}
                        </p>
                        <a
                            href={isVip ? "https://calendly.com/TU_LINK_VIP" : "#video-modal"} // Placeholder links
                            className={`inline-flex items-center text-sm font-bold ${isVip ? 'text-yellow-400' : 'text-green-400'} hover:underline`}
                        >
                            {isVip ? "Agendar Ahora" : "Ver Video"} <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-900 rounded-xl border border-gray-800 p-8 relative overflow-hidden group hover:border-green-400/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 bg-gray-800 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-400">PASO 2</div>
                        <div className="mb-6">
                            <Users className="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Únete a la Comunidad</h3>
                        <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
                            Accede a nuestro grupo privado de dueños de negocios de limpieza. Haz preguntas y comparte victorias.
                        </p>
                        <a href="#" className="inline-flex items-center text-sm font-bold text-blue-400 hover:underline">
                            Unirme al Grupo <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-900 rounded-xl border border-gray-800 p-8 relative overflow-hidden group hover:border-green-400/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 bg-gray-800 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-400">PASO 3</div>
                        <div className="mb-6">
                            <CheckCircle className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Verifica tu Email</h3>
                        <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
                            Te hemos enviado tus credenciales de acceso y tu recibo de compra. Revisa tu bandeja de entrada (y spam).
                        </p>
                        <span className="text-sm text-gray-500">Enviado a tu correo registrado</span>
                    </motion.div>

                </div>

                {/* Support Section */}
                <div className="mt-20 text-center border-t border-gray-800 pt-10">
                    <p className="text-gray-500 text-sm">
                        ¿Tienes problemas con tu acceso? Escríbenos a <a href="mailto:soporte@clicup.com" className="text-white hover:underline">soporte@clicup.com</a>
                    </p>
                </div>

            </main>
        </div>
    );
}
