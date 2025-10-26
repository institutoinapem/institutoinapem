import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen } from "lucide-react";

const courses = [
  {
    title: "Especialização em Neuropsicopedagogia Clínica",
    duration: "18 meses",
    workload: "600 horas",
    value: "R$ 299,90/mês",
    description: "Formação completa para atuar no diagnóstico e intervenção de dificuldades de aprendizagem com abordagem neuropsicopedagógica."
  },
  {
    title: "Pós-Graduação em Educação Especial e Inclusiva",
    duration: "12 meses",
    workload: "420 horas",
    value: "R$ 249,90/mês",
    description: "Capacitação para profissionais que desejam trabalhar com educação inclusiva e atendimento especializado."
  },
  {
    title: "Neuropsicopedagogia Institucional",
    duration: "18 meses",
    workload: "600 horas",
    value: "R$ 299,90/mês",
    description: "Formação voltada para atuação em instituições educacionais, com foco em processos de aprendizagem organizacional."
  },
  {
    title: "Psicopedagogia Clínica e Institucional",
    duration: "18 meses",
    workload: "600 horas",
    value: "R$ 279,90/mês",
    description: "Curso abrangente que prepara para atuação tanto em clínicas quanto em instituições educacionais."
  }
];

const Courses = () => {
  return (
    <section id="cursos" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Cursos de Pós-Graduação
          </h2>
          <p className="text-lg text-muted-foreground">
            Invista no seu futuro com nossos cursos especializados reconhecidos pelo MEC
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{course.value}</p>
                    <p className="text-xs text-muted-foreground">Mensalidade</p>
                  </div>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Duração: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Carga horária: {course.workload}</span>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre o curso de ' + course.title, '_blank')}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Todos os cursos são reconhecidos pelo MEC e oferecem certificação válida em todo território nacional
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os cursos de pós-graduação', '_blank')}
          >
            Entre em Contato para Mais Informações
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;