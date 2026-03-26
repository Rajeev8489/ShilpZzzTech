"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/Button";

type Message = { id: number; text: string; sender: "ai" | "user" };

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi 👋 I'm the SHILPZZZ AI assistant. How can I help with your project?", sender: "ai" }
    ]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newUserMsg: Message = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, newUserMsg]);
        setInput("");

        // Simulate AI Response
        setTimeout(() => {
            const aiResponses = [
                "That sounds like an interesting requirement! Our custom software team can definitely help scope that out.",
                "We specialize in that. Would you like me to schedule a consultation?",
                "Our Node.js and Next.js stacks are perfect for handling those kinds of architectures.",
                "I can pass this information to our lead architects. Could I get your email?",
            ];
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

            setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: "ai" }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-16 right-0 w-87.5 h-112.5 glassmorphism bg-background/95 rounded-2xl shadow-2xl border border-primary/20 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-linear-to-r from-primary to-secondary p-4 flex items-center justify-between shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">SHILPZZZ AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-white/80 text-xs">Online</span>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Chat History */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scroll-smooth">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.sender === 'ai' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                                        {msg.sender === 'ai' ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${msg.sender === 'user'
                                            ? 'bg-secondary/10 border border-secondary/20 text-text-main rounded-tr-none'
                                            : 'bg-surface border border-white/5 text-text-main/90 rounded-tl-none shadow-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-white/10 bg-surface/50">
                            <form onSubmit={handleSend} className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-background border border-white/10 rounded-full pl-4 pr-12 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <Button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <>Send</>
                                    <Send className="w-4 h-4 ml-0.5" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-linear-to-r from-primary to-secondary shadow-[0_0_30px_rgba(108,99,255,0.4)] flex items-center justify-center text-white relative z-50 border-2 border-white/10"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-[#0B0F19]"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
