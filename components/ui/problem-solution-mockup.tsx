"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProblemSolutionMockupProps {
    problemIcon: LucideIcon;
    solutionIcon: LucideIcon;
    problemTitle: string;
    solutionTitle: string;
    mockupType: "calendar" | "automation" | "unified" | "reviews" | "messaging" | "payments";
    index: number;
}

export function ProblemSolutionMockup({
    problemIcon: ProblemIcon,
    solutionIcon: SolutionIcon,
    problemTitle,
    solutionTitle,
    mockupType,
    index,
}: ProblemSolutionMockupProps) {
    const renderMockup = () => {
        switch (mockupType) {
            case "calendar":
                return <CalendarMockup />;
            case "automation":
                return <AutomationMockup />;
            case "unified":
                return <UnifiedPlatformMockup />;
            case "reviews":
                return <ReviewsMockup />;
            case "messaging":
                return <MessagingMockup />;
            case "payments":
                return <PaymentsMockup />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl transition-all group overflow-hidden"
        >
            {/* Problem Section */}
            <div className="mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                        <ProblemIcon className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1">Problema</h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">{problemTitle}</p>
                    </div>
                </div>
            </div>

            {/* Visual Mockup */}
            <div className="mb-6 relative h-32 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                {renderMockup()}
            </div>

            {/* Solution Section */}
            <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                    <SolutionIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-1">Solución ClicUp</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">{solutionTitle}</p>
                </div>
            </div>
        </motion.div>
    );
}

// Calendar Mockup - Shows appointments with no-shows
function CalendarMockup() {
    return (
        <div className="absolute inset-0 p-3">
            <div className="grid grid-cols-3 gap-1 h-full">
                {[
                    { status: "confirmed", time: "9:00" },
                    { status: "no-show", time: "10:00" },
                    { status: "confirmed", time: "11:00" },
                    { status: "no-show", time: "14:00" },
                    { status: "confirmed", time: "15:00" },
                    { status: "pending", time: "16:00" },
                ].map((apt, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className={`rounded p-1.5 text-[8px] font-medium ${apt.status === "no-show"
                                ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800"
                                : apt.status === "confirmed"
                                    ? "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-800"
                                    : "bg-yellow-100 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-800"
                            }`}
                    >
                        {apt.time}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Automation Mockup - Shows AI workflow
function AutomationMockup() {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="flex items-center gap-2">
                {[1, 2, 3].map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xs font-bold">
                            {step}
                        </div>
                        {i < 2 && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 12 }}
                                transition={{ delay: 0.7 + i * 0.2 }}
                                className="h-0.5 bg-purple-500"
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Unified Platform Mockup - Shows multiple tools becoming one
function UnifiedPlatformMockup() {
    return (
        <div className="absolute inset-0 p-4">
            <div className="grid grid-cols-2 gap-2 h-full">
                {["SMS", "Email", "WhatsApp", "FB"].map((tool, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800 rounded flex items-center justify-center text-[10px] font-semibold text-blue-700 dark:text-blue-400"
                    >
                        {tool}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Reviews Mockup - Shows star ratings
function ReviewsMockup() {
    return (
        <div className="absolute inset-0 p-3 flex flex-col gap-1.5">
            {[5, 5, 4, 5].map((stars, i) => (
                <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded px-2 py-1"
                >
                    {[...Array(stars)].map((_, j) => (
                        <span key={j} className="text-yellow-500 text-[10px]">★</span>
                    ))}
                    {[...Array(5 - stars)].map((_, j) => (
                        <span key={j} className="text-zinc-300 dark:text-zinc-700 text-[10px]">★</span>
                    ))}
                </motion.div>
            ))}
        </div>
    );
}

// Messaging Mockup - Shows unified inbox
function MessagingMockup() {
    return (
        <div className="absolute inset-0 p-3 flex flex-col gap-1.5">
            {[
                { platform: "SMS", unread: 3 },
                { platform: "WhatsApp", unread: 5 },
                { platform: "FB", unread: 2 },
            ].map((msg, i) => (
                <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center justify-between bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded px-2 py-1.5"
                >
                    <span className="text-[9px] font-medium text-zinc-700 dark:text-zinc-300">{msg.platform}</span>
                    <span className="text-[8px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
                        {msg.unread}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

// Payments Mockup - Shows payment link
function PaymentsMockup() {
    return (
        <div className="absolute inset-0 p-4 flex flex-col items-center justify-center gap-2">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg px-4 py-2 text-[10px] font-bold"
            >
                Pagar $150
            </motion.div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="h-1 bg-green-500 rounded-full"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-[8px] text-green-600 dark:text-green-400 font-semibold"
            >
                ✓ Pagado
            </motion.div>
        </div>
    );
}
