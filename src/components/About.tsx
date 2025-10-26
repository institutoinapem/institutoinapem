import { Brain, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neuropsicopedagogia",
    description: "Especialização em processos de aprendizagem e desenvolvimento cognitivo"
  },
  {
    icon: BookOpen,
    title: "Educação Especial",
    description: "Formação inclusiva e adaptada às necessidades individuais"
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Acompanhamento individualizado para cada estudante"
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Sobre o INAPEM
          </h2>
          <p className="text-lg text-muted-foreground">
            Dedicados à excelência em educação especial e desenvolvimento neuropsicopedagógico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
