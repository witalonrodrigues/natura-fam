import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import naturaLogo from '../assets/logo-natura-branca.png';
import naturaLogoLaranja from '../assets/logo-natura-laranja.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolidNav = isScrolled || location.pathname !== "/";

  const logoAtual = isSolidNav ? naturaLogoLaranja : naturaLogo;
  const classeLogoBranca = 'w-48 h-48 transition-transform group-hover:scale-110';
  const classeLogoLaranja = 'w-24 h-24 transition-transform group-hover:scale-110';

  // Se a nav for sólida, usa a classe laranja, senão, usa a classe branca.
  const classeAtual = isSolidNav ? classeLogoLaranja : classeLogoBranca;


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Essência Regenerativa", path: "/essencia" },
    { name: "Saiba Mais", path: "/sobre" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">

          <img
            src={logoAtual}
            alt="Logo da Natura"
            className={classeAtual}
          />
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  location.pathname === link.path
                    ? "text-primary"
                    : isSolidNav
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "hidden md:flex",
              isSolidNav ? "text-foreground" : "text-white hover:text-primary"
            )}
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors py-2",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                <Search className="w-4 h-4 mr-2" />
                Procurar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
