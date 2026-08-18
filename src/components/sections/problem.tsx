import { ScrollReveal } from "@/components/scroll-reveal";

const CARDS = [
	{
		id: "comida",
		title:
			"Sientes que la comida es tu única forma de gestionar lo que sientes",
		description:
			"El ciclo de restricción y descontrol te agota. Buscas una relación de libertad, no de castigo.",
		tags: ["Ansiedad", "Comida emocional"],
		span: "md:col-span-2",
		variant: "surface" as const,
		icon: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				role="presentation"
				aria-hidden
				className="w-9 h-9"
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
		id: "cuerpo",
		title: "Tu cuerpo se siente como un lugar extraño u hostil",
		description:
			'Has pasado años intentando cambiarlo para "encajar", olvidando que es tu hogar.',
		span: "md:col-span-1",
		variant: "primary" as const,
		icon: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				role="presentation"
				aria-hidden
				className="w-9 h-9"
			>
				<path
					d="M20 30c-6-4.5-11-8.8-11-14.3C9 11.6 12 9 15.4 9c2 0 3.8 1 4.6 2.6C20.8 10 22.6 9 24.6 9 28 9 31 11.6 31 15.7 31 21.2 26 25.5 20 30z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		id: "autocritica",
		title: "La autocrítica es la voz que más escuchas a diario",
		description:
			"Te exiges perfección y te castigas cuando no llegas. Trabajaremos la autocompasión real.",
		span: "md:col-span-1",
		variant: "surface" as const,
		icon: (
			<svg
				viewBox="0 0 40 40"
				fill="none"
				role="presentation"
				aria-hidden
				className="w-9 h-9"
			>
				<circle
					cx="20"
					cy="20"
					r="10"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M16 20c0-1.7 1.3-3 3-3M20 14v-2M20 28v-2M14 20h-2M28 20h-2"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		id: "delgadez",
		title: 'Crees que "cuando adelgaces" empezará tu vida de verdad',
		description:
			"La vida está ocurriendo ahora. No es un premio por cumplir con los cánones estéticos.",
		span: "md:col-span-2",
		variant: "elevated" as const,
		icon: null,
	},
] as const;

const CARD_STYLES: Record<
	(typeof CARDS)[number]["variant"],
	{ background: string; color: string; iconColor: string; iconBg?: string }
> = {
	surface: {
		background: "var(--brand-surface-lowest)",
		color: "var(--brand-ink)",
		iconColor: "var(--brand-rose)",
	},
	primary: {
		background: "var(--brand-rose)",
		color: "#FFFFFF",
		iconColor: "#FFFFFF",
	},
	elevated: {
		background: "var(--brand-surface-lowest)",
		color: "var(--brand-ink)",
		iconColor: "var(--brand-gold)",
	},
};

export function Problem() {
	return (
		<section
			id="para-quien"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-surface-low)" }}
			aria-labelledby="problem-heading"
		>
			<div className="max-w-6xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<h2
						id="problem-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						¿Te sientes identificada?
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl mx-auto font-light leading-relaxed">
						Quizás este sea el momento de parar y mirarte con otros ojos. Es
						probable que...
					</p>
				</ScrollReveal>

				<div className="grid md:grid-cols-3 gap-6 sm:gap-8">
					{CARDS.map((card, i) => {
						const style = CARD_STYLES[card.variant];
						return (
							<ScrollReveal key={card.id} delay={i * 0.1} className={card.span}>
								<div
									className="h-full p-8 rounded-3xl shadow-[var(--brand-shadow-ambient)] flex flex-col justify-center md:flex-row md:items-center gap-6"
									style={{ background: style.background, color: style.color }}
								>
									<div className="flex-1">
										{card.icon && (
											<div className="mb-6" style={{ color: style.iconColor }}>
												{card.icon}
											</div>
										)}
										<h3 className="font-serif text-xl sm:text-2xl font-normal mb-3 leading-snug">
											{card.title}
										</h3>
										<p
											className="text-sm leading-relaxed font-light"
											style={{
												color:
													card.variant === "primary"
														? "rgba(255,255,255,0.8)"
														: "var(--brand-ink-light)",
											}}
										>
											{card.description}
										</p>
										{"tags" in card && card.tags && (
											<div className="mt-6 flex flex-wrap gap-2">
												{card.tags.map((tag) => (
													<span
														key={tag}
														className="px-3 py-1 rounded-full text-xs font-medium"
														style={{
															background: "var(--brand-blush)",
															color: "var(--brand-rose)",
														}}
													>
														{tag}
													</span>
												))}
											</div>
										)}
									</div>
									{card.id === "delgadez" && (
										<div
											className="w-full md:w-48 aspect-video rounded-xl shrink-0"
											style={{
												background: `
													radial-gradient(ellipse 90% 100% at 30% 100%, var(--organic-blob-2) 0%, transparent 70%),
													radial-gradient(ellipse 70% 80% at 75% 15%, var(--brand-blush) 0%, transparent 65%),
													var(--brand-surface-low)
												`,
											}}
											aria-hidden
										/>
									)}
								</div>
							</ScrollReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
