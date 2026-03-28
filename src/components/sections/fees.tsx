import { ScrollReveal } from "@/components/scroll-reveal";

const FEE_ITEMS = [
	{
		id: "sesion",
		label: "Sesión individual (50 min)",
		value: "$800–$1,200 MXN",
	},
	{
		id: "escala",
		label: "Escala móvil",
		value: "Disponible",
		note: "Si el costo es un obstáculo, hablemos — existen tarifas ajustadas según tu situación.",
	},
	{
		id: "superbill",
		label: "Recibo de honorarios / superbill",
		value: "Incluido",
		note: "Puedes presentarlo ante tu aseguradora para reembolso parcial si tu póliza lo cubre.",
	},
	{
		id: "modalidad",
		label: "Modalidad",
		value: "En línea",
		note: "Sesiones por videollamada. Flexibilidad de horarios entre semana y fin de semana.",
	},
] as const;

export function Fees() {
	return (
		<section
			id="honorarios"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			aria-labelledby="fees-heading"
		>
			<div className="max-w-3xl mx-auto">
				<ScrollReveal className="text-center mb-14">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						Inversión
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

				<ScrollReveal delay={0.1}>
					<div
						className="rounded-3xl border overflow-hidden"
						style={{
							borderColor: "var(--brand-mist)",
							background: "var(--brand-linen)",
						}}
					>
						{FEE_ITEMS.map((item, i) => (
							<div
								key={item.id}
								className="px-8 py-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8"
								style={{
									borderTop: i === 0 ? "none" : `1px solid var(--brand-mist)`,
								}}
							>
								<div className="sm:w-2/3">
									<p
										className="font-serif text-lg font-normal"
										style={{ color: "var(--brand-stone)" }}
									>
										{item.label}
									</p>
									{"note" in item && (
										<p
											className="text-sm font-light mt-1 leading-relaxed"
											style={{ color: "var(--brand-stone-light)" }}
										>
											{item.note}
										</p>
									)}
								</div>
								<div className="sm:w-1/3 sm:text-right">
									<span
										className="font-serif text-lg font-normal"
										style={{ color: "var(--brand-terracotta)" }}
									>
										{item.value}
									</span>
								</div>
							</div>
						))}
					</div>
				</ScrollReveal>

				<ScrollReveal delay={0.2} className="mt-8 text-center">
					<p
						className="text-sm font-light leading-relaxed"
						style={{ color: "var(--brand-stone-light)" }}
					>
						¿Tienes dudas sobre el costo o la cobertura de tu seguro?{" "}
						<a
							href="#contacto"
							className="underline underline-offset-2 transition-colors duration-500 hover:opacity-70"
							style={{ color: "var(--brand-sage)" }}
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
