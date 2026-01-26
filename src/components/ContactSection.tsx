import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, MessageSquare, Target, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: MessageSquare,
    text: "Clarifier vos enjeux",
  },
  {
    icon: Target,
    text: "Identifier les risques",
  },
  {
    icon: Lightbulb,
    text: "Définir une approche adaptée",
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
    <section id="contact" className="py-20 md:py-28 bg-card scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discutons de votre projet BIM
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Vous avez un projet en cours ou à venir ? Un besoin ponctuel ou une
              mission ciblée ?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Benefits */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Un échange rapide permet de :
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="p-6 bg-primary rounded-xl text-primary-foreground">
                <p className="font-semibold mb-2">BIM ENGINEERING EI</p>
                <p className="text-primary-foreground/80 text-sm">
                  Consultant BIM indépendant
                </p>
                <p className="text-primary-foreground/80 text-sm mt-4">
                  Réponse sous 24-48h
                </p>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
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
                    className="h-12"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
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
                    className="h-12"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
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
                    className="min-h-[150px] resize-none"
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

                <p className="text-xs text-muted-foreground text-center">
                  Vos données sont confidentielles et ne seront jamais partagées.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
