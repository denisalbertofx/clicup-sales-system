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

        </div>
    );
}
