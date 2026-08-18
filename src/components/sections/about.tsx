import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * Portrait placeholder for Dra. Claudia Gomez — an abstract silhouette +
 * monogram, not a photo. No photo-generation tooling is available in this
 * environment, and faking photorealism for a real, named person would be
 * actively misleading, so this stays deliberately illustrated until real
 * photography exists — tracked in #15.
 */
function PortraitPlaceholder() {
	return (
		<div className="relative">
			<div
				className="absolute -top-10 -left-10 w-56 h-56 rounded-full pointer-events-none"
				style={{ border: "2px solid rgba(127, 83, 83, 0.2)" }}
				aria-hidden
			/>
			<div
				className="relative z-10 rounded-3xl overflow-hidden shadow-[var(--brand-shadow-ambient)] aspect-[3/4] flex items-center justify-center"
				style={{
					background: `
						radial-gradient(ellipse 70% 80% at 40% 60%, var(--organic-blob) 0%, transparent 60%),
						radial-gradient(ellipse 60% 50% at 70% 20%, var(--organic-blob-2) 0%, transparent 55%),
						var(--brand-surface-low)
					`,
				}}
			>
				<svg
					viewBox="0 0 300 400"
					fill="none"
					role="presentation"
					aria-hidden
					className="absolute inset-0 w-full h-full"
				>
					{/* Soft abstract silhouette — shoulders + head shape */}
					<ellipse
						cx="150"
						cy="150"
						rx="46"
						ry="54"
						fill="var(--brand-ink)"
						fillOpacity="0.08"
					/>
					<path
						d="M75 320 C75 260 105 232 150 232 C195 232 225 260 225 320"
						fill="var(--brand-ink)"
						fillOpacity="0.06"
					/>

					{/* Botanical accents echoing the hero */}
					<path
						d="M40 380 C55 340 48 310 65 275"
						stroke="var(--brand-rose)"
						strokeWidth="1.2"
						strokeLinecap="round"
						opacity="0.5"
					/>
					<ellipse
						cx="70"
						cy="266"
						rx="12"
						ry="22"
						transform="rotate(-20 70 266)"
						fill="var(--brand-rose)"
						fillOpacity="0.1"
						stroke="var(--brand-rose)"
						strokeWidth="0.7"
					/>
					<path
						d="M260 380 C245 340 252 310 235 275"
						stroke="var(--brand-gold)"
						strokeWidth="1.2"
						strokeLinecap="round"
						opacity="0.5"
					/>
					<ellipse
						cx="230"
						cy="266"
						rx="12"
						ry="22"
						transform="rotate(20 230 266)"
						fill="var(--brand-gold)"
						fillOpacity="0.1"
						stroke="var(--brand-gold)"
						strokeWidth="0.7"
					/>

					{/* Monogram */}
					<text
						x="150"
						y="160"
						textAnchor="middle"
						fontFamily="Noto Serif, serif"
						fontSize="30"
						fontWeight="300"
						fontStyle="italic"
						fill="var(--brand-ink)"
						fillOpacity="0.35"
					>
						CG
					</text>
				</svg>
			</div>
		</div>
	);
}

export function About() {
	return (
		<section
			id="sobre-mi"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
			aria-labelledby="about-heading"
		>
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
					{/* Portrait — image col on desktop, second on mobile */}
					<ScrollReveal
						direction="right"
						className="md:col-span-5 order-2 md:order-1"
					>
						<PortraitPlaceholder />
					</ScrollReveal>

					{/* Text — text col on desktop, first on mobile */}
					<ScrollReveal
						delay={0.15}
						direction="left"
						className="md:col-span-7 order-1 md:order-2"
					>
						<div className="space-y-5">
							<p
								className="text-sm uppercase tracking-[0.2em]"
								style={{ color: "var(--brand-gold)" }}
							>
								Quién te acompaña
							</p>

							<h2
								id="about-heading"
								className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-tight"
							>
								Dra. Claudia Gomez
							</h2>

							<p className="text-muted-foreground leading-relaxed font-light text-lg">
								Soy psicóloga y terapeuta ACT. Trabajo con mujeres adultas que
								están cansadas de pelear con la comida, con su cuerpo o con un
								mundo que no siempre las entiende.
							</p>

							<p className="text-muted-foreground leading-relaxed font-light">
								Llegué al ACT porque necesitaba una manera de acompañar a las
								personas sin prometerles que el dolor desaparecería — sino que
								podría dejar de gobernar su vida. Eso cambió mi forma de hacer
								terapia y, honestamente, también mi forma de vivir.
							</p>

							<ul
								className="space-y-2 pt-2"
								style={{ color: "var(--brand-ink-light)" }}
							>
								{[
									"Psicóloga clínica",
									"Especialista en Terapia de Aceptación y Compromiso (ACT)",
									"Formación en trastornos alimentarios y trauma complejo",
									"Enfoque neurodivergente-afirmativo",
									"Sesiones en línea · Ciudad de México",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-2 text-sm font-light"
									>
										<span
											className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
											style={{ background: "var(--brand-gold)" }}
											aria-hidden
										/>
										{item}
									</li>
								))}
							</ul>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
