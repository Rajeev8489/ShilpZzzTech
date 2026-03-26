import Link from "next/link";
import { Mail, MapPin, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export function Footer() {
    return (
        <footer className="bg-background dark:bg-surface/30 border-t border-border dark:border-white/10 pt-8 pb-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-primary/20 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-12 lg:gap-8 mb-6">

                    {/* Brand & Newsletter Column */}
                    <div className="lg:col-span-2 flex flex-col md:items-start text-left">
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="text-xl md:text-2xl font-bold tracking-tighter text-text-main">
                                SHILP<span className="text-primary">ZZZ</span>
                                <span className="block text-[10px] md:text-xs text-secondary uppercase tracking-widest -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">Technologies</span>
                            </span>
                        </Link>
                        <p className="text-text-main/70 text-sm leading-relaxed mb-8 max-w-sm">
                            Empowering Business with AI Innovation. We build AI-powered cutting-edge software solutions that drive growth.
                        </p>

                        <h4 className="text-text-main font-semibold mb-4 text-sm">Subscribe to insights</h4>
                        <form className="w-full max-w-sm flex relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-surface dark:bg-background/50 border border-border dark:border-white/10 rounded-full pl-4 pr-12 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
                            />
                            <Button
                                type="button"
                                className="absolute right-1 top-1 bottom-1 w-8 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white transition-all p-0 h-auto"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'News', 'Partners'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-text-main/70 text-sm hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['AI Software', 'Web Development', 'Mobile Apps', 'Cloud Solutions'].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-text-main/70 text-sm hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-6">Technologies</h4>
                        <ul className="space-y-3">
                            {['React & Next.js', 'Node.js & Python', 'AWS & Azure', 'Machine Learning'].map((item) => (
                                <li key={item}>
                                    <Link href="#tech" className="text-text-main/70 text-sm hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-6">Resources</h4>
                        <ul className="space-y-3">
                            {['Blog', 'Case Studies', 'Documentation', 'Help Center'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-text-main/70 text-sm hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-text-main font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-text-main/70 text-sm hover:text-primary transition-colors cursor-pointer">support@shilpzzztech.in</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-text-main/70 text-sm max-w-50">Mon - Fri: 9am - 6pm IST</span>
                            </li>
                        </ul>
                    </div>



                </div>

                {/* Bottom Bar */}
                <div className="pt-2 border-t border-border dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-text-main/50 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} ShilpzzZ Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-2 items-center">
                        {[Twitter, Linkedin, Github].map((Icon, i) => (
                            <a key={i} href="#" aria-label="Social Link" className="w-10 h-8 rounded-full border border-border dark:border-white/10 flex items-center justify-center text-text-main/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all shadow-sm">
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
