"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Use Intersection Observer for better performance than scroll events
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show CTA when hero is not visible (scrolled past it)
                setIsVisible(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '-100px 0px 0px 0px', // Trigger 100px after hero leaves viewport
            }
        );

        // Observe the hero section
        const heroElement = document.querySelector('section');
        if (heroElement) {
            observer.observe(heroElement);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
                >
                    <div className="bg-card border-2 border-primary rounded-full shadow-2xl px-6 py-3 flex items-center gap-4">
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold text-foreground">
                                ¿Listo para reducir cancelaciones?
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Prueba gratis por 14 días
                            </p>
                        </div>
                        <Link href="/demo">
                            <Button size="sm" className="rounded-full group">
                                Agendar Demo
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
