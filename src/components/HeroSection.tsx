import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Setup-Background.mp4" type="video/mp4" />
      </video>

      {/* Overlay - subtle to let video shine through */}
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary/60 text-xs font-medium text-muted-foreground tracking-wide uppercase">
          AI-Powered Web3 Wallet
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          The Smartest Wallet
          <br />
          for <span className="text-primary">Web3</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Harness AI to navigate DeFi, manage multi-chain assets, and execute smarter transactions — all from one secure wallet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8 gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
