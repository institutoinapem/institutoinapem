import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-elegant hover:shadow-xl hover:scale-110 transition-all p-0"
      onClick={() => window.open('https://wa.me/559899047904?text=', '_blank')}
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
};

export default WhatsAppButton;
