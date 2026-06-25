import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp, useAuth } from '@clerk/clerk-react';
import { Eye, EyeOff, Lock, Mail, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function Cadastro() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'form' | 'verification'>('form');

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError('');

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setStep('verification');
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Ocorreu um erro ao criar a conta.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    setError('');

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        
        const supabaseToken = await getToken({ template: 'supabase' });
        
        if (supabaseToken) {
          await supabase.auth.setSession({
            access_token: supabaseToken,
            refresh_token: '',
          });

          const { error: dbError } = await supabase
            .from('perfis_alunos')
            .insert([
              { 
                id: completeSignUp.createdUserId, 
                email: email, 
                telefone: phone 
              }
            ]);

          if (dbError) throw dbError;
        }

        navigate('/dashboard');
      } else {
        setError('Não foi possível concluir a validação do cadastro.');
      }
    } catch (err: any) {
      setError(err.message || err.errors?.[0]?.message || 'Código inválido ou erro ao salvar dados.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!isLoaded) return;
    try {
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      alert('Um novo código foi enviado para o seu e-mail!');
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Erro ao reenviar o código.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="absolute top-4 left-4">
        <button 
          disabled={loading}
          onClick={() => step === 'verification' ? setStep('form') : navigate('/login')}
          className="flex items-center gap-2 text-sm text-[#4a5240] hover:text-[#889966] transition-colors font-medium disabled:opacity-50"
        >
          <ArrowLeft size={16} />
          {step === 'verification' ? 'Voltar ao cadastro' : 'Voltar ao login'}
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        <h2 className="text-2xl font-bold tracking-tight text-[#2d3127]">
          {step === 'form' ? 'Crie sua conta' : 'Verifique seu e-mail'}
        </h2>
        <p className="mt-2 text-sm text-[#5d6652]">
          {step === 'form' 
            ? 'Preencha os campos abaixo para iniciar seus estudos.' 
            : `Enviamos um código de confirmação para o e-mail: ${email}`}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-4 shadow-sm border border-[#e2e6dc] rounded-xl sm:px-10">
          
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg font-medium">
              {error}
            </div>
          )}

          {step === 'form' && (
            <form className="space-y-6" onSubmit={handleRegisterSubmit}>
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
                <label htmlFor="phone" className="block text-sm font-medium text-[#4a5240]">
                  Número de Telefone
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#889966]">
                    <Phone size={18} />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    required
                    disabled={loading}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-[#c1c9b7] rounded-lg text-[#2d3127] placeholder-[#a2ab97] focus:outline-none focus:ring-2 focus:ring-[#889966] focus:border-[#889966] transition-all text-sm bg-[#fafbfa]"
                    placeholder="+5511999999999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4a5240]">
                  Criar Senha
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#889966]">
                    <Lock size={18} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    disabled={loading}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#c1c9b7] rounded-lg text-[#2d3127] placeholder-[#a2ab97] focus:outline-none focus:ring-2 focus:ring-[#889966] focus:border-[#889966] transition-all text-sm bg-[#fafbfa]"
                    placeholder="Mínimo 8 caracteres"
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
                  {loading ? 'Processando...' : 'Próxima etapa'}
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-[#5d6652]">
                Já tem uma conta?{' '}
                <button 
                  type="button" 
                  disabled={loading}
                  onClick={() => navigate('/login')} 
                  className="font-semibold text-[#889966] hover:text-[#6e7d50] transition-colors disabled:opacity-50"
                >
                  Faça login
                </button>
              </div>
            </form>
          )}

          {step === 'verification' && (
            <form className="space-y-6" onSubmit={handleVerificationSubmit}>
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-[#4a5240] text-center mb-2">
                  Digite o código de 6 dígitos
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#889966]">
                    <CheckCircle2 size={18} />
                  </div>
                  <input
                    id="code"
                    type="text"
                    maxLength={6}
                    required
                    disabled={loading}
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                    className="block w-full pl-10 pr-3 py-3 border border-[#c1c9b7] rounded-lg text-[#2d3127] tracking-[0.5em] text-center placeholder-[#a2ab97] focus:outline-none focus:ring-2 focus:ring-[#889966] focus:border-[#889966] transition-all text-lg font-bold bg-[#fafbfa]"
                    placeholder="000000"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-[#889966] hover:bg-[#6e7d50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#889966] transition-all disabled:opacity-50"
                >
                  {loading ? 'Verificando...' : 'Confirmar e Concluir'}
                </button>
              </div>

              <div className="text-center text-xs text-[#5d6652]">
                Não recebeu o código?{' '}
                <button 
                  type="button" 
                  disabled={loading}
                  onClick={handleResendCode}
                  className="font-semibold text-[#889966] hover:text-[#6e7d50] underline bg-transparent border-none disabled:opacity-50"
                >
                  Clique aqui para reenviar
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 border-t border-[#e2e6dc] pt-4 text-center">
            <p className="text-xs text-[#a2ab97]">
              Suporte técnico: institutoinapen@institutoinapen.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}