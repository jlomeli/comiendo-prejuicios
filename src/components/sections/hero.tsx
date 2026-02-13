import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

const CONSULTATION_URL = "#consultation";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-20"
      aria-label="Introducción"
    >
      {/* Background image - soft, calm */}
      <div
        className="absolute inset-0 -z-20"
        aria-hidden
      >
        <img
          src={images.heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[1px]" aria-hidden />
      </div>
      {/* Organic blob overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        aria-hidden
      >
        <div
          className="absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full blur-3xl transition-transform duration-[2s] ease-out"
          style={{ background: "var(--organic-blob)" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-3xl transition-transform duration-[2.5s] ease-out"
          style={{ background: "var(--organic-blob-2)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <p className="text-primary font-medium text-sm sm:text-base uppercase tracking-widest mb-4">
            Terapia con enfoque en ti
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
            Un espacio seguro para{" "}
            <span className="text-primary">sanar tu relación</span> con la comida y contigo misma
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Terapia basada en CBT especializada en trastornos alimentarios, trauma y
            espacios amigables para personas neurodivergentes. Sin juicio. Con compasión.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover="hover"
            variants={{ hover: { scale: 1.02 } }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-[1.25rem] px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <a href={CONSULTATION_URL}>
                Agendar consulta gratuita
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-[1.25rem] px-8 py-6 text-base border-2"
            >
              <a href="#como-funciona">Conocer el proceso</a>
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
