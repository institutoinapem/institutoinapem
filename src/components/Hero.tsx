import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Educação Especial e</span>
            <br />
            <span className="text-primary">Neuropsicopedagogia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Instituto Nacional de Educação Especial & Neuropsicopedagogia - 
            Transformando vidas através do conhecimento e inclusão
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-xl transition-all text-lg px-8 py-6 group"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Entre em Contato
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça o Instituto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
