import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cuboid, ScanLine, FileSearch, Calendar, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cuboid,
    title: "Modélisation BIM 3D",
    description: "Maquettes fiables, structurées et adaptées aux usages réels du projet.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: ScanLine,
    title: "Scan-to-BIM",
    description: "Modélisation fidèle à partir de nuages de points pour sécuriser la base de travail.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: FileSearch,
    title: "Audit BIM & coordination",
    description: "Détection précoce des clashes et vision claire pour arbitrage.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: Calendar,
    title: "BIM 4D – Phasage",
    description: "Lien planning / maquette pour simuler et anticiper les phases travaux.",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Eye,
    title: "Visualisation & communication",
    description: "Faire comprendre le projet à tous les acteurs, rapidement.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500",
  },
];

const ServicesPreviewSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Domaines d'intervention
          </motion.h2>
          <motion.div 
            className="section-divider mx-auto mb-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Une offre complète pour maîtriser vos projets BIM de A à Z
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <Card className="group cursor-pointer h-full bg-card border border-border/50 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden gradient-border">
                <CardContent className="p-7">
                  {/* Icon with gradient background */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="cta" size="lg" className="group" asChild>
              <a href="#contact">
                Découvrir les services en détail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
