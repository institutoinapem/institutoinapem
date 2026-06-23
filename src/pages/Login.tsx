import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione a lógica de autenticação aqui
    console.log('Login solicitado:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      {/* Botão de Voltar para a Home */}
      <div className="absolute top-4 left-4">
        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 text-sm text-[#4a5240] hover:text-[#889966] transition-colors font-medium"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        {/* Logotipo da Instituição */}
        <div className="flex justify-center mb-6">
          <img 
            src="/logo-inapem.png" 
            alt="logo inapem" 
            className="h-28 w-auto object-contain mix-blend-multiply"
          />
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight text-[#2d3127]">
          Faça seu Login
        </h2>
        <p className="mt-2 text-sm text-[#5d6652]">
          Insira suas credenciais para acessar sua área de estudos.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-4 shadow-sm border border-[#e2e6dc] rounded-xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Campo de E-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#4a5240]">
                E-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#889966]">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#c1c9b7] rounded-lg text-[#2d3127] placeholder-[#a2ab97] focus:outline-none focus:ring-2 focus:ring-[#889966] focus:border-[#889966] transition-all text-sm bg-[#fafbfa]"
                  placeholder="exemplo@inapem.com.br"
                />
              </div>
            </div>

            {/* Campo de Senha */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-[#4a5240]">
                  Senha
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#889966] hover:text-[#6e7d50] transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#889966]">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 border border-[#c1c9b7] rounded-lg text-[#2d3127] placeholder-[#a2ab97] focus:outline-none focus:ring-2 focus:ring-[#889966] focus:border-[#889966] transition-all text-sm bg-[#fafbfa]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#889966] hover:text-[#4a5240] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Botão de Enviar */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#889966] hover:bg-[#6e7d50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#889966] transition-all"
              >
                Entrar no Portal
              </button>
            </div>
          </form>

          {/* Rodapé interno opcional */}
          <div className="mt-6 border-t border-[#e2e6dc] pt-4 text-center">
            <p className="text-xs text-[#a2ab97]">
              Suporte técnico: suporte@inapem.com.br
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}