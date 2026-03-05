import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Industries } from "@/components/Industries";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      <div className="w-full">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <TechStack />
        <Industries />
        <FAQ />
        <CTA />
      </div>

    </main>
  );
}
