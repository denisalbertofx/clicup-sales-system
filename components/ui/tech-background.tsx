'use client';

import { motion } from 'framer-motion';

export default function TechBackground() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#0B1120]">

            {/* 1. Deep Ambient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-[#0B1120]" />

            {/* 2. Fluid Orbs - Large, Soft, and Slow */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-blue-600/10 rounded-full blur-[150px] opacity-30 mix-blend-screen"
            />

            {/* 3. Subtle Noise Texture for Realism */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* 4. Central Glow (Subtle highlight for content) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        </div>
    );
}
