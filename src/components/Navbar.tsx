import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight drop-shadow">
          <Wallet className="h-6 w-6 text-white/90" />
          NeuralVault
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#cta" className="hover:text-white transition-colors">Get Started</a>
        </div>
        <Button size="sm" className="rounded-full px-6 bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25">
          Launch App
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
