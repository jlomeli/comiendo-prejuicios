import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

const PAIN_POINTS = [
	{
		title: "La comida controla tu día",
		description:
			"Pensamientos constantes sobre qué comer, cuánto o cuándo. La culpa después de comer te acompaña y afecta tu bienestar.",
	},
	{
		title: "El trauma que no se va",
		description:
			"Experiencias pasadas siguen impactando cómo te sientes con tu cuerpo y con la comida. Quieres soltar el peso sin saber por dónde empezar.",
	},
	{
		title: "Un mundo que no está hecho para ti",
		description:
			"Si eres neurodivergente, las expectativas sociales y las rutinas rígidas pueden hacer que la alimentación y el autocuidado sean aún más difíciles.",
	},
];

export function Problem() {
	return (
		<section
			id="problema"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40"
			aria-labelledby="problem-heading"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
						Si te identificas
					</p>
					<h2
						id="problem-heading"
						className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground"
					>
						No estás sola en esto
					</h2>
					<p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
						Muchas mujeres adultas viven con estas experiencias. Reconocerlas es
						el primer paso.
					</p>
				</ScrollReveal>

				<ScrollReveal delay={0.05} className="mb-12">
					<div className="relative w-full max-w-2xl mx-auto aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-md border border-border/60">
						<img
							src={images.problem}
							alt=""
							className="w-full h-full object-cover"
							width={800}
							height={500}
							loading="lazy"
						/>
					</div>
				</ScrollReveal>

				<div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
					{PAIN_POINTS.map((item, i) => (
						<ScrollReveal key={item.title} delay={i * 0.1} className="group">
							<div className="h-full p-6 sm:p-8 rounded-[1.5rem] bg-card border border-border/60 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20">
								<div
									className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center text-primary bg-primary/10"
									aria-hidden
								>
									<span className="text-lg font-semibold">{i + 1}</span>
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">
									{item.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
