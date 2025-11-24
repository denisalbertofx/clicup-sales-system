'use client';

import { motion } from 'framer-motion';

export default function TechBackground() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#0B1120]">

            {/* 1. Deep Ambient Base - Slightly Lighter for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0B1120]" />

            {/* 2. Fluid Orbs - REMOVED mix-blend-screen, INCREASED Opacity */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/40 rounded-full blur-[100px] opacity-60"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/40 rounded-full blur-[80px] opacity-60"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-blue-600/30 rounded-full blur-[120px] opacity-50"
            />

            {/* 3. Subtle Noise Texture - Increased Opacity */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* 4. Central Glow - Brighter */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent blur-3xl pointer-events-none" />

            {/* 5. Footer Integration - Seamless Grid Transition */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="footer-grid-bg" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#footer-grid-bg)" />
                    </svg>
                </div>
                {/* Fade out the grid as it goes up */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0B1120]/50 to-[#0B1120]" />
            </div>

        </div>
    );
}
