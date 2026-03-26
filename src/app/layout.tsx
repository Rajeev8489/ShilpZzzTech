import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { HeroScene } from "@/components/HeroScene";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShilpzzZ Technologies | Empowering Business with AI Innovation",
  description: "We build AI-powered cutting-edge software solutions that drive innovation and accelerate business growth.",
  keywords: ["AI Software", "Custom Software Development", "SaaS", "Web Development", "Cloud Solutions", "Mobile App Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased relative min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={['light', 'dark', 'neon', 'glass']}
        >
          <ScrollProgress />
          <AnimatedBackground />
          <HeroScene />

          <div className="grow flex flex-col pt-0 relative z-10 max-w-300 w-full mx-auto">
            {children}
          </div>

          <AIChatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
