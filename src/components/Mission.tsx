const Mission = () => {
  return (
    <section id="missao" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary p-12 md:p-16 rounded-3xl shadow-elegant text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Nossa Missão
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Promover educação de qualidade com foco em neuropsicopedagogia e educação especial, 
              desenvolvendo potencialidades e construindo um futuro mais inclusivo para todos.
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em educação especial e neuropsicopedagogia, 
                reconhecidos pela excelência e compromisso com a transformação social.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
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
