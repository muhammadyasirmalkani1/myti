import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-medium text-white tracking-wide uppercase">
          AI-Powered Web3 Wallet
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
          The Smartest Wallet
          <br />
          for <span className="text-white/90">Web3</span>
        </h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed drop-shadow">
          Harness AI to navigate DeFi, manage multi-chain assets, and execute smarter transactions — all from one secure wallet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
