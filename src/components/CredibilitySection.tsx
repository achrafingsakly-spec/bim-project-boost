import { Award, Building, Users, FileSearch } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section id="profil" className="py-20 md:py-28 bg-primary text-primary-foreground scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre interlocuteur BIM
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          </div>

          {/* Profile card */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary-foreground/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-3xl font-bold text-accent-foreground">AS</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Achraf SAKLY</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Ingénieur Génie Civil – Expert BIM
                </p>

                {/* Key message */}
                <p className="text-lg mb-6 font-medium">
                  Un seul interlocuteur, une vision globale, orientée résultat chantier.
                </p>

                {/* Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-sm">Ingénieur Génie Civil diplômé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-accent" />
                    <span className="text-sm">Double culture terrain / BIM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-sm">AMO BIM – Référent BIM adjoint</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileSearch className="w-5 h-5 text-accent" />
                    <span className="text-sm">SNCF Gares & Connexions</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-accent pl-5 italic text-primary-foreground/80">
                  "Le BIM n'est pas un livrable, c'est un outil de pilotage et de
                  maîtrise des risques."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Experience badge */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">SNCF</span>
                <span className="text-sm text-primary-foreground/70">
                  Gares & Connexions
                </span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-primary-foreground/20" />
              <span className="text-sm text-primary-foreground/70">
                Coordination BIM multi-acteurs • Audits • Scan-to-BIM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
