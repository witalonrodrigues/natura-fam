import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";
import ImpactSection from "@/components/ImpactSection";
import { Users, TreePine, Target, Award } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: TreePine,
      title: "Sustentabilidade",
      description:
        "Comprometidos com a preservação da floresta amazônica e práticas sustentáveis",
    },
    {
      icon: Users,
      title: "Impacto Social",
      description:
        "Empoderando comunidades locais e gerando renda para famílias extrativistas",
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Rastreabilidade completa: saiba a origem exata de cada produto",
    },
    {
      icon: Award,
      title: "Qualidade",
      description:
        "Produtos premium desenvolvidos com ingredientes puros da biodiversidade brasileira",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Nossa Missão é{" "}
              <span className="text-primary">Regenerar o Futuro</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Acreditamos que beleza e sustentabilidade andam juntas. Cada produto Natura é 
              uma ponte entre você e a floresta, criando um ciclo de regeneração que beneficia 
              a natureza e as pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center space-y-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <LocationSection />

      {/* Impact */}
      <ImpactSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Faça Parte Desta Mudança
            </h2>
            <p className="text-lg opacity-90">
              Cada compra contribui diretamente para a regeneração da floresta e o bem-estar 
              de comunidades amazônicas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
