import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/97 via-primary/92 to-navy-light/85" />
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </motion.div>

      {/* Floating decorative elements with enhanced animations */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-32 md:py-40">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge - Ultra modern glassmorphism */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary-foreground/8 backdrop-blur-2xl border border-primary-foreground/15 rounded-full mb-8 shadow-lg cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm font-medium text-primary-foreground/90 tracking-wide">
              Ingénierie BIM – Expert indépendant
            </span>
          </motion.div>

          {/* H1 - Modern typography with text reveal animation */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-8 leading-[1.05] tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Sécurisez vos projets BIM
            </motion.span>
            <motion.span 
              className="text-gradient block mt-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              avant la phase travaux
            </motion.span>
          </motion.h1>

          {/* Subtitle - Refined */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-foreground/85 mb-5 font-medium tracking-wide"
          >
            Ingénierie BIM – Modélisation 3D – Coordination – BIM 4D
          </motion.p>

          {/* Accroche */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-primary-foreground/65 mb-10 max-w-2xl leading-relaxed"
          >
            Anticipez les risques, fiabilisez les données et facilitez l'exécution 
            grâce à une approche BIM orientée terrain.
          </motion.p>

          {/* CTAs - Enhanced with hover animations */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="hero" size="xl" className="group shadow-2xl" asChild>
                <a href="#contact">
                  Échanger sur votre projet BIM
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="#services">Découvrir les services</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Sub-text under CTA */}
          <motion.p 
            variants={itemVariants}
            className="text-sm text-primary-foreground/50 mb-16"
          >
            Réponse rapide, échange sans engagement
          </motion.p>

          {/* Trust indicators - Modern glass cards with stagger */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 md:gap-5"
          >
            {[
              { icon: Shield, text: "Réduction des risques" },
              { icon: Clock, text: "Gain de temps" },
              { icon: CheckCircle, text: "Fiabilité des données" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="flex items-center gap-3 px-5 py-3.5 bg-primary-foreground/6 backdrop-blur-xl rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300 cursor-default group"
              >
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-sm font-medium text-primary-foreground/90">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Modern */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-7 h-12 border-2 border-primary-foreground/25 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
