import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient with animation */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      {/* Floating decorative element */}
      <motion.div 
        className="absolute top-1/2 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo with hover animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="BIM Engineering" 
                className="h-24 w-auto brightness-0 invert"
              />
            </Link>
          </motion.div>

          {/* Center tagline with sparkle animation */}
          <motion.div 
            className="flex items-center gap-2 text-primary-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm font-medium">
              Ingénierie BIM – Modélisation 3D – Coordination – BIM 4D
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} BIM ENGINEERING EI
            </p>
            <p className="text-xs text-primary-foreground/40 mt-1">
              Tous droits réservés
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
