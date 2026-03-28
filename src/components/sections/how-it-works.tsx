import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

const STEPS = [
	{
		step: "01",
		title: "Consulta gratuita",
		description:
			"Una videollamada breve para conocernos, aclarar tus dudas y ver si encajamos. Sin compromiso.",
	},
	{
		step: "02",
		title: "Evaluación y plan",
		description:
			"En las primeras sesiones entendemos tu historia y definimos juntas los objetivos y el ritmo del trabajo.",
	},
	{
		step: "03",
		title: "Sesiones de terapia",
		description:
			"Sesiones semanales o quincenales según lo que necesites, con herramientas de CBT y un espacio seguro.",
	},
	{
		step: "04",
		title: "Seguimiento y ajustes",
		description:
			"Vamos revisando tu avance y adaptando el proceso. Tu bienestar y tu ritmo van primero.",
	},
];

export function HowItWorks() {
	return (
		<section
			id="como-funciona"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-muted/40"
			aria-labelledby="how-heading"
		>
			<div className="max-w-4xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
						El proceso
					</p>
					<h2
						id="how-heading"
						className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground"
					>
						Cómo trabajamos juntas
					</h2>
					<p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
						Transparente, paso a paso y centrado en ti.
					</p>
				</ScrollReveal>

				<ScrollReveal delay={0.05} className="mb-14">
					<div className="relative w-full max-w-3xl mx-auto aspect-video rounded-[1.5rem] overflow-hidden shadow-md border border-border/60">
						<img
							src={images.howItWorks}
							alt=""
							className="w-full h-full object-cover"
							width={800}
							height={500}
							loading="lazy"
						/>
					</div>
				</ScrollReveal>

				<div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 gap-x-10 gap-y-12">
					{STEPS.map((item, i) => (
						<ScrollReveal key={item.step} delay={i * 0.1} className="relative">
							<div className="flex gap-5">
								<div
									className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg"
									aria-hidden
								>
									{item.step}
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground mb-2">
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
