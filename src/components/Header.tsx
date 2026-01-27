import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#profil", label: "Profil" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Modern */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-accent to-orange-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
            <span className="text-accent-foreground font-bold text-lg">B</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight transition-colors duration-300 tracking-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              BIM ENGINEERING
            </span>
            <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
              Entreprise Individuelle
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="default" asChild>
            <a href="#contact">Échanger sur votre projet</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="lg" className="mt-2" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Échanger sur votre projet
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
