import { ScrollReveal } from "@/components/scroll-reveal";

const CARDS = [
	{
		id: "alimentacion",
		title: "Alimentación & Cuerpo",
		description:
			"La comida ocupa demasiado espacio mental. La culpa después de comer, el miedo a ciertos alimentos, la relación con tu cuerpo que siente como batalla constante.",
		icon: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				role="presentation"
				aria-hidden
				className="w-8 h-8"
			>
				<path
					d="M20 8c-2 0-4 1.5-4 4s2 4 4 4 4-1.5 4-4-2-4-4-4z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M8 20c2-2 4-2 5 0M27 20c1-2 3-2 5 0"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		id: "trauma",
		title: "Trauma & Pasado",
		description:
			"Experiencias que no eligiste siguen moldeando tu presente. Reacciones que no entiendes, relaciones que duelen, un cuerpo que recuerda lo que la mente quiere olvidar.",
		icon: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				role="presentation"
				aria-hidden
				className="w-8 h-8"
			>
				<circle
					cx="20"
					cy="20"
					r="10"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M20 14v6l4 3"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M13 10l-2-2M27 10l2-2M13 30l-2 2M27 30l2 2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		id: "neurodivergencia",
		title: "Neurodivergencia & Vida Diaria",
		description:
			"Un mundo diseñado para mentes neurotípicas puede agotarte. Las rutinas, las texturas, la sobrecarga sensorial y la autoexigencia hacen que el día a día se sienta cuesta arriba.",
		icon: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				role="presentation"
				aria-hidden
				className="w-8 h-8"
			>
				<path
					d="M20 8c6.6 0 12 5.4 12 12S26.6 32 20 32 8 26.6 8 20 13.4 8 20 8z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M14 20c0-3.3 2.7-6 6-6M20 26c-3.3 0-6-2.7-6-6"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<circle cx="26" cy="17" r="1.5" fill="currentColor" />
			</svg>
		),
	},
] as const;

export function Problem() {
	return (
		<section
			id="para-quien"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-linen)" }}
			aria-labelledby="problem-heading"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						Para quién es este espacio
					</p>
					<h2
						id="problem-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						Quizás estás aquí si...
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl mx-auto font-light leading-relaxed">
						Reconocerse en estas palabras no es debilidad. Es el primer paso
						para dejar de pelear sola.
					</p>
				</ScrollReveal>

				<div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
					{CARDS.map((card, i) => (
						<ScrollReveal key={card.id} delay={i * 0.12}>
							<div
								className="h-full p-8 rounded-3xl border transition-all duration-500 hover:shadow-lg"
								style={{
									background: "var(--brand-cream)",
									borderColor: "var(--brand-mist)",
									color: "var(--brand-stone)",
								}}
							>
								<div
									className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
									style={{
										background: "var(--brand-linen)",
										color: "var(--brand-sage)",
									}}
								>
									{card.icon}
								</div>
								<h3 className="font-serif text-xl font-normal text-foreground mb-3">
									{card.title}
								</h3>
								<p
									className="text-sm leading-relaxed font-light"
									style={{ color: "var(--brand-stone-light)" }}
								>
									{card.description}
								</p>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
