'use client';

import { motion } from 'framer-motion';

export default function TechBackground() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-[#0B1120]">

            {/* 1. Animated Perspective Grid (The Floor) */}
            <div className="absolute inset-0 [perspective:1000px]">
                <motion.div
                    animate={{ backgroundPosition: ['0px 0px', '0px 100px'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)] origin-top opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />
            </div>

            {/* 2. Data Beams (Rising Light) */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`beam-${i}`}
                        initial={{ height: '0%', opacity: 0 }}
                        animate={{
                            height: ['0%', '100%'],
                            opacity: [0, 0.5, 0],
                            left: `${20 + i * 15}%`
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-0 w-[1px] bg-gradient-to-t from-cyan-500 to-transparent blur-[1px]"
                    />
                ))}
            </div>

            {/* 3. Floating Tech Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 0.4, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                    />
                ))}
            </div>

            {/* 4. Central Spotlight (Focus on Widget) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />

            {/* 5. Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] opacity-30" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] opacity-30" />

        </div>
    );
}
