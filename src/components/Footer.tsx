import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0A0E17] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 text-center md:text-left">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                                SHILP<span className="text-secondary">ZZZ</span>
                                <span className="block text-[10px] md:text-xs text-primary uppercase tracking-widest -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">Technologies</span>
                            </span>
                        </Link>
                        <p className="text-text-main/70 text-sm leading-relaxed mb-6">
                            Empowering Business with AI Innovation. We build AI-powered cutting-edge software solutions that drive growth.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Technologies', 'AI FAQs'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-text-main/70 text-sm hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Custom Software'].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-text-main/70 text-sm hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center md:justify-start">
                                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-text-main/70 text-sm text-center md:text-left">support@shilpzzztech.in</span>
                            </li>
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center md:justify-start">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-text-main/70 text-sm text-center md:text-left">Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4">
                    <p className="text-text-main/50 text-sm text-center">
                        © {new Date().getFullYear()} ShilpzzZ Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-4 justify-center">
                        {/* Social templates can go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
