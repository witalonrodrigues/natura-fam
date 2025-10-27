import productImage from "@/assets/product-ekos.jpg";

const ProductSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all" />
              <img
                src={productImage}
                alt="Essência Regenerativa Natura Ekos"
                className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Produto Destaque
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              ESSÊNCIA REGENERATIVA
              <span className="block text-primary mt-2">NATURA EKOS</span>
            </h2>

            <div className="w-20 h-1 bg-primary rounded-full" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">
                OLFATO REGENERATIVO: SINTA O PRIMEIRO PASSO DO NOVO CICLO.
              </span>
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              A fragrância Essência Regenerativa transcende o perfume. É um convite para regenerar a 
              sua conexão com a floresta.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Desenvolvida a partir de essência pura da Castanha-do-Amazonas — cultivada e 
              extraída de forma sustentável — cada gota carrega a energia ancestral da floresta viva. 
              Com notas potente e revigorante que remetem ao frescor e a força da natureza.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Ao tocar de topo, radiant e achegue, evoquem um corpo agente e arbalizando da 
              Castanha, ancorado em madeiras cremosas e sustentáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
