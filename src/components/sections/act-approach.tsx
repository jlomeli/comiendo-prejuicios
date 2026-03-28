import { ScrollReveal } from "@/components/scroll-reveal";

const ACT_PILLARS = [
	{
		id: "aceptacion",
		label: "Aceptación",
		text: "No es resignarse. Es dejar de gastar energía en resistir lo que ya está aquí.",
	},
	{
		id: "defusion",
		label: "Defusión",
		text: "Los pensamientos son solo palabras — no órdenes. Aprendes a observarlos sin obedecerlos.",
	},
	{
		id: "presente",
		label: "Momento presente",
		text: "Volver al aquí y ahora, donde la vida realmente ocurre.",
	},
	{
		id: "contexto",
		label: "Yo como contexto",
		text: "Hay una parte de ti que observa todo y nunca ha sido dañada. Desde ahí trabajamos.",
	},
	{
		id: "valores",
		label: "Valores",
		text: "No reglas ni obligaciones. Qué importa de verdad para ti y cómo quieres vivir.",
	},
	{
		id: "accion",
		label: "Acción comprometida",
		text: "Pequeños pasos en la dirección que elegiste, aunque el miedo o la tristeza también estén.",
	},
] as const;

/* Soft organic SVG — 6 petals arranged in a loose circle, not a clinical chart */
function HexaflexBloom() {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			role="presentation"
			aria-hidden
			className="w-48 h-48 sm:w-56 sm:h-56 opacity-70"
		>
			{/* Center circle */}
			<circle
				cx="100"
				cy="100"
				r="18"
				fill="var(--brand-linen)"
				stroke="var(--brand-mist)"
				strokeWidth="1"
			/>
			<text
				x="100"
				y="105"
				textAnchor="middle"
				fontSize="8"
				fill="var(--brand-stone-light)"
				fontFamily="Cormorant Garamond, serif"
				fontStyle="italic"
			>
				ACT
			</text>

			{/* 6 petals */}
			{[0, 60, 120, 180, 240, 300].map((angle, i) => {
				const rad = (angle - 90) * (Math.PI / 180);
				const cx = 100 + 56 * Math.cos(rad);
				const cy = 100 + 56 * Math.sin(rad);
				const colors = [
					"var(--brand-sage)",
					"var(--brand-dusty-rose)",
					"var(--brand-terracotta)",
					"var(--brand-sage)",
					"var(--brand-dusty-rose)",
					"var(--brand-terracotta)",
				];
				return (
					<ellipse
						key={angle}
						cx={cx}
						cy={cy}
						rx="22"
						ry="14"
						fill={colors[i]}
						fillOpacity="0.18"
						stroke={colors[i]}
						strokeWidth="1"
						transform={`rotate(${angle}, ${cx}, ${cy})`}
					/>
				);
			})}

			{/* Connecting lines */}
			{[0, 60, 120, 180, 240, 300].map((angle) => {
				const rad = (angle - 90) * (Math.PI / 180);
				const x2 = 100 + 40 * Math.cos(rad);
				const y2 = 100 + 40 * Math.sin(rad);
				return (
					<line
						key={angle}
						x1="100"
						y1="100"
						x2={x2}
						y2={y2}
						stroke="var(--brand-mist)"
						strokeWidth="1"
					/>
				);
			})}
		</svg>
	);
}

export function ActApproach() {
	return (
		<section
			id="enfoque"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-cream)" }}
			aria-labelledby="act-heading"
		>
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<ScrollReveal className="text-center mb-16">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						El enfoque terapéutico
					</p>
					<h2
						id="act-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-6"
					>
						El Enfoque ACT
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
						La Terapia de Aceptación y Compromiso (ACT) no te pide que pienses
						diferente ni que te sientas mejor. Te invita a relacionarte de otra
						forma con lo que ya sientes — para que tus pensamientos y emociones
						dejen de dictar cada decisión.
					</p>
				</ScrollReveal>

				{/* Bloom + pillars */}
				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					<ScrollReveal direction="right" className="flex justify-center">
						<HexaflexBloom />
					</ScrollReveal>

					<ScrollReveal delay={0.1} direction="left">
						<div className="space-y-5">
							{ACT_PILLARS.map((pillar) => (
								<div key={pillar.id} className="flex gap-3">
									<div
										className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
										style={{ background: "var(--brand-dusty-rose)" }}
										aria-hidden
									/>
									<div>
										<span
											className="font-serif text-base font-normal"
											style={{ color: "var(--brand-stone)" }}
										>
											{pillar.label} —{" "}
										</span>
										<span
											className="text-sm font-light leading-relaxed"
											style={{ color: "var(--brand-stone-light)" }}
										>
											{pillar.text}
										</span>
									</div>
								</div>
							))}
						</div>
					</ScrollReveal>
				</div>

				{/* Closing quote */}
				<ScrollReveal delay={0.2} className="text-center">
					<div
						className="inline-block px-8 py-6 rounded-3xl"
						style={{
							background: "var(--brand-linen)",
							borderLeft: "3px solid var(--brand-dusty-rose)",
						}}
					>
						<p className="font-serif text-2xl sm:text-3xl font-light italic text-foreground">
							"No se trata de arreglarte.
							<br />
							Se trata de libertad."
						</p>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
