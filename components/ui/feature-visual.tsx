"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureVisualProps {
    icon: LucideIcon;
    title: string;
    color?: string;
}

export function FeatureVisual({ icon: Icon, title, color = "primary" }: FeatureVisualProps) {
    return (
        <div className="relative w-full aspect-video bg-gradient-to-br from-background to-muted/30 rounded-lg border border-border overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Central Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`p-8 rounded-2xl bg-gradient-to-br from-${color} to-purple-600 shadow-2xl`}
                >
                    <Icon className="h-16 w-16 text-white" />
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: [20, -20, -40],
                        x: [0, 20, -20],
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full"
                    style={{ left: `${20 + i * 10}%` }}
                />
            ))}

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        </div>
    );
}
