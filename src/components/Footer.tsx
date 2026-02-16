import { Wallet } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />
      <div className="relative z-10 container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Wallet className="h-4 w-4 text-white/80" />
          NeuralVault
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
        <span>© 2026 NeuralVault</span>
      </div>
    </footer>
  );
};

export default Footer;
