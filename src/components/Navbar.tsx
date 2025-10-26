import { Button } from "@/components/ui/button";
import { MessageCircle, GraduationCap } from "lucide-react";
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
            <a href="#cursos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Cursos
            </a>
            <a href="#missao" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Nossa Missão
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://wa.me/559899047904', '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              Fale Conosco
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => window.open('https://portal-aluno-inapem.com.br', '_blank')}
            >
              <GraduationCap className="h-4 w-4" />
              Portal do Aluno
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
