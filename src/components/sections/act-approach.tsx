import { ScrollReveal } from "@/components/scroll-reveal";

const ACT_PILLARS = [
	{
		id: "aceptacion",
		label: "Aceptación",
		text: "Dejar de pelear con lo que ya está ahí para ahorrar energía vital.",
	},
	{
		id: "mindfulness",
		label: "Mindfulness",
		text: "Habitar el presente sin juicios, incluso cuando es incómodo.",
	},
	{
		id: "valores",
		label: "Valores",
		text: "Descubrir qué te importa de verdad y actuar en esa dirección.",
	},
] as const;

/* Decorative sparkle — a simple hand-drawn accent, not a clinical icon */
function Sparkle() {
	return (
		<svg
			viewBox="0 0 40 40"
			fill="none"
			role="presentation"
			aria-hidden
			className="w-10 h-10 mx-auto mb-8"
		>
			<path
				d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

/* Faint wandering line — echoes the site's botanical motifs at low opacity */
function BackgroundWave() {
	return (
		<svg
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			fill="none"
			role="presentation"
			aria-hidden
			className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
		>
			<path
				d="M0,50 Q25,25 50,50 T100,50"
				stroke="currentColor"
				strokeWidth="0.5"
			/>
			<path
				d="M0,70 Q25,45 50,70 T100,70"
				stroke="currentColor"
				strokeWidth="0.5"
			/>
		</svg>
	);
}

export function ActApproach() {
	return (
		<section
			id="enfoque"
			className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-rose)", color: "#FFFFFF" }}
			aria-labelledby="act-heading"
		>
			<BackgroundWave />

			<div className="max-w-3xl mx-auto text-center relative">
				<ScrollReveal>
					<Sparkle />
					<h2
						id="act-heading"
						className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8"
					>
						No se trata de arreglarte.
						<br />
						<em
							className="not-italic italic font-normal"
							// A lightened blush, not the raw token — plain --brand-blush only
							// clears 2.94:1 on this rose background, just under the 3:1 floor
							// large text needs.
							style={{ color: "#E4BEBD" }}
						>
							Se trata de tu libertad.
						</em>
					</h2>
					<p
						className="text-lg sm:text-xl font-light leading-relaxed"
						style={{ color: "rgba(255,255,255,0.93)" }}
					>
						En ACT no buscamos eliminar el malestar por arte de magia, sino
						cambiar tu relación con él. Para que el miedo, la duda o la tristeza
						ya no sean quienes lleven el volante de tu vida.
					</p>
				</ScrollReveal>
			</div>

			<div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mt-16 relative text-left">
				{ACT_PILLARS.map((pillar, i) => (
					<ScrollReveal key={pillar.id} delay={0.1 + i * 0.1}>
						<div
							className="h-full p-8 rounded-xl"
							style={{
								background: "rgba(255,255,255,0.1)",
								border: "1px solid rgba(255,255,255,0.2)",
								backdropFilter: "blur(8px)",
							}}
						>
							<h3 className="font-serif text-xl font-normal mb-3">
								{pillar.label}
							</h3>
							<p
								className="text-sm leading-relaxed font-light"
								style={{ color: "rgba(255,255,255,0.93)" }}
							>
								{pillar.text}
							</p>
						</div>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
