import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
            Quién te acompaña
          </p>
          <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            Sobre Comiendo Prejuicios
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col items-center">
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-primary/20 mb-8 overflow-hidden shadow-lg ring-2 ring-primary/10"
            aria-hidden
          >
            <img
              src={images.about}
              alt=""
              className="w-full h-full object-cover"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="prose prose-lg prose-neutral max-w-none text-center">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Soy terapeuta especializada en trastornos alimentarios, trauma y en crear espacios
              donde las personas neurodivergentes se sientan comprendidas. Uso metodologías
              basadas en evidencia (CBT) y trabajo desde la compasión y el respeto por tu ritmo.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Comiendo Prejuicios nace del deseo de ofrecer un lugar seguro: sin juicios sobre tu
              cuerpo, tu forma de comer o tu historia. Aquí puedes explorar, cuestionar y sanar
              tu relación con la comida y contigo misma.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
