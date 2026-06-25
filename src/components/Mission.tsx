const Mission = () => {
  return (
    /* Diminuído o padding superior (pt-12) para puxar todo o conteúdo para cima */
    <section id="missao" className="pt-12 pb-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* Substituído bg-gradient-primary por bg-emerald-600 para dar cor real ao fundo */}
          <div className="bg-emerald-600 dark:bg-emerald-700 p-8 md:p-12 rounded-3xl shadow-lg text-center space-y-4 text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
              Nossa Missão
            </h2>
            <p className="text-base md:text-lg text-emerald-50/90 leading-relaxed max-w-2xl mx-auto">
              Promover educação de qualidade com foco em neuropsicopedagogia e educação especial, 
              desenvolvendo potencialidades e construindo um futuro mais inclusivo para todos.
            </p>
          </div>
          
          {/* Diminuído mt-16 para mt-8 para aproximar Visão e Valores da Missão */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-emerald-600 dark:text-emerald-500">Visão</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Ser referência nacional em educação especial e neuropsicopedagogia, 
                reconhecidos pela excelência e compromisso com a transformação social.
              </p>
            </div>
            
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-emerald-600 dark:text-emerald-500">Valores</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Inclusão, respeito à diversidade, excelência acadêmica, 
                ética profissional e compromisso com o desenvolvimento humano.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;