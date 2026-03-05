"use client";

import { BrainCircuit, Code, Smartphone, Cloud, Scale } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const services = [
    {
        icon: BrainCircuit,
        title: "AI Powered Custom Software",
        description: "Intelligent systems tailored to solve complex business challenges securely.",
        features: ["Machine Learning Models", "Predictive Analytics", "Process Automation"],
        colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
        icon: Code,
        title: "Web Development",
        description: "High-performance, scalable web applications built on modern stacks.",
        features: ["React & Next.js", "Serverless Architecture", "Responsive UI/UX"],
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile experiences that engage users.",
        features: ["iOS & Android", "React Native / Flutter", "Intuitive Interfaces"],
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Robust cloud infrastructure for maximum uptime and scalability.",
        features: ["AWS / Azure / GCP", "Microservices", "CI/CD Pipelines"],
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        icon: Scale,
        title: "Technology Solutions for Settlement Administrators",
        description: "Specialized, secure software for legal and settlement processing.",
        features: ["Secure Data Handling", "Compliance Workflows", "Automated Reporting"],
        colSpan: "md:col-span-1 lg:col-span-1",
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 relative bg-black/20">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our <span className="text-gradient">Services</span></h2>
                    <p className="text-lg text-text-main/70">
                        We deliver comprehensive technology solutions crafted to elevate your business operations and drive meaningful impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <GlassCard
                                key={index}
                                className={`flex flex-col h-full bg-[#121826]/40 hover:bg-[#121826]/80 ${service.colSpan}`}
                                withHover
                            >
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                                    <Icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-sm text-text-main/70 mb-6 flex-grow">{service.description}</p>

                                <ul className="space-y-2 mt-auto border-t border-white/5 pt-4">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
