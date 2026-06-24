import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn, useAuth } from '@clerk/clerk-react'; // Adicionado useAuth
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabaseClient'; // Adicionado o cliente do Supabase

export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const { getToken } = useAuth(); // Instanciado o hook de autenticação
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError('');

    try {
      const result = await signIn.create({
        identifier: email,
        password: password,
      });

      if (result.status === 'complete') {
        // 1. Ativa a sessão do Clerk
        await setActive({ session: result.createdSessionId });
        
        // 2. Busca e repassa o token para o Supabase (CORREÇÃO CRUCIAL)
        const supabaseToken = await getToken({ template: 'supabase' });
        if (supabaseToken) {
          await supabase.auth.setSession({
            access_token: supabaseToken,
            refresh_token: '',
          });
        }

        // 3. Redireciona com segurança
        navigate('/dashboard'); 
      } else {
        console.error(result);
        setError('Verifique suas credenciais ou confirme seu e-mail.');
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'E-mail ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="absolute top-4 left-4">
        <button 
          onClick={() => navigate('/')}
          disabled={loading}
          className="flex items-center gap-2 text-sm text-[#4a5240] hover:text-[#889966] transition-colors font-medium disabled:opacity-50"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
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
          
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg font-medium">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  type="email"
                  autoComplete="email"
                  required
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#c1c9b7] rounded-lg text-[#2d3127] placeholder-[#a2ab97] focus:outline-none focus:ring-2 focus:ring-[#889966] focus:border-[#889966] transition-all text-sm bg-[#fafbfa]"
                  placeholder="exemplo@inapem.com.br"
                />
              </div>
            </div>

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
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  disabled={loading}
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

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#889966] hover:bg-[#6e7d50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#889966] transition-all disabled:opacity-50"
              >
                {loading ? 'Entrando...' : 'Entrar no Portal'}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-2 text-center">
            <p className="text-sm text-[#5d6652]">
              Não tem uma conta?{' '}
              <button
                onClick={() => navigate('/cadastro')}
                disabled={loading}
                className="font-semibold text-[#889966] hover:text-[#6e7d50] transition-colors inline-flex items-center gap-1 focus:outline-none focus:underline disabled:opacity-50"
              >
                Cadastre-se
              </button>
            </p>
          </div>

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