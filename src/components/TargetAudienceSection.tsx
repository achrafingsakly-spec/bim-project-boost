import { Building2, HardHat, Users, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: Building2,
    title: "Maîtrise d'ouvrage",
    description: "Pilotez vos projets avec des données fiables et une vision claire de l'avancement.",
  },
  {
    icon: HardHat,
    title: "Maîtrise d'œuvre",
    description: "Coordonnez efficacement les études et anticipez les problèmes de conception.",
  },
  {
    icon: Users,
    title: "Entreprises travaux",
    description: "Optimisez vos phases d'exécution grâce à des maquettes exploitables sur chantier.",
  },
  {
    icon: Layers,
    title: "BIM managers / coordinateurs",
    description: "Renforcez votre équipe avec une expertise terrain et des livrables structurés.",
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            À qui s'adresse cette offre ?
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <Card
              key={audience.title}
              className="card-hover bg-card border-0 shadow-md overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <audience.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key message */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground border-l-4 border-accent pl-6 py-3 bg-card rounded-r-lg shadow-sm text-left">
            Si votre projet implique <strong>plusieurs acteurs</strong>, des{" "}
            <strong>interfaces sensibles</strong> ou des{" "}
            <strong>contraintes fortes</strong>, une approche BIM fiable est
            indispensable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
