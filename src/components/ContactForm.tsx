"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Mail, MessageSquare } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

type FormData = {
    name: string;
    email: string;
    company?: string;
    projectType: string;
    message: string;
};

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            reset();
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-125 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-main">
                            Ready to accelerate<br />
                            <span className="text-gradient">your growth?</span>
                        </h2>
                        <p className="text-lg text-text-main/70 mb-10 max-w-md">
                            Get in touch with our team of expert architects. We'll help you build the future of your product.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text-main">Email Us</h4>
                                    <p className="text-sm text-text-main/60">support@shilpzzztech.in</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto relative"
                    >
                        {/* Glow behind form */}
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-90 translate-y-10" />

                        <GlassCard className="relative p-8 shadow-2xl transition-shadow backdrop-blur-xl rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center text-center h-87.5"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-green-400" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h3>
                                        <p className="text-text-main/70">We'll get back to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="flex flex-col gap-5"
                                    >
                                        <div className="relative mb-2">
                                            <input
                                                {...register("name", { required: "Name is required" })}
                                                id="name"
                                                className="peer w-full rounded-xl px-4 pt-6 pb-2 text-text-main focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-none border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
                                                placeholder="John Doe"
                                            />
                                            <label htmlFor="name" className="absolute left-4 top-4 text-text-main/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-&:not-placeholder-shown:top-2 peer-[&:not-placeholder-shown:text-xs">
                                                Full Name
                                            </label>
                                            {errors.name && <span className="absolute -bottom-5 left-1 text-xs text-red-500">{errors.name.message}</span>}
                                        </div>

                                        <div className="relative mb-2">
                                            <input
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" }
                                                })}
                                                id="email"
                                                className="peer w-full rounded-xl px-4 pt-6 pb-2 text-text-main focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/30 transition-all placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-none border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
                                                placeholder="john@example.com"
                                            />
                                            <label htmlFor="email" className="absolute left-4 top-4 text-text-main/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary peer-[&:not-placeholder-shown:top-2 peer-[&:not-placeholder-shown:text-xs">
                                                Email Address
                                            </label>
                                            {errors.email && <span className="absolute -bottom-5 left-1 text-xs text-red-500">{errors.email.message}</span>}
                                        </div>

                                        <div className="flex gap-4 mb-2">
                                            <div className="relative w-1/2">
                                                <input
                                                    {...register("company")}
                                                    id="company"
                                                    className="peer w-full rounded-xl px-4 pt-6 pb-2 text-text-main focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/30 transition-all placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-none border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
                                                    placeholder="Acme Corp"
                                                />
                                                <label htmlFor="company" className="absolute left-4 top-4 text-text-main/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[&:not-placeholder-shown:top-2 peer-[&:not-placeholder-shown:text-xs">
                                                    Company (Optional)
                                                </label>
                                            </div>

                                            <div className="relative w-1/2">
                                                <select
                                                    {...register("projectType", { required: "Required" })}
                                                    id="projectType"
                                                    className="peer w-full rounded-xl px-4 pt-6 pb-2 text-text-main focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/30 transition-all appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-none border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled hidden></option>
                                                    <option value="AI Solutions">AI Solutions</option>
                                                    <option value="Web App">Web App</option>
                                                    <option value="Mobile App">Mobile App</option>
                                                    <option value="Cloud Migration">Cloud Migration</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {/* Simulate floating label for select by checking validity or placeholder behavior. Since standard select doesn't support placeholder-shown easily, we lean on custom styles or required valid state */}
                                                <label htmlFor="projectType" className="absolute left-4 top-2 text-xs text-secondary transition-all">
                                                    Project Type
                                                </label>
                                                {errors.projectType && <span className="absolute -bottom-5 left-1 text-xs text-red-500">{errors.projectType.message}</span>}
                                            </div>
                                        </div>

                                        <div className="relative mb-2">
                                            <textarea
                                                {...register("message", { required: "Message is required" })}
                                                id="message"
                                                rows={4}
                                                className="peer w-full rounded-xl px-4 pt-6 pb-2 text-text-main focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-none border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)' }}
                                                placeholder="Tell us about your project..."
                                            />
                                            <label htmlFor="message" className="absolute left-4 top-4 text-text-main/50 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
                                                Project Details
                                            </label>
                                            {errors.message && <span className="absolute -bottom-5 left-1 text-xs text-red-500">{errors.message.message}</span>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="mt-2 w-full py-3.5 rounded-xl font-bold text-white bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(108,99,255,0.3)] disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-4 h-4 ml-1" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
