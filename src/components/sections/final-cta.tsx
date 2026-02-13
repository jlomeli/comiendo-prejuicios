import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

const CONSULTATION_URL = "#consultation";

export function FinalCta() {
  return (
    <section
      id="consultation"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={images.ctaBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" aria-hidden />
      </div>
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center p-10 sm:p-14 rounded-[2rem] bg-card/90 backdrop-blur-sm border border-primary/20 shadow-lg">
          <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
            ¿Lista para dar el primer paso?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            La consulta gratuita es un espacio para conocernos y ver si este proceso es para ti.
            Sin compromiso.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-[1.25rem] px-10 py-6 text-base font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <a href={CONSULTATION_URL}>
                Agendar mi consulta gratuita
              </a>
            </Button>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
