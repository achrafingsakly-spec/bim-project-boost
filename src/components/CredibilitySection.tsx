import { Award, Building, Users, FileSearch, Quote } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  { icon: Award, text: "Ingénieur Génie Civil diplômé" },
  { icon: Building, text: "Double culture terrain / BIM" },
  { icon: Users, text: "AMO BIM – Référent BIM adjoint" },
  { icon: FileSearch, text: "SNCF Gares & Connexions" },
];

const CredibilitySection = () => {
  return (
    <section id="profil" className="py-24 md:py-32 bg-primary text-primary-foreground scroll-mt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
              Votre interlocuteur BIM
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-orange-glow rounded-full mx-auto" />
          </motion.div>

          {/* Profile card - Glass effect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-dark p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Avatar */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-28 h-28 rounded-3xl bg-gradient-to-br from-accent to-orange-hover flex items-center justify-center shrink-0 shadow-2xl"
              >
                <span className="text-4xl font-bold text-accent-foreground">AS</span>
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2">Achraf SAKLY</h3>
                <p className="text-primary-foreground/70 text-lg mb-8">
                  Ingénieur Génie Civil – Expert BIM
                </p>

                {/* Key message */}
                <p className="text-xl mb-8 font-medium text-primary-foreground/90 leading-relaxed">
                  Un seul interlocuteur, une vision globale, orientée résultat chantier.
                </p>

                {/* Credentials - Modern grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {credentials.map((cred, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
                    >
                      <cred.icon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{cred.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Quote - Modern style */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative pl-6 py-4 border-l-4 border-accent"
                >
                  <Quote className="absolute -left-3 -top-2 w-6 h-6 text-accent bg-primary" />
                  <blockquote className="text-lg italic text-primary-foreground/80 leading-relaxed">
                    "Le BIM n'est pas un livrable, c'est un outil de pilotage et de
                    maîtrise des risques."
                  </blockquote>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Experience badge - Modern pill */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-10 py-6 bg-primary-foreground/5 backdrop-blur-xl rounded-2xl border border-primary-foreground/10 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-accent">SNCF</span>
                <span className="text-sm text-primary-foreground/60">
                  Gares & Connexions
                </span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-primary-foreground/15" />
              <span className="text-sm text-primary-foreground/60 text-center">
                Coordination BIM multi-acteurs • Audits • Scan-to-BIM
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
