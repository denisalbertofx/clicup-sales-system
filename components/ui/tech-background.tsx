'use client';

import { motion } from 'framer-motion';

export default function TechBackground() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#0B1120]">

            {/* 1. Animated Perspective Grid (The Floor) - Increased Opacity */}
            <div className="absolute inset-0 [perspective:1000px]">
                <motion.div
                    animate={{ backgroundPosition: ['0px 0px', '0px 100px'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f80_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f80_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)] origin-top opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
            </div>

            {/* 2. Data Beams (Rising Light) - Brighter & More Visible */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`beam-${i}`}
                        initial={{ height: '0%', opacity: 0 }}
                        animate={{
                            height: ['0%', '100%'],
                            opacity: [0, 0.8, 0],
                            left: `${10 + i * 12}%`
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-0 w-[2px] bg-gradient-to-t from-cyan-400 via-blue-500 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    />
                ))}
            </div>

            {/* 3. Floating Tech Particles - Larger & Brighter */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />
                ))}
            </div>

            {/* 4. Central Spotlight (Focus on Widget) - Stronger */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />

            {/* 5. Ambient Glows - More Vibrant */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] opacity-50" />

        </div>
    );
}
