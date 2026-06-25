import logo from "@/assets/logo-inapem.png";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const LinksPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between py-12 px-4">
      {/* Container Centralizado */}
      <div className="w-full max-w-md mx-auto space-y-8 flex-grow flex flex-col justify-center">
        
        {/* Cabeçalho com Logo e Título */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img src={logo} alt="INAPEM" className="h-24 w-auto drop-shadow-sm" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-card-foreground">INAPEM</h1>
            <p className="text-sm text-muted-foreground">
              Instituto Nacional de Educação Especial & Neuropsicopedagogia
            </p>
          </div>
        </div>

        {/* Bloco de Botões Clicáveis */}
        <div className="flex flex-col gap-4">
          {/* Botão Instagram */}
          <a
            href="https://instagram.com/institutoinapem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Instagram className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Siga no Instagram</p>
              <p className="text-xs text-muted-foreground">@institutoinapem</p>
            </div>
          </a>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5598988136947"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Fale Conosco no WhatsApp</p>
              <p className="text-xs text-muted-foreground">(98) 98813-6947</p>
            </div>
          </a>

          {/* Botão E-mail */}
          <a
            href="mailto:institutoinapen@institutoinapen.org"
            className="flex items-center gap-4 w-full p-4 bg-card hover:bg-primary/10 border border-border hover:border-primary rounded-xl shadow-sm transition-all duration-300 group"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Envie um E-mail</p>
              <p className="text-xs text-muted-foreground">institutoinapen@institutoinapen.org</p>
            </div>
          </a>

          {/* Card de Localização (Não clicável, ou opcionalmente link para o Maps) */}
          <div className="flex items-center gap-4 w-full p-4 bg-secondary/20 border border-border/50 rounded-xl">
            <div className="p-2 bg-secondary rounded-lg">
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-muted-foreground">Nossa Localização</p>
              <p className="text-xs text-muted-foreground">São Luís, MA</p>
            </div>
          </div>
        </div>

      </div>

      {/* Rodapé da página */}
      <div className="w-full text-center mt-12 pt-6 border-t border-border/40">
        <p className="text-xs text-muted-foreground max-w-xs mx-auto">
          © {new Date().getFullYear()} INAPEM. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default LinksPage;