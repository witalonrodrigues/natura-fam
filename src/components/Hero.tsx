import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";
import folha from '../assets/pngtree-realistic-green-leaf-showcasing-textures-and-details-png-image_19852760.png'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <div className="animate-fade-up">

          <div className="relative inline-block">

            {/* --- FOLHAS ADICIONADAS (MAIS PRÓXIMAS E VERDES) --- */}
            
            {/* Folha Topo-Esquerda */}
            <img
              src={folha}
              className="absolute -top-2 -left-4 md:-top-4 md:-left-8 
                         w-12 h-12 md:w-16 md:h-16 
                         text-green-500 transform -rotate-45" // Cor verde com text-green-500
              fill="currentColor"
              strokeWidth={1}
            />
            
            {/* Folha Bottom-Esquerda */}
            <img
              src={folha}
              className="absolute -bottom-2 -left-2 md:-bottom-0 md:-left-4 
                         w-10 h-10 md:w-12 md:h-12 
                         text-green-500 transform -rotate-[10deg]" // Cor verde
              fill="currentColor"
              strokeWidth={1}
            />

            {/* Folha Topo-Direita */}
            <img
              src={folha}
              className="absolute -top-2 -right-4 md:-top-4 md:-right-8 
                         w-12 h-12 md:w-16 md:h-16 
                         text-green-500 transform rotate-45 scale-x-[-1]" // Cor verde
              fill="currentColor"
              strokeWidth={1}
            />

            {/* Folha Bottom-Direita */}
            <img
              src={folha}
              className="absolute -bottom-2 -right-2 md:-bottom-0 md:-right-4 
                         w-10 h-10 md:w-12 md:h-12 
                         text-green-500 transform rotate-[160deg] scale-x-[-1]" // Cor verde
              fill="currentColor"
              strokeWidth={1}
            />

            {/* --- SEU TÍTULO ORIGINAL --- */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              REGENERE-SE
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light tracking-wide">
            faça parte da mudança
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
