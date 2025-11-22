'use client';

import { motion } from 'framer-motion';
import { Database, Mail, MessageSquare, Globe, CheckCircle2, Calendar } from 'lucide-react';

export default function FeatureVisual() {
    return (
        <div className="relative w-full h-[500px] bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800 flex items-center justify-center">
            {/* Background Grid & Glow */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

            {/* Central Hub (CRM) */}
            <div className="relative z-20">
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-blue-400/30 relative"
                >
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping opacity-20"></div>
                    <div className="text-center">
                        <Database className="w-8 h-8 text-white mx-auto mb-1" />
                        <span className="text-xs font-bold text-white tracking-wider">CLICUP</span>
                    </div>
                </motion.div>

                {/* Orbiting Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-8 rounded-full border border-dashed border-blue-500/20"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-16 rounded-full border border-blue-500/10"
                />
            </div>

            {/* Incoming Sources (Left Side) */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 space-y-12 z-10">
                {[
                    { icon: Globe, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", label: "Web" },
                    { icon: Mail, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", label: "Ads" },
                    { icon: MessageSquare, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", label: "Chat" }
                ].map((item, i) => (
                    <div key={i} className="relative group">
                        <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center backdrop-blur-sm relative z-10`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        {/* Particle Flowing to Center */}
                        <div className="absolute top-1/2 left-12 w-[140px] h-[1px] bg-gradient-to-r from-gray-800 to-transparent overflow-hidden">
                            <motion.div
                                animate={{ x: [0, 140] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                className={`w-8 h-[2px] ${item.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor] rounded-full`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Outgoing Results (Right Side) */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-16 z-10">
                {[
                    { icon: CheckCircle2, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", label: "Ventas" },
                    { icon: Calendar, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", label: "Citas" }
                ].map((item, i) => (
                    <div key={i} className="relative group">
                        {/* Particle Flowing from Center */}
                        <div className="absolute top-1/2 right-12 w-[140px] h-[1px] bg-gradient-to-l from-gray-800 to-transparent overflow-hidden">
                            <motion.div
                                animate={{ x: [-140, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.7 }}
                                className={`w-8 h-[2px] ${item.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor] rounded-full`}
                            />
                        </div>
                        <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center backdrop-blur-sm relative z-10`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Connecting Lines (Static Background) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <path d="M150 150 C 250 150, 350 250, 450 250" stroke="url(#grad1)" strokeWidth="1" fill="none" />
                <path d="M150 250 C 250 250, 350 250, 450 250" stroke="url(#grad1)" strokeWidth="1" fill="none" />
                <path d="M150 350 C 250 350, 350 250, 450 250" stroke="url(#grad1)" strokeWidth="1" fill="none" />

                <path d="M550 250 C 650 250, 750 200, 850 200" stroke="url(#grad2)" strokeWidth="1" fill="none" />
                <path d="M550 250 C 650 250, 750 300, 850 300" stroke="url(#grad2)" strokeWidth="1" fill="none" />

                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.5)" />
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
