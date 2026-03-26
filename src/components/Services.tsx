"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code, Smartphone, Cloud, Scale, ArrowRight, PlayCircle } from "lucide-react";
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
        <section id="services" className="py-24 relative bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-main">Our <span className="text-gradient">Services</span></h2>
                    <p className="text-lg text-text-main/70">
                        We deliver comprehensive technology solutions crafted to elevate your business operations and drive meaningful impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={service.colSpan}
                            >
                                <GlassCard
                                    className="flex flex-col h-full bg-white dark:bg-surface/40hover:bg-gray-50 dark:hover:bg-surface/70 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xlgroup overflow-hidden relative cursor-pointerborder border-border dark:border-white/5"
                                    withHover
                                >
                                    {/* Animated Gradient border effect on hover */}
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-surface dark:bg-white/5 flex items-center justify-center border border-border dark:border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                                                <Icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors duration-300" />
                                            </div>

                                            {/* Interactive Demo Tag hidden by default, slides in on hover */}
                                            <div className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold bg-white/10 text-text-main px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                                                <PlayCircle className="w-3.5 h-3.5 text-secondary" />
                                                View Demo
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-sm text-text-main/70 mb-8 grow">{service.description}</p>

                                        {/* Technology Badges */}
                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                            {service.features.map((feature, fIdx) => (
                                                <span key={fIdx} className="text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-md bg-surface dark:bg-white/5 text-text-main/80 border border-border dark:border-white/5 group-hover:border-border/80 dark:group-hover:border-white/10 transition-colors">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action link */}
                                        <div className="border-t border-border dark:border-white/5 pt-4 flex items-center text-sm font-semibold text-text-main/60 group-hover:text-secondary transition-colors">
                                            Explore Capabilities
                                            <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
