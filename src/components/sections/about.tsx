import { ScrollReveal } from "@/components/scroll-reveal";

/* Illustrated botanical portrait — warm, artful, not a placeholder */
function BotanicalPortrait() {
	return (
		<div
			className="relative w-full aspect-square rounded-[2rem] overflow-hidden flex items-center justify-center border-2"
			style={{
				background: `
					radial-gradient(ellipse 70% 80% at 40% 60%, #C9A09A22 0%, transparent 60%),
					radial-gradient(ellipse 60% 50% at 70% 20%, #7B9E8718 0%, transparent 55%),
					var(--brand-linen)
				`,
				borderColor: "var(--brand-mist)",
			}}
		>
			{/* Botanical frame — decorative SVG illustration */}
			<svg
				viewBox="0 0 300 300"
				fill="none"
				role="presentation"
				aria-hidden
				className="absolute inset-0 w-full h-full"
			>
				{/* Bottom-left botanical spray */}
				<path
					d="M10 290 C20 260 15 240 30 215 C40 195 25 175 42 155"
					stroke="var(--brand-sage)"
					strokeWidth="1.2"
					strokeLinecap="round"
				/>
				<ellipse
					cx="50"
					cy="148"
					rx="14"
					ry="26"
					transform="rotate(-20 50 148)"
					fill="var(--brand-sage)"
					fillOpacity="0.12"
					stroke="var(--brand-sage)"
					strokeWidth="0.8"
				/>
				<path
					d="M30 225 C12 215 4 200 2 185"
					stroke="var(--brand-sage)"
					strokeWidth="1"
					strokeLinecap="round"
				/>
				<ellipse
					cx="0"
					cy="178"
					rx="10"
					ry="18"
					transform="rotate(10 0 178)"
					fill="var(--brand-sage)"
					fillOpacity="0.09"
					stroke="var(--brand-sage)"
					strokeWidth="0.7"
				/>
				<path
					d="M34 200 C50 188 60 172 65 155"
					stroke="var(--brand-sage)"
					strokeWidth="0.9"
					strokeLinecap="round"
				/>

				{/* Top-right botanical spray */}
				<path
					d="M290 10 C278 40 283 60 268 85 C258 105 272 125 256 145"
					stroke="var(--brand-dusty-rose)"
					strokeWidth="1.2"
					strokeLinecap="round"
				/>
				<ellipse
					cx="248"
					cy="152"
					rx="14"
					ry="26"
					transform="rotate(20 248 152)"
					fill="var(--brand-dusty-rose)"
					fillOpacity="0.10"
					stroke="var(--brand-dusty-rose)"
					strokeWidth="0.8"
				/>
				<path
					d="M266 92 C283 82 294 68 298 52"
					stroke="var(--brand-dusty-rose)"
					strokeWidth="1"
					strokeLinecap="round"
				/>
				<ellipse
					cx="300"
					cy="44"
					rx="10"
					ry="18"
					transform="rotate(-12 300 44)"
					fill="var(--brand-dusty-rose)"
					fillOpacity="0.09"
					stroke="var(--brand-dusty-rose)"
					strokeWidth="0.7"
				/>

				{/* Small accent flowers */}
				<circle
					cx="68"
					cy="148"
					r="4"
					fill="var(--brand-dusty-rose)"
					fillOpacity="0.5"
				/>
				<circle
					cx="58"
					cy="138"
					r="2.5"
					fill="var(--brand-dusty-rose)"
					fillOpacity="0.3"
				/>
				<circle
					cx="244"
					cy="158"
					r="4"
					fill="var(--brand-sage)"
					fillOpacity="0.5"
				/>
				<circle
					cx="254"
					cy="148"
					r="2.5"
					fill="var(--brand-sage)"
					fillOpacity="0.3"
				/>

				{/* Soft abstract silhouette — shoulders + head shape */}
				<ellipse
					cx="150"
					cy="118"
					rx="34"
					ry="40"
					fill="var(--brand-stone)"
					fillOpacity="0.08"
				/>
				<path
					d="M95 220 C95 185 115 168 150 168 C185 168 205 185 205 220"
					fill="var(--brand-stone)"
					fillOpacity="0.06"
				/>

				{/* Monogram */}
				<text
					x="150"
					y="126"
					textAnchor="middle"
					fontFamily="Cormorant Garamond, serif"
					fontSize="28"
					fontWeight="300"
					fontStyle="italic"
					fill="var(--brand-stone)"
					fillOpacity="0.35"
				>
					CG
				</text>

				{/* Delicate corner dots */}
				<circle cx="20" cy="20" r="2" fill="var(--brand-mist)" />
				<circle cx="280" cy="20" r="2" fill="var(--brand-mist)" />
				<circle cx="20" cy="280" r="2" fill="var(--brand-mist)" />
				<circle cx="280" cy="280" r="2" fill="var(--brand-mist)" />
			</svg>
		</div>
	);
}

export function About() {
	return (
		<section
			id="sobre-mi"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			aria-labelledby="about-heading"
		>
			<div className="max-w-5xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
					{/* Illustrated portrait — left col */}
					<ScrollReveal direction="right">
						<div className="relative">
							<div
								className="absolute -inset-4 rounded-[2.5rem] -z-10 opacity-60"
								style={{ background: "var(--brand-linen)" }}
								aria-hidden
							/>
							<BotanicalPortrait />
						</div>
					</ScrollReveal>

					{/* Text — right col */}
					<ScrollReveal delay={0.15} direction="left">
						<div className="space-y-5">
							<p
								className="text-sm uppercase tracking-[0.2em]"
								style={{ color: "var(--brand-sage)" }}
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
								style={{ color: "var(--brand-stone-light)" }}
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
											style={{ background: "var(--brand-dusty-rose)" }}
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
