"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
            {/* Dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0D1221] to-[#0A0E17]" />

            {/* Top right purple glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
            />

            {/* Bottom left blue glow */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-[20%] -left-[10%] h-[700px] w-[700px] rounded-full bg-secondary/20 blur-[150px]"
            />
        </div>
    );
}
