"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#tech" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 glassmorphism" : "py-5 bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Fallback to text if the image fails, but we'll try to show the image if it exists. We'll use just text nicely styled for now since the user prompt requested "Logo: SHILPZZZ TECHNOLOGIES" */}
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                        SHILP<span className="text-secondary">ZZZ</span>
                        <span className="block text-[10px] md:text-xs text-primary uppercase tracking-widest -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">Technologies</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-main/80 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button variant="gradient" className="rounded-full">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glassmorphism border-t border-white/10"
                >
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-text-main hover:text-secondary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="gradient" className="w-full mt-4">
                            Get Started
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
