import { ScrollReveal } from "@/components/scroll-reveal";

const STEPS = [
	{
		step: "01",
		title: "Sesión de valoración",
		description:
			"Un primer encuentro de 20 minutos gratuito para conocernos, que me cuentes qué necesitas y ver si mi forma de trabajar resuena contigo.",
		visual: "mug",
	},
	{
		step: "02",
		title: "Evaluación y Mapa",
		description:
			"No hay dos procesos iguales. Dedicaremos las primeras sesiones a entender tu historia y trazar un mapa de hacia dónde queremos caminar juntas.",
		visual: "notebook",
	},
	{
		step: "03",
		title: "Sesiones de camino",
		description:
			"Trabajo semanal o quincenal. Sesiones de 50 minutos donde usamos herramientas de ACT para ganar flexibilidad psicológica y bienestar real.",
		visual: "sunlight",
	},
] as const;

/**
 * Decorative placeholder standing in for each step's supporting photo (a
 * mug of tea, an open notebook, sunlight through leaves) — see hero.tsx and
 * about.tsx for why this ships illustrated rather than as a faked photo.
 * Real photography is tracked in #15.
 */
function StepVisual({
	variant,
}: {
	variant: (typeof STEPS)[number]["visual"];
}) {
	return (
		<div
			className="w-full aspect-video rounded-3xl overflow-hidden relative flex items-center justify-center"
			style={{
				background: `
					radial-gradient(ellipse 80% 90% at 20% 20%, var(--organic-blob-2) 0%, transparent 60%),
					radial-gradient(ellipse 70% 80% at 80% 80%, var(--organic-blob) 0%, transparent 60%),
					var(--brand-surface-low)
				`,
			}}
		>
			{variant === "mug" && (
				<svg
					viewBox="0 0 64 64"
					fill="none"
					role="presentation"
					aria-hidden
					className="w-16 h-16 opacity-60"
				>
					<path
						d="M14 24h28v14a14 14 0 0 1-14 14 14 14 0 0 1-14-14V24z"
						stroke="var(--brand-rose)"
						strokeWidth="1.4"
						strokeLinejoin="round"
					/>
					<path
						d="M42 28h4a6 6 0 0 1 0 12h-4"
						stroke="var(--brand-rose)"
						strokeWidth="1.4"
					/>
					<path
						d="M22 12c0 3-3 3-3 6M32 12c0 3-3 3-3 6"
						stroke="var(--brand-gold)"
						strokeWidth="1.2"
						strokeLinecap="round"
					/>
				</svg>
			)}
			{variant === "notebook" && (
				<svg
					viewBox="0 0 64 64"
					fill="none"
					role="presentation"
					aria-hidden
					className="w-16 h-16 opacity-60"
				>
					<path
						d="M12 14h32a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H12z"
						stroke="var(--brand-rose)"
						strokeWidth="1.4"
						strokeLinejoin="round"
					/>
					<path d="M12 14v36" stroke="var(--brand-rose)" strokeWidth="1.4" />
					<path
						d="M20 26h20M20 33h20M20 40h14"
						stroke="var(--brand-rose)"
						strokeWidth="1"
						strokeLinecap="round"
						opacity="0.6"
					/>
					<path
						d="M40 8l6 6-16 16-7 1 1-7z"
						stroke="var(--brand-gold)"
						strokeWidth="1.2"
						strokeLinejoin="round"
					/>
				</svg>
			)}
			{variant === "sunlight" && (
				<svg
					viewBox="0 0 64 64"
					fill="none"
					role="presentation"
					aria-hidden
					className="w-16 h-16 opacity-60"
				>
					<circle
						cx="32"
						cy="24"
						r="9"
						stroke="var(--brand-gold)"
						strokeWidth="1.4"
					/>
					<path
						d="M32 4v6M32 38v6M12 24h6M50 24h6M18 10l4 4M46 10l-4 4"
						stroke="var(--brand-gold)"
						strokeWidth="1.2"
						strokeLinecap="round"
					/>
					<path
						d="M10 52c6-6 10-2 16-6s10-2 16-6 10-2 12 0"
						stroke="var(--brand-rose)"
						strokeWidth="1.2"
						strokeLinecap="round"
						opacity="0.7"
					/>
				</svg>
			)}
		</div>
	);
}

export function HowItWorks() {
	return (
		<section
			id="que-esperar"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-surface)" }}
			aria-labelledby="how-heading"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="mb-16 sm:mb-20">
					<h2
						id="how-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						Nuestro proceso
					</h2>
					<div
						className="w-24 h-1 rounded-full mb-6"
						style={{ background: "var(--brand-aura-gradient)" }}
						aria-hidden
					/>
					<p className="text-muted-foreground text-lg max-w-xl font-light leading-relaxed">
						Nada está grabado en piedra. Esto es solo una guía — tu proceso será
						único y lo iremos construyendo juntas.
					</p>
				</ScrollReveal>

				<div className="space-y-16 sm:space-y-24">
					{STEPS.map((item, i) => (
						<ScrollReveal key={item.step} delay={i * 0.1}>
							<div
								className={`flex flex-col md:items-center gap-8 md:gap-12 ${
									i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
								}`}
							>
								<div className="w-full md:w-1/2">
									<div
										className="font-serif text-7xl sm:text-8xl font-light select-none leading-none -mb-6 sm:-mb-8"
										style={{ color: "var(--brand-surface-lowest)" }}
										aria-hidden
									>
										{item.step}
									</div>
									<h3 className="font-serif text-2xl font-normal text-foreground mb-3 relative">
										{item.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed font-light">
										{item.description}
									</p>
								</div>
								<div className="w-full md:w-1/2">
									<StepVisual variant={item.visual} />
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
