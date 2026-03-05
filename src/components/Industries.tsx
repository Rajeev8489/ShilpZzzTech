"use client";

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
        <section className="py-24 relative bg-[#0B0F19]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-gradient">Industries We Serve</h2>
                    <p className="text-text-main/70 text-lg">
                        Our versatile technology solutions drive growth and compliance across multiple leading sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, idx) => {
                        const Icon = ind.icon;
                        return (
                            <GlassCard
                                key={idx}
                                withHover
                                className="group flex flex-col items-center text-center p-8 bg-[#121826]/60 transition-transform cursor-default"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-300">
                                    <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                                <p className="text-sm text-text-main/60">{ind.desc}</p>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
