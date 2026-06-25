const Mission = () => {
  return (
    /* pt-6 no mobile (para colar mais no topo) e pt-12 no desktop (md:) */
    <section id="missao" className="pt-6 md:pt-12 pb-16 md:pb-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* Card Principal da Missão */}
          <div className="bg-[#689A4C] p-6 md:p-12 rounded-3xl shadow-lg text-center space-y-4 text-white">
            <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
              Nossa Missão
            </h2>
            <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Promover educação de qualidade com foco em neuropsicopedagogia e educação especial, 
              desenvolvendo potencialidades e construindo um futuro mais inclusivo para todos.
            </p>
          </div>
          
          {/* Visão e Valores: No celular fica um sob o outro, no desktop (md:) divide em 2 colunas */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#689A4C]">Visão</h3>
              <p className="text-muted-foreground text-xs md:text-base leading-relaxed">
                Ser referência nacional em educação especial e neuropsicopedagogia, 
                reconhecidos pela excelência e compromisso com a transformação social.
              </p>
            </div>
            
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#689A4C]">Valores</h3>
              <p className="text-muted-foreground text-xs md:text-base leading-relaxed">
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