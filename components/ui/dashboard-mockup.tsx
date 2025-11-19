"use client";

import { motion } from "framer-motion";
import { Calendar, TrendingUp, Users, BarChart3, Check } from "lucide-react";

export function DashboardMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl mx-auto"
        >
            {/* Browser Window Frame */}
            <div className="bg-white dark:bg-zinc-900 border border-border rounded-xl overflow-hidden shadow-2xl">
                {/* Browser Header */}
                <div className="bg-zinc-100 dark:bg-zinc-800 border-b border-border px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4">
                        <div className="bg-white dark:bg-zinc-900 rounded-md px-3 py-1.5 text-xs text-muted-foreground border border-border">
                            app.clicup.com/dashboard
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-white dark:bg-zinc-950 p-8">
                    {/* Automated Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 mb-6"
                    >
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        <span className="text-xs font-medium text-green-700 dark:text-green-400">Automatizado</span>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: "Citas Hoy", value: "24", icon: Calendar, trend: "+12%", color: "text-blue-600" },
                            { label: "Nuevos Leads", value: "18", icon: Users, trend: "+8%", color: "text-purple-600" },
                            { label: "Reseñas", value: "156", icon: TrendingUp, trend: "+24%", color: "text-pink-600" },
                            { label: "Conversión", value: "68%", icon: BarChart3, trend: "+5%", color: "text-green-600" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">{stat.trend}</span>
                                </div>
                                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{stat.value}</div>
                                <div className="text-xs text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Chart Section */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Citas por Semana</h3>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">Últimos 7 días</div>
                        </div>

                        {/* Gradient Bar Chart */}
                        <div className="relative h-48 mb-4">
                            <div className="absolute inset-0 flex items-end justify-between gap-3">
                                {[
                                    { height: 65, day: 'Lun', value: 19 },
                                    { height: 45, day: 'Mar', value: 14 },
                                    { height: 80, day: 'Mié', value: 24 },
                                    { height: 55, day: 'Jue', value: 17 },
                                    { height: 90, day: 'Vie', value: 27 },
                                    { height: 70, day: 'Sáb', value: 21 },
                                    { height: 95, day: 'Dom', value: 29 },
                                ].map((bar, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${bar.height}%` }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                                            className="w-full rounded-t-lg bg-gradient-to-t from-purple-900 via-purple-600 to-purple-400 relative group cursor-pointer min-h-[20px]"
                                            style={{ height: `${bar.height}%` }}
                                        >
                                            {/* Tooltip on hover */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                                                {bar.value} citas
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Day Labels */}
                        <div className="flex justify-between gap-3">
                            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, i) => (
                                <div key={i} className="flex-1 text-center">
                                    <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">{day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating "En Tiempo Real" Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 top-1/3 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-lg"
            >
                <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </div>
                    <span className="text-xs font-semibold">En Tiempo Real</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
