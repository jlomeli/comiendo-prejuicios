import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

export function About() {
	return (
		<section
			id="sobre-mi"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			aria-labelledby="about-heading"
		>
			<div className="max-w-5xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
					{/* Image — left col */}
					<ScrollReveal direction="right">
						<div className="relative">
							<div
								className="absolute -inset-4 rounded-[2.5rem] -z-10 opacity-60"
								style={{ background: "var(--brand-linen)" }}
								aria-hidden
							/>
							<div
								className="w-full aspect-square rounded-[2rem] overflow-hidden border-2"
								style={{ borderColor: "var(--brand-mist)" }}
							>
								<img
									src={images.about}
									alt="Dra. Claudia Gomez, psicóloga y terapeuta ACT"
									className="w-full h-full object-cover"
									width={400}
									height={400}
									loading="lazy"
								/>
							</div>
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
