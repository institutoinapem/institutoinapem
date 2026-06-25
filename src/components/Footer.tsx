import logo from "../assets/logo-inapem.png";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";

const ContactBar = () => {
  return (
    /* py-8 no mobile e py-12 no desktop para manter a imponência da altura */
    <div className="w-full bg-[#689A4C] text-white py-8 md:py-12 px-6 shadow-md">
      {/* flex-col (celular) vira flex-row (desktop) de forma automática */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        {/* Esquerda: Contato */}
        <div className="flex items-center gap-2 min-w-0 md:min-w-[200px] justify-center md:justify-start order-2 md:order-1">
          <Phone className="h-5 w-5 flex-shrink-0 opacity-90" />
          <span className="text-sm font-medium tracking-wide whitespace-nowrap">
            Contato:{" "}
            <a 
              href="https://wa.me/5598988136947" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
            >
              (98) 98813-6947
            </a>
          </span>
        </div>

        {/* Centro: Redes Sociais */}
        <div className="flex items-center justify-center gap-4 flex-grow order-3 md:order-2">
          <a
            href="https://instagram.com/institutoinapem"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 group"
          >
            <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="mailto:institutoinapen99@gmail.com"
            className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://www.youtube.com/@institutoinapemoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 group"
          >
            <Youtube className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Direita: Logo */}
        <div className="flex items-center justify-center md:justify-end min-w-0 md:min-w-[200px] order-1 md:order-3">
          <img 
            src={logo} 
            alt="INAPEM" 
            className="h-10 w-auto object-contain max-w-[150px]" 
          />
        </div>

      </div>
    </div>
  );
};

export default ContactBar;