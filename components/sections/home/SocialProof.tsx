"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Building2, CalendarCheck, MessageSquare, Star, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
    {
        id: 1,
        label: "Negocios Activos",
        value: 120,
        icon: Building2,
        color: "from-blue-500 to-cyan-500",
        suffix: "+",
        trend: 12,
    },
    {
        id: 2,
        label: "Citas Agendadas/Mes",
        value: 2500,
        icon: CalendarCheck,
        color: "from-purple-500 to-pink-500",
        suffix: "+",
        format: "k",
        trend: 15,
    },
    {
        id: 3,
        label: "Reseñas Generadas",
        value: 8000,
        icon: Star,
        color: "from-yellow-500 to-orange-500",
        suffix: "+",
        format: "k",
        trend: 11,
    },
    {
        id: 4,
        label: "Mensajes Automatizados",
        value: 150000,
        icon: MessageSquare,
        color: "from-green-500 to-emerald-500",
        suffix: "+",
        format: "k",
        trend: 9,
    },
];

function AnimatedCounter({ value, format, suffix }: { value: number; format?: string; suffix?: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (format === "k") {
            return `${Math.round(latest / 1000)}k`;
        } else if (format === "M") {
            return `${(latest / 1000000).toFixed(1)}M`;
        }
        return Math.round(latest).toString();
    });

    useEffect(() => {
        const animation = animate(count, value, { duration: 2, ease: "easeOut" });
        return animation.stop;
    }, [count, value]);

    return (
        <div className="flex items-baseline gap-1">
            <motion.span className="text-4xl md:text-5xl font-bold">{rounded}</motion.span>
            {suffix && <span className="text-2xl font-bold opacity-80">{suffix}</span>}
        </div>
    );
}

export function SocialProof() {
    const [liveActivities] = useState([
        { user: "María G.", action: "agendó una cita", time: "Hace 2 min", location: "Miami, FL" },
        { user: "Carlos R.", action: "dejó una reseña 5★", time: "Hace 5 min", location: "Los Angeles, CA" },
        { user: "Ana M.", action: "realizó un pago", time: "Hace 8 min", location: "Houston, TX" },
    ]);

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30 border-y border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="social-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#social-grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            className="relative group"
                        >
                            <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-xl">
                                {/* Icon with Gradient */}
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${metric.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    <metric.icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Animated Counter */}
                                <div className="text-foreground mb-2">
                                    <AnimatedCounter value={metric.value} format={metric.format} suffix={metric.suffix} />
                                </div>

                                {/* Label */}
                                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>

                                {/* Trend Indicator */}
                                <div className="flex items-center gap-1 mt-2">
                                    <TrendingUp className="h-3 w-3 text-green-500" />
                                    <span className="text-xs font-semibold text-green-500">+{metric.trend}% este mes</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Live Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </div>
                            <h3 className="text-sm font-semibold text-foreground">Actividad en Tiempo Real</h3>
                        </div>

                        <div className="space-y-3">
                            {liveActivities.map((activity, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 + 0.5 }}
                                    className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                                            {activity.user.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">
                                                <span className="font-semibold">{activity.user}</span> {activity.action}
                                            </p>
                                            <p className="text-xs text-muted-foreground">{activity.location}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-muted-foreground mb-4">Confiado por negocios en todo Estados Unidos</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
                        {["Salón Elegancia", "Gimnasio PowerFit", "Clínica Dental Pro", "Restaurante Sabor", "Spa Zen"].map((name, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + i * 0.1 }}
                                className="text-lg font-bold font-heading hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
                            >
                                {name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
