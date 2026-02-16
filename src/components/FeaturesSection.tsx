import { Brain, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Transaction Insights",
    description: "Get real-time AI analysis of every transaction before you sign — catch risks, understand fees, and optimize gas.",
  },
  {
    icon: BarChart3,
    title: "Smart Portfolio Management",
    description: "AI continuously rebalances and tracks your portfolio across chains, surfacing opportunities you'd otherwise miss.",
  },
  {
    icon: Shield,
    title: "Multi-Chain Security",
    description: "One wallet, every chain. Enterprise-grade encryption with AI-powered threat detection keeps your assets safe.",
  },
  {
    icon: Zap,
    title: "Automated DeFi Strategies",
    description: "Deploy intelligent yield strategies that adapt to market conditions — maximize returns while you sleep.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Built for the Future of Finance
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Everything you need to navigate Web3 with confidence, powered by cutting-edge AI.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-6 hover:bg-white/15 transition-all hover:shadow-lg hover:shadow-white/5"
            >
              <div className="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
