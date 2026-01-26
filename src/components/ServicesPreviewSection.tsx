import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cuboid, ScanLine, FileSearch, Calendar, Eye, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cuboid,
    title: "Modélisation BIM 3D",
    description: "Maquettes fiables, structurées et adaptées aux usages réels du projet.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: ScanLine,
    title: "Scan-to-BIM",
    description: "Modélisation fidèle à partir de nuages de points pour sécuriser la base de travail.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: FileSearch,
    title: "Audit BIM & coordination",
    description: "Détection précoce des clashes et vision claire pour arbitrage.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Calendar,
    title: "BIM 4D – Phasage",
    description: "Lien planning / maquette pour simuler et anticiper les phases travaux.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Eye,
    title: "Visualisation & communication",
    description: "Faire comprendre le projet à tous les acteurs, rapidement.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const ServicesPreviewSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domaines d'intervention
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Une offre complète pour maîtriser vos projets BIM de A à Z
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-hover bg-card border shadow-sm overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl ${service.color.split(' ')[0]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color.split(' ')[1]}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="group" asChild>
            <a href="#contact">
              Découvrir les services en détail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
