import { ScrollReveal } from "@/components/scroll-reveal";

const STEPS = [
	{
		step: "01",
		title: "Primer contacto",
		description:
			"Escríbeme a través del formulario. No necesitas tener todo claro — solo dar el primer paso.",
	},
	{
		step: "02",
		title: "Consulta gratuita",
		description:
			"Una videollamada breve (20 min) para conocernos, aclarar tus dudas y ver si encajamos. Sin compromiso.",
	},
	{
		step: "03",
		title: "Comenzamos",
		description:
			"En las primeras sesiones entendemos tu historia y definimos juntas un ritmo que se ajuste a ti.",
	},
	{
		step: "04",
		title: "Seguimiento",
		description:
			"Revisamos el proceso con calma, ajustamos lo que sea necesario. Tu bienestar va primero, siempre.",
	},
];

export function HowItWorks() {
	return (
		<section
			id="que-esperar"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-linen)" }}
			aria-labelledby="how-heading"
		>
			<div className="max-w-4xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						El proceso
					</p>
					<h2
						id="how-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						Qué esperar
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl mx-auto font-light leading-relaxed">
						Nada está grabado en piedra. Esto es solo una guía — tu proceso será
						único y lo iremos construyendo juntas.
					</p>
				</ScrollReveal>

				{/* Timeline — horizontal on desktop, vertical on mobile */}
				<div className="relative">
					{/* Desktop connector line */}
					<div
						className="hidden sm:block absolute top-7 left-0 right-0 h-px"
						style={{ background: "var(--brand-mist)" }}
						aria-hidden
					/>

					<div className="grid sm:grid-cols-4 gap-10 sm:gap-6">
						{STEPS.map((item, i) => (
							<ScrollReveal key={item.step} delay={i * 0.1}>
								<div className="flex sm:flex-col gap-5 sm:gap-4">
									{/* Step number bubble */}
									<div
										className="relative shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-light border-2 sm:mx-auto"
										style={{
											background: "var(--brand-cream)",
											borderColor: "var(--brand-mist)",
											color: "var(--brand-stone)",
										}}
										aria-hidden
									>
										{item.step}
									</div>

									<div className="sm:text-center">
										<h3
											className="font-serif text-lg font-normal mb-2"
											style={{ color: "var(--brand-stone)" }}
										>
											{item.title}
										</h3>
										<p
											className="text-sm font-light leading-relaxed"
											style={{ color: "var(--brand-stone-light)" }}
										>
											{item.description}
										</p>
									</div>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
