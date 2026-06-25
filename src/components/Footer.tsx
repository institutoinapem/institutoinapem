import { Mail, Phone, Instagram, Youtube } from "lucide-react";

const LinksPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between py-12 px-4">
      {/* Container Centralizado dos Ícones */}
      <div className="w-full max-w-md mx-auto flex-grow flex flex-col justify-center items-center">
        
        {/* Linha Horizontal de Botões Clicáveis */}
        <div className="flex flex-row flex-wrap justify-center gap-4">
          
          {/* Botão Instagram */}
          <a
            href="https://instagram.com/institutoinapem"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <Instagram className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </a>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5598988136947"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </a>

          {/* Botão E-mail */}
          <a
            href="mailto:institutoinapen99@gmail.com"
            title="E-mail"
            className="p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </a>

          {/* Botão YouTube */}
          <a
            href="https://www.youtube.com/@institutoinapemoficial"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <Youtube className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </a>

        </div>
      </div>

      {/* Rodapé Simplificado */}
      <div className="w-full text-center mt-12 pt-6 border-t border-border/40">
        <p className="text-xs text-muted-foreground">
          © 2026 INAPEM. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default LinksPage;