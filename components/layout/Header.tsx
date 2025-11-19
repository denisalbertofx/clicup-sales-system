"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
                        ClicUp
                    </span>
                </Link>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://app.goclicup.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Iniciar Sesión
                    </a>
                    <Link href="/demo">
                        <Button variant="default" size="sm" className="font-semibold">
                            Agendar Demo Gratis
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <div className="container mx-auto px-4 py-4 space-y-3">
                        <a
                            href="https://app.goclicup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Iniciar Sesión
                        </a>
                        <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="default" className="w-full font-semibold">
                                Agendar Demo Gratis
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
