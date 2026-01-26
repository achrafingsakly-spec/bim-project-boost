import { Eye, FileCheck, Wrench, Zap } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Vision terrain + expertise BIM",
    description: "Une double compétence pour des livrables ancrés dans la réalité chantier.",
  },
  {
    icon: FileCheck,
    title: "Livrables clairs, structurés, exploitables",
    description: "Des documents et maquettes directement utilisables par vos équipes.",
  },
  {
    icon: Wrench,
    title: "Approche orientée constructibilité",
    description: "Chaque décision BIM est pensée pour faciliter la phase travaux.",
  },
  {
    icon: Zap,
    title: "Intervention ciblée, sans lourdeur",
    description: "Une approche pragmatique, adaptée à vos besoins réels.",
  },
];

const ValuePropositionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi choisir BIM ENGINEERING EI ?
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="flex gap-5 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <value.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
