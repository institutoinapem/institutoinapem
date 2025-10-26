import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-inapem.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="INAPEM" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#missao" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Nossa Missão
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
