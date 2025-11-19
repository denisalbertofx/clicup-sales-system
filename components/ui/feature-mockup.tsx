"use client";

import { motion } from "framer-motion";
import { Calendar, Star, MessageCircle, Zap, CreditCard, BarChart3, Check, Clock, Users, TrendingUp } from "lucide-react";

interface FeatureMockupProps {
    type: "calendar" | "reviews" | "messaging" | "automation" | "payments" | "analytics";
}

export function FeatureMockup({ type }: FeatureMockupProps) {
    const renderMockup = () => {
        switch (type) {
            case "calendar":
                return <CalendarFeatureMockup />;
            case "reviews":
                return <ReviewsFeatureMockup />;
            case "messaging":
                return <MessagingFeatureMockup />;
            case "automation":
                return <AutomationFeatureMockup />;
            case "payments":
                return <PaymentsFeatureMockup />;
            case "analytics":
                return <AnalyticsFeatureMockup />;
        }
    };

    return (
        <div className="relative w-full h-64 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden group">
            {renderMockup()}
        </div>
    );
}

// Calendar Feature Mockup
function CalendarFeatureMockup() {
    const timeSlots = [
        { time: "9:00 AM", status: "available" },
        { time: "10:00 AM", status: "booked" },
        { time: "11:00 AM", status: "available" },
        { time: "2:00 PM", status: "booked" },
        { time: "3:00 PM", status: "available" },
        { time: "4:00 PM", status: "available" },
    ];

    return (
        <div className="absolute inset-0 p-6">
            <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Agenda de Hoy</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-3 rounded-lg border-2 ${slot.status === "booked"
                                ? "bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-800"
                                : "bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-800"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{slot.time}</span>
                            {slot.status === "booked" ? (
                                <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                            ) : (
                                <Clock className="h-3 w-3 text-green-600 dark:text-green-400" />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Reviews Feature Mockup
function ReviewsFeatureMockup() {
    return (
        <div className="absolute inset-0 p-6">
            <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Reseñas Recientes</span>
            </div>
            <div className="space-y-3">
                {[
                    { name: "María G.", stars: 5, time: "Hace 2h" },
                    { name: "Carlos R.", stars: 5, time: "Hace 5h" },
                    { name: "Ana M.", stars: 5, time: "Hace 1d" },
                ].map((review, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{review.name}</span>
                            <span className="text-[10px] text-zinc-500 dark:text-zinc-400">{review.time}</span>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(review.stars)].map((_, j) => (
                                <Star key={j} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Messaging Feature Mockup
function MessagingFeatureMockup() {
    return (
        <div className="absolute inset-0 p-6">
            <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Mensajes</span>
            </div>
            <div className="space-y-2">
                {[
                    { platform: "WhatsApp", count: 5, color: "bg-green-100 dark:bg-green-950/30" },
                    { platform: "SMS", count: 3, color: "bg-blue-100 dark:bg-blue-950/30" },
                    { platform: "Facebook", count: 2, color: "bg-purple-100 dark:bg-purple-950/30" },
                    { platform: "Instagram", count: 4, color: "bg-pink-100 dark:bg-pink-950/30" },
                ].map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`${msg.color} border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 flex items-center justify-between`}
                    >
                        <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{msg.platform}</span>
                        <span className="bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {msg.count}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Automation Feature Mockup
function AutomationFeatureMockup() {
    return (
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
            <div className="flex items-center gap-3 mb-4">
                {[
                    { icon: Users, label: "Lead" },
                    { icon: Zap, label: "IA" },
                    { icon: Check, label: "Cliente" },
                ].map((step, i) => (
                    <motion.div key={i} className="flex items-center gap-2">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg"
                        >
                            <step.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        {i < 2 && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 16 }}
                                transition={{ delay: 0.3 + i * 0.2 }}
                                className="h-1 bg-purple-500 rounded"
                            />
                        )}
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xs text-center text-zinc-600 dark:text-zinc-400 font-semibold"
            >
                Automatización 24/7
            </motion.div>
        </div>
    );
}

// Payments Feature Mockup
function PaymentsFeatureMockup() {
    return (
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center gap-4">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl px-6 py-4 shadow-xl"
            >
                <div className="text-xs mb-1">Pago Pendiente</div>
                <div className="text-2xl font-bold">$150.00</div>
            </motion.div>
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-zinc-800 border-2 border-green-500 text-green-600 dark:text-green-400 px-6 py-2 rounded-lg text-xs font-bold hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors"
            >
                Enviar Link de Pago
            </motion.button>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400"
            >
                <CreditCard className="h-3 w-3" />
                <span>Stripe • PayPal • Tarjetas</span>
            </motion.div>
        </div>
    );
}

// Analytics Feature Mockup
function AnalyticsFeatureMockup() {
    return (
        <div className="absolute inset-0 p-6">
            <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Dashboard</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                    { label: "Conversión", value: "68%", trend: "+5%" },
                    { label: "ROI", value: "3.2x", trend: "+12%" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3"
                    >
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{stat.value}</div>
                        <div className="text-[10px] text-green-600 dark:text-green-400 font-semibold">{stat.trend}</div>
                    </motion.div>
                ))}
            </div>
            <div className="flex items-end justify-between gap-1 h-16">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                    />
                ))}
            </div>
        </div>
    );
}
