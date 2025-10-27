import { Leaf, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import naturaLogo from '../assets/logo-natura-branca.png';

const Footer = () => {
  const footerLinks = {
    produtos: ["Essência Regenerativa", "Linha Ekos", "Sustentabilidade", "Novidades"],
    empresa: ["Sobre Nós", "Carreiras", "Imprensa", "Parceiros"],
    ajuda: ["Central de Ajuda", "Devolução", "Rastreamento", "Contato"],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-">
            </div>
            <p className="text-sm opacity-80 max-w-sm leading-relaxed">
              Conectando você com a natureza através de produtos sustentáveis que regeneram a 
              floresta e transformam vidas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ajuda</h3>
            <ul className="space-y-3">
              {footerLinks.ajuda.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © 2025 Natura. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="opacity-70 hover:opacity-100 transition-opacity">
                Privacidade
              </Link>
              <Link to="#" className="opacity-70 hover:opacity-100 transition-opacity">
                Termos
              </Link>
              <Link to="#" className="opacity-70 hover:opacity-100 transition-opacity">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
