"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is AI-driven software development?",
        a: "It's the integration of artificial intelligence tools and models directly into the software development lifecycle to increase efficiency, automate repetitive tasks, and create smarter applications."
    },
    {
        q: "Do you build custom AI solutions?",
        a: "Yes, we design, train, and deploy bespoke AI models tailored precisely to your specific business requirements and datasets."
    },
    {
        q: "Which AI technologies do you use?",
        a: "We utilize cutting-edge frameworks including OpenAI, TensorFlow, PyTorch, LangChain, and Hugging Face to deliver robust machine learning and generative AI capabilities."
    },
    {
        q: "Can you integrate AI into existing systems?",
        a: "Absolutely. We specialize in retrofitting legacy architectures with modern AI capabilities via APIs and microservices without disrupting your current operations."
    },
    {
        q: "How do you handle security and compliance?",
        a: "Security is built-in from day one. We ensure HIPAA, SOC2, and GDPR compliance, utilizing end-to-end encryption, regular auditing, and role-based access controls."
    },
    {
        q: "Do you provide MLOps support?",
        a: "Yes, our MLOps services ensure seamless deployment, continuous monitoring, and automated retraining of models in production environments."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-white/[0.01]">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-gradient">AI & Tech FAQs</h2>
                    <p className="text-lg text-text-main/70">
                        Everything you need to know about our approach to intelligent software development.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <motion.div
                                initial={false}
                                key={idx}
                                className={`bg-[#121826]/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-primary/50' : 'border-white/5 hover:border-white/20'}`}
                            >
                                <button
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <span className={`text-base font-semibold ${isOpen ? 'text-primary' : 'text-white'}`}>
                                        {faq.q}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`ml-4 shrink-0 p-1 rounded-full ${isOpen ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/50'}`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-text-main/70 leading-relaxed border-t border-white/5 mt-2">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
