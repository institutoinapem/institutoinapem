import logo from "../assets/logo-inapem.png";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="w-full bg-emerald-600 dark:bg-emerald-700 text-white py-6 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Esquerda: Contato */}
        <div className="flex items-center gap-2 min-w-[200px] justify-center md:justify-start">
          <Phone className="h-5 w-5 text-emerald-100" />
          <span className="text-sm font-medium tracking-wide">
            Contato:{" "}
            <a 
              href="https://wa.me/5598988136947" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-emerald-200 transition-colors"
            >
              (98) 98813-6947
            </a>
          </span>
        </div>

        {/* Centro: Ícones de Redes Sociais e E-mail */}
        <div className="flex items-center justify-center gap-4 flex-grow">
          {/* Instagram */}
          <a
            href="https://instagram.com/institutoinapem"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 group"
          >
            <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>

          {/* E-mail */}
          <a
            href="mailto:institutoinapen99@gmail.com"
            title="E-mail"
            className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@institutoinapemoficial"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 group"
          >
            <Youtube className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Direita: Logo do Instituto */}
        <div className="flex items-center justify-center md:justify-end min-w-[200px]">
          <img 
            src={logo} 
            alt="INAPEM" 
            className="h-10 w-auto object-contain" 
          />
        </div>

      </div>
    </div>
  );
};

export default ContactBar;