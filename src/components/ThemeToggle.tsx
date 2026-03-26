"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <button className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glassmorphism hover:bg-black/5 dark:hover:bg-white/10 transition-colors overflow-hidden" disabled aria-hidden="true"></button>;
    }

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glassmorphism hover:bg-black/5 dark:hover:bg-white/10 transition-colors overflow-hidden"
            aria-label="Toggle theme"
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-5 h-5 text-text-main" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="w-5 h-5 text-text-main" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
