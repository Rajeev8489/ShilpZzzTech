"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ShilpzzZLogo = () => {
    const [stage, setStage] = useState<'particles' | 'emblem' | 'text'>('particles');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timers = [
            setTimeout(() => setStage('emblem'), 2500),
            setTimeout(() => setStage('text'), 5000),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    if (!mounted) {
        return <div className="relative w-full h-full flex items-center justify-center bg-transparent overflow-hidden" />;
    }

    const blue = "#00f2ff";
    const purple = "#bc13fe";

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-transparent overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        opacity: [0.05, 0.15, 0.05],
                        scale: [1.2, 1, 1.2]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-500/10 blur-[100px] rounded-full"
                />
            </div>

            <AnimatePresence mode="wait">
                {stage === 'particles' && (
                    <motion.div
                        key="particles"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: 'blur(20px)' }}
                        className="relative w-96 h-96"
                    >
                        {/* Circuit Lines Simulation */}
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            {[...Array(12)].map((_, i) => (
                                <motion.path
                                    key={i}
                                    d={`M ${100 + Math.cos(i) * 80} ${100 + Math.sin(i) * 80} L 100 100`}
                                    stroke={i % 2 === 0 ? blue : purple}
                                    strokeWidth="0.5"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 1, 0.5] }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.1,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        repeatDelay: 0.5
                                    }}
                                />
                            ))}
                            {/* Floating Particles */}
                            {[...Array(30)].map((_, i) => (
                                <motion.circle
                                    key={`p-${i}`}
                                    r="0.8"
                                    fill={i % 3 === 0 ? blue : purple}
                                    initial={{
                                        x: Math.random() * 200,
                                        y: Math.random() * 200,
                                        opacity: 0
                                    }}
                                    animate={{
                                        x: 100 + (Math.random() - 0.5) * 40,
                                        y: 100 + (Math.random() - 0.5) * 40,
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: Math.random() * 2,
                                        repeat: Infinity
                                    }}
                                />
                            ))}
                        </svg>
                    </motion.div>
                )}

                {stage === 'emblem' && (
                    <motion.div
                        key="emblem"
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                        transition={{ type: "spring", damping: 15 }}
                        className="relative"
                    >
                        <svg width="200" height="200" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={blue} />
                                    <stop offset="100%" stopColor={purple} />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Hexagonal Tech Emblem */}
                            <motion.path
                                d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z"
                                fill="none"
                                stroke="url(#emblemGrad)"
                                strokeWidth="2"
                                filter="url(#glow)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 50 25 L 72 38 L 72 62 L 50 75 L 28 62 L 28 38 Z"
                                fill="url(#emblemGrad)"
                                opacity="0.3"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                            {/* Inner Circuit Details */}
                            <motion.line x1="50" y1="10" x2="50" y2="90" stroke={blue} strokeWidth="0.5" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1 }} />
                            <motion.line x1="15" y1="30" x2="85" y2="70" stroke={purple} strokeWidth="0.5" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2 }} />
                            <motion.line x1="15" y1="70" x2="85" y2="30" stroke={blue} strokeWidth="0.5" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4 }} />
                        </svg>
                    </motion.div>
                )}

                {stage === 'text' && (
                    <motion.div
                        key="text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-baseline space-x-1">
                            <motion.h1
                                className="text-5xl md:text-7xl font-sans font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-[#00f2ff] to-[#bc13fe]"
                                initial={{ letterSpacing: "0.2em", filter: "blur(10px)", opacity: 0 }}
                                animate={{ letterSpacing: "-0.02em", filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                SHILP
                            </motion.h1>
                            <motion.span
                                className="text-5xl md:text-7xl font-sans font-black tracking-tighter"
                                animate={{
                                    color: [blue, purple, blue],
                                    scale: [1, 1.05, 1],
                                    textShadow: [
                                        `0 0 20px ${blue}`,
                                        `0 0 40px ${purple}`,
                                        `0 0 20px ${blue}`
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                zzZ
                            </motion.span>
                        </div>
                        <div className="mt-4 flex">
                            {"TECHNOLOGIES".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 0.6, x: 0 }}
                                    transition={{ delay: 1 + i * 0.08, duration: 0.2 }}
                                    className="text-xs md:text-lg font-mono uppercase text-blue-400 tracking-[0.4em]"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>

                        {/* Final Pulse Effect */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                            className="absolute w-full h-full border border-blue-500/30 rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            
        </div>
    );
};
