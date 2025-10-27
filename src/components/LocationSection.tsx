import beruriImage from "@/assets/beruri-aerial.jpg";

const LocationSection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              BERURI - AM
            </h2>

            <div className="w-20 h-1 bg-primary rounded-full" />

            <p className="text-lg leading-relaxed opacity-90">
              <span className="font-semibold">
                Sua Castanha Tem um Endereço. Descubra a Origem Exata do Seu Produto.
              </span>
            </p>

            <p className="text-base leading-relaxed opacity-80">
              Em um município de Beruri, no coração da Amazonas, que a ASSOAB (Associação dos 
              Produtores e Produtoras Agroextrativistas de Beruri) concentra mais de agrega na 
              regeneração da floresta, a ASSOAB empodera mais de 190 famílias de extrativistas.
            </p>

            <p className="text-base leading-relaxed opacity-80">
              Beneficia seus castanhais, exercendo em coleta com carinha, resguarda suas práticas 
              sustentáveis e garantindo que mais de 60% é garantido que a floresta permanece em 
              pé e viva.
            </p>
          </div>

          {/* Image */}
          <div className="animate-fade-in order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all" />
              <img
                src={beruriImage}
                alt="Vista aérea de Beruri na Amazônia"
                className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
