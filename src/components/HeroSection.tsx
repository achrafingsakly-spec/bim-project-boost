import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Modern Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-navy-light/80" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge - Modern glassmorphism */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-glow" />
            <span className="text-sm font-medium text-primary-foreground/90 tracking-wide">
              Ingénierie BIM – Expert indépendant
            </span>
          </div>

          {/* H1 - Modern typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-200 leading-[1.1]">
            Sécurisez vos projets BIM
            <span className="text-gradient block mt-3">avant la phase travaux</span>
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

          {/* Trust indicators - Modern glass cards */}
          <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in animation-delay-600">
            <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/90">
                Réduction des risques
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/90">
                Gain de temps
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/90">
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
