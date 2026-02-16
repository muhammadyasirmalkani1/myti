import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-border bg-card p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join thousands of users who trust NeuralVault to manage their Web3 assets intelligently.
          </p>
          <Button size="lg" className="rounded-full px-8 gap-2">
            Launch App <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
