import { Building2, HardHat, Users, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            À qui s'adresse cette offre ?
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-card border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-7">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/15 to-orange-glow/15 flex items-center justify-center mb-6 group-hover:from-accent/25 group-hover:to-orange-glow/25 transition-all duration-500 group-hover:scale-110">
                    <audience.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key message - Modern glass card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              Si votre projet implique <strong className="text-accent">plusieurs acteurs</strong>, des{" "}
              <strong className="text-accent">interfaces sensibles</strong> ou des{" "}
              <strong className="text-accent">contraintes fortes</strong>, une approche BIM fiable est
              indispensable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
