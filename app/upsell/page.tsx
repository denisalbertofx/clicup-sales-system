'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, AlertTriangle, Loader2, Lock, PlayCircle } from 'lucide-react';
import Link from 'next/link';

function UpsellContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const sid = searchParams.get('session_id');
        if (sid) {
            setSessionId(sid);
        } else {
            // Si no hay session_id, probablemente llegaron por error, redirigir a home o onboarding
            // router.push('/'); 
        }
    }, [searchParams, router]);

    const handleOneClickBuy = async () => {
        if (!sessionId) return;
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/upsell', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Error al procesar el pago');

            // Éxito: Redirigir a Onboarding (marcando que compró el upsell si es necesario, 
            // aunque el webhook se encargará de los tags en GHL)
            router.push('/onboarding?upsell=true');

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Hubo un error con el pago 1-Click. Por favor intenta de nuevo.';
            setError(message);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 font-sans text-white selection:bg-yellow-400 selection:text-black flex flex-col items-center py-12 px-4">

            {/* Progress Bar (Visual Cue) */}
            <div className="w-full max-w-2xl bg-gray-800 h-2 rounded-full mb-8 overflow-hidden">
                <div className="bg-green-500 h-full w-[80%] animate-pulse"></div>
            </div>

            {/* Interrupt Headline */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-4xl mx-auto mb-8"
            >
                <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4 uppercase tracking-tight drop-shadow-lg">
                    ⚠️ ESPERA. Tu compra está confirmada...
                </h1>
                <h2 className="text-xl md:text-2xl text-white font-bold">
                    Pero no actives tu Starter todavía.
                </h2>
            </motion.div>

            {/* Video Placeholder */}
            <div className="w-full max-w-3xl aspect-video bg-gray-900 rounded-xl border-2 border-gray-800 shadow-2xl flex items-center justify-center relative overflow-hidden mb-10 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
                <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300 z-10" />
                <p className="absolute bottom-4 text-gray-400 text-sm z-10">Ver mensaje importante del fundador (60s)</p>
            </div>

            {/* Sales Letter / Content */}
            <div className="max-w-3xl mx-auto text-center mb-10">
                <p className="text-xl text-gray-300 mb-6">
                    El 90% de los que compran el Starter fracasan por una razón: <span className="text-red-400 font-bold border-b border-red-400">la falta de implementación rápida.</span>
                </p>
                <p className="text-gray-400 mb-8">
                    Podrías pasar las próximas 2 semanas intentando conectar todo por tu cuenta... o puedes dejar que <strong>nosotros lo hagamos contigo, paso a paso, en una sola llamada.</strong>
                </p>

                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-left shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Añade el <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Acelerador Pro</span> a tu orden:
                    </h3>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Sesión de Onboarding Express (60 min) - Configuración 1 a 1 en vivo.",
                            "2 Automatizaciones Críticas Adicionales (Reseñas + Reactivación).",
                            "Soporte Prioritario por 30 Días (Respuesta en <24h)."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                                <span className="text-gray-200 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-center gap-4 mb-2">
                        <span className="text-gray-500 line-through text-xl">$297</span>
                        <span className="text-4xl font-extrabold text-white">$97</span>
                    </div>
                    <p className="text-center text-sm text-gray-500 mb-8">Pago único. Oferta válida solo en esta página.</p>

                    {/* 1-Click Button */}
                    <button
                        onClick={handleOneClickBuy}
                        disabled={loading || !sessionId}
                        className="w-full py-5 px-6 rounded-xl text-xl md:text-2xl font-bold text-blue-950 bg-gradient-to-r from-green-400 to-lime-300 hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(74,222,128,0.3)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-6 h-6 animate-spin" />
                                <Loader2 className="w-6 h-6 animate-spin" />
                                Procesando tu orden...
                            </>
                        ) : (
                            <>
                                <Lock className="w-6 h-6" />
                                SÍ, AÑADIR POR $97 (1-CLICK)
                            </>
                        )}
                    </button>

                    {error && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center flex items-center justify-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Reject Link */}
            <Link
                href="/onboarding"
                className="text-gray-500 hover:text-white text-sm underline decoration-gray-700 hover:decoration-white transition-all"
            >
                No, gracias. Prefiero implementar todo por mi cuenta y renuncio al soporte prioritario.
            </Link>

            <footer className="mt-12 text-gray-700 text-xs">
                <p>Copyright © {new Date().getFullYear()} ClicUp. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default function UpsellPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Cargando...</div>}>
            <UpsellContent />
        </Suspense>
    );
}
