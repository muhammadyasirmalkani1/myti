import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2 text-foreground font-bold text-xl tracking-tight">
          <Wallet className="h-6 w-6 text-primary" />
          NeuralVault
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#cta" className="hover:text-foreground transition-colors">Get Started</a>
        </div>
        <Button size="sm" className="rounded-full px-6">
          Launch App
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
