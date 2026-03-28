import { ScrollReveal } from "@/components/scroll-reveal";

const TESTIMONIALS = [
	{
		quote:
			"Por primera vez sentí que alguien entendía lo que pasaba con la comida y con mi cuerpo sin juzgarme. Las herramientas que aprendí aquí las uso todos los días.",
		author: "M.",
		context: "Trastorno alimentario y ansiedad",
	},
	{
		quote:
			"Como persona neurodivergente, encontrar un espacio donde no me piden que me adapte a un molde fue un alivio. La terapia se siente hecha a mi medida.",
		author: "L.",
		context: "Neurodivergencia y relación con la comida",
	},
	{
		quote:
			"Trabajar el trauma con ella me permitió dejar de repetir patrones que venían de hace años. Hoy me siento más libre conmigo misma.",
		author: "R.",
		context: "Trauma y autoestima",
	},
];

export function Testimonials() {
	return (
		<section
			id="testimonios"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-linen)" }}
			aria-labelledby="testimonials-heading"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						Voces de mujeres como tú
					</p>
					<h2
						id="testimonials-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground"
					>
						Lo que dicen quienes han dado el paso
					</h2>
				</ScrollReveal>

				<div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
					{TESTIMONIALS.map((item, i) => (
						<ScrollReveal key={item.author} delay={i * 0.12}>
							<blockquote
								className="h-full p-8 rounded-3xl border flex flex-col"
								style={{
									background: "var(--brand-cream)",
									borderColor: "var(--brand-mist)",
								}}
							>
								{/* Large typographic quote mark */}
								<span
									className="font-serif text-6xl leading-none mb-4 select-none"
									style={{ color: "var(--brand-dusty-rose)" }}
									aria-hidden
								>
									&ldquo;
								</span>

								<p
									className="font-serif text-lg italic font-light leading-relaxed flex-1 mb-6"
									style={{ color: "var(--brand-stone)" }}
								>
									{item.quote}
								</p>

								<footer>
									<cite
										className="not-italic font-sans text-sm"
										style={{ color: "var(--brand-stone-light)" }}
									>
										<span
											className="font-medium"
											style={{ color: "var(--brand-stone)" }}
										>
											{item.author}
										</span>
										{" — Cliente"}
										<span
											className="block mt-1 text-xs"
											style={{ color: "var(--brand-stone-light)" }}
										>
											{item.context}
										</span>
									</cite>
								</footer>
							</blockquote>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
