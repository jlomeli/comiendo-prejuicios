import { ScrollReveal } from "@/components/scroll-reveal";
import { Quote } from "lucide-react";
import { images } from "@/lib/images";

const TESTIMONIALS = [
  {
    quote:
      "Por primera vez sentí que alguien entendía lo que pasaba con la comida y con mi cuerpo sin juzgarme. Las herramientas que aprendí aquí las uso todos los días.",
    author: "M.",
    context: "Trastorno alimentario y ansiedad",
    avatar: images.avatar1,
  },
  {
    quote:
      "Como persona neurodivergente, encontrar un espacio donde no me piden que me adapte a un molde fue un alivio. La terapia se siente hecha a mi medida.",
    author: "L.",
    context: "Neurodivergencia y relación con la comida",
    avatar: images.avatar2,
  },
  {
    quote:
      "Trabajar el trauma con ella me permitió dejar de repetir patrones que venían de hace años. Hoy me siento más libre conmigo misma.",
    author: "R.",
    context: "Trauma y autoestima",
    avatar: images.avatar3,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
            Voces de mujeres como tú
          </p>
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
            Lo que dicen quienes han dado el paso
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, i) => (
            <ScrollReveal key={item.author} delay={i * 0.1}>
              <blockquote className="h-full p-6 sm:p-8 rounded-[1.5rem] bg-card border border-border/60 shadow-sm flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-primary/20"
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                  <Quote
                    className="w-10 h-10 text-primary/40 shrink-0 mt-0.5"
                    strokeWidth={1.2}
                    aria-hidden
                  />
                </div>
                <p className="text-foreground leading-relaxed flex-1 mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-sm text-muted-foreground">
                  <cite className="not-italic font-medium text-foreground">{item.author}</cite>
                  <span className="block text-muted-foreground/80">{item.context}</span>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
