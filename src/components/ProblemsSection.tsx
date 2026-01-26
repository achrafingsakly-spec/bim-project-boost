import { AlertTriangle, FileX, GitBranch, Target, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: FileX,
    text: "Données BIM incomplètes ou peu exploitables",
  },
  {
    icon: GitBranch,
    text: "Manque de coordination entre disciplines",
  },
  {
    icon: Target,
    text: "Décalage entre études et réalité chantier",
  },
  {
    icon: AlertTriangle,
    text: "Difficulté à anticiper les phases travaux",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Problèmes fréquents rencontrés
            </h2>
            <div className="section-divider mx-auto mb-4" />
            <p className="text-muted-foreground">
              Ces difficultés vous sont familières ?
            </p>
          </div>

          {/* Problems list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="problem-card py-4 bg-destructive/5 rounded-lg pl-8 pr-6 group hover:bg-destructive/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Transition message */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary rounded-lg text-primary-foreground">
              <span className="font-semibold">
                C'est précisément là qu'intervient BIM ENGINEERING EI
              </span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
