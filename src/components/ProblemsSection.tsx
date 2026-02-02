import { AlertTriangle, FileX, GitBranch, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Problèmes fréquents rencontrés
            </h2>
            <motion.div 
              className="section-divider mx-auto mb-5"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-muted-foreground text-lg">
              Ces difficultés vous sont familières ?
            </p>
          </motion.div>

          {/* Problems list - Modern cards with enhanced hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  x: 5,
                  transition: { type: "spring", stiffness: 400, damping: 17 } 
                }}
                className="group flex items-center gap-5 p-6 bg-gradient-to-r from-destructive/5 to-destructive/10 rounded-2xl border border-destructive/10 hover:border-destructive/30 transition-all duration-300 hover:shadow-lg cursor-default"
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <problem.icon className="w-6 h-6 text-destructive" />
                </motion.div>
                <p className="text-foreground font-medium text-lg">{problem.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Transition message - Modern pill with pulse animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary to-navy-light rounded-full text-primary-foreground shadow-xl"
              whileHover={{ scale: 1.03 }}
              animate={{ 
                boxShadow: [
                  "0 10px 30px -10px rgba(0,0,0,0.3)",
                  "0 20px 40px -10px rgba(0,0,0,0.4)",
                  "0 10px 30px -10px rgba(0,0,0,0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <span className="font-bold text-lg">
                C'est précisément là qu'intervient BIM ENGINEERING EI
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
