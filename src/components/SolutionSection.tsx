import { Target, Shield, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const objectives = [
  {
    icon: Target,
    text: "Des décisions mieux informées",
    gradient: "from-blue-500/15 to-cyan-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Shield,
    text: "Une exécution sécurisée",
    gradient: "from-emerald-500/15 to-teal-500/15",
    iconColor: "text-emerald-500",
  },
  {
    icon: TrendingDown,
    text: "Moins d'aléas en phase travaux",
    gradient: "from-violet-500/15 to-purple-500/15",
    iconColor: "text-violet-500",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/6 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Notre solution
            </h2>
            <div className="section-divider mx-auto" />
          </motion.div>

          {/* Main description - Glass card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 md:p-10 mb-12 border-l-4 border-l-accent"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <strong className="text-accent">BIM ENGINEERING EI</strong> accompagne
              les acteurs du BTP dans la maîtrise de leurs projets BIM, de la
              modélisation à la planification 4D, en intégrant les contraintes
              techniques et opérationnelles dès les phases amont.
            </p>
          </motion.div>

          {/* Objectives - Modern grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${objective.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <objective.icon className={`w-8 h-8 ${objective.iconColor}`} />
                </div>
                <p className="font-bold text-foreground text-lg">{objective.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
