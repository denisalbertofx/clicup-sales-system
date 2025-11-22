'use client';

import { motion } from 'framer-motion';

export default function FeatureVisual() {
    return (
        <div className="relative w-full h-[400px] bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>

            {/* Central Pipeline Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                    {/* Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed border-gray-700"
                    ></motion.div>

                    {/* Inner Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 rounded-full border border-gray-800"
                    ></motion.div>

                    {/* Core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
                            <span className="text-4xl font-bold text-white relative z-10">CRM</span>
                        </div>
                    </div>

                    {/* Satellites (Features) */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center shadow-lg"
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: Math.cos(i * 72 * (Math.PI / 180)) * 100,
                                y: Math.sin(i * 72 * (Math.PI / 180)) * 100,
                                opacity: 1
                            }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                        >
                            <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-green-400' :
                                    i === 1 ? 'bg-blue-400' :
                                        i === 2 ? 'bg-purple-400' :
                                            i === 3 ? 'bg-yellow-400' : 'bg-red-400'
                                }`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M0,200 Q400,100 800,200"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>
        </div>
    );
}
