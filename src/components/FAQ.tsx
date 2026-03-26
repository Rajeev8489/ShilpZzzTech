"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

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
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = useMemo(() => {
        if (!searchQuery) return faqs;
        return faqs.filter(faq =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-main">AI & Tech <span className="text-gradient">FAQs</span></h2>
                    <p className="text-lg text-text-main/70 mb-8">
                        Everything you need to know about our approach to intelligent software development.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-text-main/40" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-text-main focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-8 text-text-main/60">
                            No matching questions found.
                        </div>
                    ) : (
                        filteredFaqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <motion.div
                                    initial={false}
                                    key={idx}
                                    className={`bg-white/80 dark:bg-white/5 backdrop-blur-md border rounded-2xl overflow-hidden transition-colors shadow-sm ${isOpen ? 'border-primary/50 dark:border-primary/50' : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/20'}`}
                                >
                                    <button
                                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    >
                                        <span className={`text-base font-semibold ${isOpen ? 'text-primary' : 'text-text-main'}`}>
                                            {faq.q}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={`ml-4 shrink-0 p-1 rounded-full ${isOpen ? 'bg-primary/20 text-primary' : 'bg-white/5 text-text-main/50'}`}
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
                                                <div className="px-6 pb-6 pt-2 text-text-main/70 leading-relaxed border-t border-black/10 dark:border-white/10 mt-2">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
