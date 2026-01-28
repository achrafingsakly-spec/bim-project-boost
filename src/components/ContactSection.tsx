import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, MessageSquare, Target, Lightbulb, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: MessageSquare,
    text: "Clarifier vos enjeux",
    gradient: "from-blue-500/15 to-cyan-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Target,
    text: "Identifier les risques",
    gradient: "from-emerald-500/15 to-teal-500/15",
    iconColor: "text-emerald-500",
  },
  {
    icon: Lightbulb,
    text: "Définir une approche adaptée",
    gradient: "from-amber-500/15 to-orange-500/15",
    iconColor: "text-amber-500",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message envoyé !",
      description: "Nous reviendrons vers vous rapidement.",
    });

    // Reset after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Discutons de votre projet BIM
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Vous avez un projet en cours ou à venir ? Un besoin ponctuel ou une
              mission ciblée ?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Un échange rapide permet de :
              </h3>
              <div className="space-y-5 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group flex items-center gap-5 p-5 bg-secondary/50 rounded-2xl hover:bg-secondary transition-all duration-300 hover:shadow-md"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                    </div>
                    <span className="font-semibold text-foreground text-lg">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Contact info - Modern glass card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-8 border-l-4 border-l-accent"
              >
                <p className="font-bold text-foreground text-xl mb-2">BIM ENGINEERING EI</p>
                <p className="text-muted-foreground mb-4">
                  Consultant BIM indépendant
                </p>
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Réponse sous 24-48h</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-3"
                  >
                    Nom *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-13 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:bg-background transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-3"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-13 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:bg-background transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-3"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[160px] resize-none rounded-xl bg-background/50 border-border/50 focus:border-accent focus:bg-background transition-all duration-300"
                    placeholder="Décrivez brièvement votre projet ou besoin..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message envoyé !
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Prendre contact
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  Vos données sont confidentielles et ne seront jamais partagées.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
