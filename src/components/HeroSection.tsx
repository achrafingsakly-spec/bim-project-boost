import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Ingénierie BIM – Expert indépendant
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in animation-delay-200">
            Sécurisez vos projets BIM
            <span className="text-gradient block mt-2">avant la phase travaux</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-fade-in animation-delay-400">
            Ingénierie BIM – Modélisation 3D – Coordination – BIM 4D
          </p>

          {/* Accroche */}
          <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-2xl animate-fade-in animation-delay-600">
            Anticipez les risques, fiabilisez les données et facilitez l'exécution 
            grâce à une approche BIM orientée terrain.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animation-delay-600">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#contact">
                Échanger sur votre projet BIM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="#services">Découvrir les services</a>
            </Button>
          </div>

          {/* Sub-text under CTA */}
          <p className="text-sm text-primary-foreground/60 mb-16 animate-fade-in animation-delay-600">
            Réponse rapide, échange sans engagement
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 md:gap-10 animate-fade-in animation-delay-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-primary-foreground/80">
                Réduction des risques
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-primary-foreground/80">
                Gain de temps
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-primary-foreground/80">
                Fiabilité des données
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
