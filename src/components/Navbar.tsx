"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { ShilpzzZLogo } from "./ShilpzzZLogo";
import { ThemeToggle } from "./ThemeToggle";

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2 glassmorphism" : "py-3 bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center justify-start w-64 h-16 relative overflow-visible group ml-2 mt-2">
                    <div className="transform scale-[0.35] sm:scale-[0.45] origin-left w-150 h-30 flex items-center justify-start pointer-events-none group-hover:scale-[0.36] sm:group-hover:scale-[0.46] transition-transform duration-500">
                        <ShilpzzZLogo />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-text-main/80 hover:text-primary transition-all duration-300 py-1 group hover:-translate-y-0.5"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA & Theme */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button variant="gradient" className="rounded-full shadow-[0_0_20px_rgba(108,99,255,0.2)]">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-text-main"
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
                                className="relative text-base font-medium text-text-main hover:text-secondary w-fit group"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                            </Link>
                        ))}
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                            <span className="text-sm text-text-main/50 font-medium">Toggle Theme</span>
                            <ThemeToggle />
                        </div>
                        <Button variant="gradient" className="w-full mt-4">
                            Get Started
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
