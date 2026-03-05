"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock } from "lucide-react";

const trustItems = [
    {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        description: "Enterprise-grade security",
        color: "text-primary"
    },
    {
        icon: TrendingUp,
        title: "Scalable Solutions",
        description: "Built for unlimited growth",
        color: "text-secondary"
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Rapid agile execution",
        color: "text-emerald-400"
    }
];

export function TrustBar() {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-center p-6 rounded-2xl glassmorphism group cursor-default transition-colors hover:bg-white/5"
                            >
                                <div className={`p-4 rounded-full bg-white/5 mr-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 ${item.color}`}>
                                    <Icon className="w-8 h-8 drop-shadow-[0_0_8px_currentColor]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                    <p className="text-sm text-text-main/60">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
