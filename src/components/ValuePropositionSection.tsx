import { Eye, FileCheck, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi choisir BIM ENGINEERING EI ?
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Values grid - Modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-7 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group border border-border/50 hover:border-accent/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0 group-hover:from-accent group-hover:to-orange-hover transition-all duration-500">
                <value.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
