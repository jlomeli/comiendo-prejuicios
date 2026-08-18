import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const PLANS = [
	{
		id: "individual",
		title: "Sesión Individual",
		subtitle: "Videollamada",
		price: "$800–$1,200",
		priceUnit: "MXN / sesión",
		facts: [
			{ term: "Duración", value: "50 minutos" },
			{ term: "Modalidad", value: "En línea" },
		],
		cta: "Solicitar sesión",
		featured: false,
	},
	{
		id: "bono",
		title: "Bono 4 Sesiones",
		subtitle: "Para procesos de continuidad",
		price: "4 sesiones",
		priceUnit: "por el precio de 3.5",
		facts: [
			{ term: "Duración", value: "50 minutos c/u" },
			{ term: "Modalidad", value: "En línea" },
		],
		cta: "Elegir bono",
		featured: true,
	},
] as const;

export function Fees() {
	return (
		<section
			id="honorarios"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			aria-labelledby="fees-heading"
		>
			<div className="max-w-4xl mx-auto">
				<ScrollReveal className="text-center mb-14">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-gold)" }}
					>
						Inversión en ti
					</p>
					<h2
						id="fees-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						Honorarios
					</h2>
					<p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl mx-auto">
						Creo que la terapia debe ser accesible. Aquí encontrarás información
						clara, sin sorpresas.
					</p>
				</ScrollReveal>

				<div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
					{PLANS.map((plan, i) => (
						<ScrollReveal key={plan.id} delay={i * 0.1}>
							<div
								className="relative h-full p-8 sm:p-10 rounded-3xl shadow-[var(--brand-shadow-ambient)] flex flex-col"
								style={{
									background: plan.featured
										? "var(--brand-surface-lowest)"
										: "var(--brand-surface-low)",
									outline: plan.featured
										? "2px solid var(--brand-blush)"
										: "none",
									outlineOffset: "-2px",
								}}
							>
								{plan.featured && (
									<span
										className="absolute top-6 right-6 sm:right-8 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest"
										style={{
											background: "var(--brand-gold)",
											color: "#FFFFFF",
										}}
									>
										Recomendado
									</span>
								)}

								<h3 className="font-serif text-xl font-normal text-foreground mb-1">
									{plan.title}
								</h3>
								<p className="text-sm text-muted-foreground mb-6">
									{plan.subtitle}
								</p>

								<div className="mb-6">
									<span className="font-serif text-3xl sm:text-4xl font-normal text-primary">
										{plan.price}
									</span>{" "}
									<span className="text-sm text-muted-foreground">
										{plan.priceUnit}
									</span>
								</div>

								{/* dl/dt/dd conveys term–value relationships to screen readers (WCAG 1.3.1) */}
								<dl className="space-y-2 mb-8 flex-1">
									{plan.facts.map((fact) => (
										<div
											key={fact.term}
											className="flex items-center justify-between text-sm gap-4"
										>
											<dt className="text-muted-foreground">{fact.term}</dt>
											<dd className="text-foreground font-medium">
												{fact.value}
											</dd>
										</div>
									))}
								</dl>

								<Button
									asChild
									variant={plan.featured ? "default" : "outline"}
									className="w-full"
								>
									<a href="#contacto">{plan.cta}</a>
								</Button>
							</div>
						</ScrollReveal>
					))}
				</div>

				<ScrollReveal delay={0.2} className="mt-10 text-center">
					<p className="text-sm font-light leading-relaxed text-muted-foreground">
						¿Tienes dudas sobre el costo o la cobertura de tu seguro?{" "}
						<a
							href="#contacto"
							className="underline underline-offset-2 transition-colors duration-500 hover:opacity-70 text-primary"
						>
							Escríbeme
						</a>{" "}
						y con gusto te oriento.
					</p>
				</ScrollReveal>
			</div>
		</section>
	);
}
