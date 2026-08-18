import { useState } from "react";
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
] as const;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			role="presentation"
			aria-hidden
			className="w-5 h-5"
		>
			<path
				d={direction === "left" ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"}
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function Testimonials() {
	const [index, setIndex] = useState(0);
	const total = TESTIMONIALS.length;
	const current = TESTIMONIALS[index];

	const goTo = (i: number) => setIndex(((i % total) + total) % total);

	return (
		<section
			id="testimonios"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-surface)" }}
			aria-labelledby="testimonials-heading"
		>
			<div className="max-w-2xl mx-auto">
				<ScrollReveal className="text-center mb-16">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-gold)" }}
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

				<ScrollReveal delay={0.1}>
					{/* A <section> with an accessible name already computes an
					    implicit role of "region" — aria-roledescription="carousel"
					    layers on top of that rather than needing an explicit
					    role="region". */}
					<section
						aria-roledescription="carousel"
						aria-label="Testimonios de clientas"
					>
						{/* Announces slide changes to screen readers without moving focus */}
						<p aria-live="polite" aria-atomic="true" className="sr-only">
							Testimonio {index + 1} de {total}: {current.author}
						</p>

						{/* biome-ignore lint/a11y/useSemanticElements: <fieldset> is for grouping form controls, not carousel slides — the suggested element would be actively misleading here. */}
						<div
							role="group"
							aria-roledescription="diapositiva"
							aria-label={`${index + 1} de ${total}`}
							className="p-8 sm:p-10 rounded-3xl shadow-[var(--brand-shadow-ambient)]"
							style={{ background: "var(--brand-surface-lowest)" }}
						>
							<blockquote className="flex flex-col">
								<span
									className="font-serif text-6xl leading-none mb-4 select-none"
									style={{ color: "var(--brand-blush)" }}
									aria-hidden
								>
									&ldquo;
								</span>

								<p className="font-serif text-lg sm:text-xl italic font-light leading-relaxed mb-6 text-foreground">
									{current.quote}
								</p>

								<footer>
									<cite
										className="not-italic font-sans text-sm"
										style={{ color: "var(--brand-ink-light)" }}
									>
										<span className="font-medium text-foreground">
											{current.author}
										</span>
										{" — Cliente"}
										<span className="block mt-1 text-xs">
											{current.context}
										</span>
									</cite>
								</footer>
							</blockquote>
						</div>

						{/* Prev/next + pagination — manual only, no autoplay (vestibular
						    safety and predictability for this audience) */}
						<div className="flex items-center justify-center gap-6 mt-8">
							<button
								type="button"
								onClick={() => goTo(index - 1)}
								aria-label="Testimonio anterior"
								className="w-10 h-10 rounded-full flex items-center justify-center text-primary transition-colors duration-500 hover:bg-muted"
							>
								<ChevronIcon direction="left" />
							</button>

							<div className="flex items-center gap-2">
								{TESTIMONIALS.map((t, i) => (
									<button
										key={t.author}
										type="button"
										onClick={() => goTo(i)}
										aria-label={`Ir al testimonio ${i + 1} de ${total}`}
										aria-current={i === index ? "true" : undefined}
										className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
										style={{
											background:
												i === index
													? "var(--brand-gold)"
													: "var(--brand-ghost-border)",
										}}
									/>
								))}
							</div>

							<button
								type="button"
								onClick={() => goTo(index + 1)}
								aria-label="Testimonio siguiente"
								className="w-10 h-10 rounded-full flex items-center justify-center text-primary transition-colors duration-500 hover:bg-muted"
							>
								<ChevronIcon direction="right" />
							</button>
						</div>
					</section>
				</ScrollReveal>
			</div>
		</section>
	);
}
