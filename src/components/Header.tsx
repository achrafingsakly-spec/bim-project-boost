import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

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
          ? "bg-card/70 backdrop-blur-2xl shadow-lg border-b border-border/30 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Modern */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="BIM Engineering" 
            className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="default" className="group" asChild>
            <a href="#contact">
              <Sparkles className="w-4 h-4" />
              Échanger sur votre projet
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-secondary hover:bg-secondary/80' : 'bg-primary-foreground/10 hover:bg-primary-foreground/20'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-2xl shadow-2xl border-t border-border/30 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-3 px-4 hover:bg-secondary rounded-xl transition-all duration-300 hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="lg" className="mt-4" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Sparkles className="w-4 h-4" />
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
