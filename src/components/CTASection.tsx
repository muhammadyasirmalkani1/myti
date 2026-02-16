import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Join thousands of users who trust NeuralVault to manage their Web3 assets intelligently.
          </p>
          <Button size="lg" className="rounded-full px-8 gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
            Launch App <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
