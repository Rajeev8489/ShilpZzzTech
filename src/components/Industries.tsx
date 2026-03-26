"use client";

import { motion } from "framer-motion";
import { Scale, HeartPulse, Building2, ShoppingBag, GraduationCap, Factory } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const industries = [
    { icon: Scale, name: "LegalTech", desc: "Settlement processing & compliance" },
    { icon: HeartPulse, name: "Healthcare", desc: "HIPAA compliant & secure data" },
    { icon: Building2, name: "FinTech", desc: "High-frequency & enterprise fintech" },
    { icon: ShoppingBag, name: "E-commerce", desc: "Scalable retail platforms" },
    { icon: GraduationCap, name: "EdTech", desc: "Interactive learning systems" },
    { icon: Factory, name: "Manufacturing", desc: "IoT & automated process tracking" },
];

export function Industries() {
    return (
        <section className="py-24 relative bg-surface/20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-main">Industries We <span className="text-gradient">Serve</span></h2>
                    <p className="text-text-main/70 text-lg">
                        Our versatile technology solutions drive growth and compliance across multiple leading sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, idx) => {
                        const Icon = ind.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <GlassCard
                                    withHover
                                    className="group flex flex-col items-center text-center p-8 bg-white dark:bg-surface/50 border border-border dark:border-white/5 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl cursor-default h-full"
                                >
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-16 h-16 rounded-full bg-surface dark:bg-surface/80 flex items-center justify-center border border-border dark:border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-500">
                                            <Icon className="w-8 h-8 text-text-main/70 group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-text-main mb-2">{ind.name}</h3>
                                    <p className="text-sm text-text-main/60">{ind.desc}</p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
