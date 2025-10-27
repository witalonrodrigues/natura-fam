import landscapeImage from "@/assets/landscape-illustration.jpg";

const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            ASSOAB <span className="text-primary">- AM</span>
          </h2>

          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-foreground">
              Seja a força da mudança
            </span>
            {" "}
            Seu minuto de atenção e o que feito para impulsionar a 
            autonomia das famílias. Assista o video e ganhe o Crédito de Lucro que garante o futuro 
            da nova agroindústria de castanha.
          </p>

          {/* Illustration */}
          <div className="mt-12 animate-fade-in">
          <iframe
            src="https://www.youtube.com/embed/qlvuJ7zUqu4?si=4cGPcx0pDZN0UPa8"
            title="Vídeo do YouTube" // Atualize com um título descritivo
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video rounded-2xl shadow-xl"
          ></iframe>
        </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">190+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Famílias Beneficiadas
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">60%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Floresta Preservada
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Sustentável
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
