import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Busca a chave pública do Clerk que você configurou no .env / Cloudflare
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Uma segurança extra para avisar no console local caso esqueça de colocar a chave
if (!PUBLISHABLE_KEY) {
  throw new Error("Erro: A variável VITE_CLERK_PUBLISHABLE_KEY está ausente.");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider>
);