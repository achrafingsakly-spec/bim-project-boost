import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-hover rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <span className="text-accent-foreground font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight tracking-tight">
                BIM ENGINEERING
              </span>
              <span className="text-xs text-primary-foreground/50 tracking-widest uppercase">
                Entreprise Individuelle
              </span>
            </div>
          </Link>

          {/* Center tagline */}
          <div className="flex items-center gap-2 text-primary-foreground/60">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              Ingénierie BIM – Modélisation 3D – Coordination – BIM 4D
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} BIM ENGINEERING EI
            </p>
            <p className="text-xs text-primary-foreground/40 mt-1">
              Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
