import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">
                BIM ENGINEERING
              </span>
              <span className="text-xs text-primary-foreground/70 tracking-wider">
                EI
              </span>
            </div>
          </Link>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} BIM ENGINEERING EI. Tous droits
              réservés.
            </p>
            <p className="text-xs text-primary-foreground/50 mt-1">
              Ingénierie BIM – Modélisation 3D – Coordination – BIM 4D
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
