import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { Button } from "@/components/ui/button";
import { Leaf, Droplet, Heart, Sparkles } from "lucide-react";

const Essencia = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Sustentável",
      description: "Extraída de forma consciente da floresta amazônica",
    },
    {
      icon: Droplet,
      title: "Fragrância Pura",
      description: "Essência concentrada de castanha-do-amazonas",
    },
    {
      icon: Heart,
      title: "Impacto Social",
      description: "Apoia 190+ famílias de comunidades locais",
    },
    {
      icon: Sparkles,
      title: "Longa Duração",
      description: "Fixação prolongada com notas amadeiradas",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Linha Ekos
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Essência Regenerativa
            </h1>
            <p className="text-xl text-muted-foreground">
              Uma experiência olfativa que conecta você à força regeneradora da Amazônia
            </p>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <ProductSection />

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Por Que Escolher Natura Ekos?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Essencia;
