import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    className?: string;
    children: React.ReactNode;
    withHover?: boolean;
}

export function GlassCard({
    className,
    children,
    withHover = false,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glassmorphism rounded-2xl p-6 transition-all duration-300",
                withHover && "hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(108,99,255,0.15)]",
                className
            )}
            whileHover={withHover ? { y: -5 } : undefined}
            {...props}
        >
            {children}
        </motion.div>
    );
}
