import { Target, Shield, TrendingDown } from "lucide-react";

const objectives = [
  {
    icon: Target,
    text: "Des décisions mieux informées",
  },
  {
    icon: Shield,
    text: "Une exécution sécurisée",
  },
  {
    icon: TrendingDown,
    text: "Moins d'aléas en phase travaux",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre solution
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Main description */}
          <div className="bg-card rounded-xl p-8 md:p-10 shadow-lg border-l-4 border-accent mb-10">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <strong className="text-accent">BIM ENGINEERING EI</strong> accompagne
              les acteurs du BTP dans la maîtrise de leurs projets BIM, de la
              modélisation à la planification 4D, en intégrant les contraintes
              techniques et opérationnelles dès les phases amont.
            </p>
          </div>

          {/* Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="solution-card flex items-center gap-4 bg-card p-5 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <objective.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-semibold text-foreground">{objective.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
