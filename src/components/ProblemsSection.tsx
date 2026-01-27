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
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Problèmes fréquents rencontrés
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="text-muted-foreground text-lg">
              Ces difficultés vous sont familières ?
            </p>
          </div>

          {/* Problems list - Modern cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 p-6 bg-gradient-to-r from-destructive/5 to-destructive/10 rounded-2xl border border-destructive/10 hover:border-destructive/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/15 group-hover:scale-110 transition-all duration-300">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground font-medium text-lg">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Transition message - Modern pill */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary to-navy-light rounded-full text-primary-foreground shadow-xl">
              <span className="font-bold text-lg">
                C'est précisément là qu'intervient BIM ENGINEERING EI
              </span>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
