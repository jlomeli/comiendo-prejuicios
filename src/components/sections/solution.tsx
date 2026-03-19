import { ScrollReveal } from "@/components/scroll-reveal";
import { Heart, Brain, Sparkles } from "lucide-react";
import { images } from "@/lib/images";

const BENEFITS = [
  {
    icon: Heart,
    image: images.solutionFood,
    title: "Una relación más sana con la comida",
    description:
      "Trabajamos con metodologías basadas en evidencia (CBT) para que puedas comer con calma, sin culpa y en sintonía con tu cuerpo.",
  },
  {
    icon: Brain,
    image: images.solutionSafe,
    title: "Procesar trauma con seguridad",
    description:
      "Un espacio donde tu historia es escuchada. Aprendemos a integrar las experiencias difíciles sin que sigan dirigiendo tu vida.",
  },
  {
    icon: Sparkles,
    image: images.solutionMindful,
    title: "Un espacio neurodivergente-friendly",
    description:
      "Sesiones adaptadas a cómo procesas el mundo: flexibilidad, claridad y respeto por tu forma de pensar y sentir.",
  },
];

export function Solution() {
  return (
    <section
      id="solucion"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="solution-heading"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
            Qué puedes ganar
          </p>
          <h2 id="solution-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            Crecimiento con compasión
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            No se trata de “arreglarte”. Se trata de acompañarte con herramientas que sí funcionan.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1} className="group">
              <div className="h-full rounded-[1.5rem] bg-card border border-border/60 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div
                    className="w-14 h-14 rounded-[1.25rem] mb-5 flex items-center justify-center text-primary bg-primary/10"
                    aria-hidden
                  >
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
