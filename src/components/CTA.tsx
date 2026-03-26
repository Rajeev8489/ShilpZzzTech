"use client";

import { Button } from "./ui/Button";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(108,99,255,0.2)]"
                >
                    {/* Vibrant Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF] via-[#4A43D1] to-[#00D9FF] opacity-90" />

                    {/* Glass noise overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                    {/* Glowing orbs inside the block */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-3xl rounded-full" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00D9FF]/40 blur-3xl rounded-full" />

                    <div className="relative z-10 px-8 py-16 md:py-24 text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mb-10">
                            Let&apos;s discuss how we can bring your vision to life. Elevate your digital presence and unlock new possibilities with ShilpzzZ Technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl gap-2 font-semibold"
                                onClick={() => window.location.href = "mailto:support@shilpzzztech.in"}
                            >
                                <Mail className="w-4 h-4" />
                                Email Us
                            </Button>
                            <Button size="lg" className="w-full sm:w-auto bg-black/20 text-white border border-white/30 hover:bg-black/40 backdrop-blur-sm gap-2">
                                Start Project
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>

                        <p className="mt-8 text-sm text-white/60 font-medium">
                            support@shilpzzztech.in
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
