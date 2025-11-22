'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Mail, MessageSquare, Calendar, UserX, UserCheck } from 'lucide-react';

export default function ProblemSolutionMockup() {
    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way (Chaos) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-red-950/10 border border-red-900/30 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20"></div>
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Tu Negocio Actual
                </h3>

                <div className="space-y-4 relative">
                    {/* Chaos Elements */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/20 border border-red-900/30 opacity-60 rotate-1">
                        <Mail className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-200/70">Lead perdido en spam...</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/20 border border-red-900/30 opacity-60 -rotate-2 translate-x-4">
                        <MessageSquare className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-200/70">Cliente en visto por 4 horas...</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/20 border border-red-900/30 opacity-60 rotate-3 -translate-x-2">
                        <Calendar className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-200/70">Cita olvidada (No show)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-900/20 border border-red-900/30 opacity-60 -rotate-1 translate-x-2">
                        <UserX className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-200/70">Seguimiento manual olvidado</span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-red-500/10 rotate-12">CAOS</span>
                    </div>
                </div>
            </motion.div>

            {/* The New Way (Order) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-green-950/10 border border-green-900/30 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20"></div>
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Con ClicUp
                </h3>

                <div className="space-y-4 relative">
                    {/* Order Elements - Connected Flow */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-green-500/20"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 relative z-10"
                    >
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <div className="flex-1 p-3 rounded-lg bg-green-900/20 border border-green-500/30 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-green-100">Lead capturado al instante</span>
                            </div>
                            <span className="text-xs text-green-500 font-mono">0s</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-4 relative z-10"
                    >
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <div className="flex-1 p-3 rounded-lg bg-green-900/20 border border-green-500/30 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-green-100">SMS de bienvenida enviado</span>
                            </div>
                            <span className="text-xs text-green-500 font-mono">2s</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-4 relative z-10"
                    >
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <div className="flex-1 p-3 rounded-lg bg-green-900/20 border border-green-500/30 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <UserCheck className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-green-100">Cita agendada en automático</span>
                            </div>
                            <span className="text-xs text-green-500 font-mono">5m</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
