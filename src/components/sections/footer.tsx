import { ScrollReveal } from "@/components/scroll-reveal";

const DIVIDER_COLOR = "rgba(212,207,200,0.15)";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t"
			style={{
				background: "var(--brand-stone)",
				borderColor: "var(--brand-stone)",
			}}
			role="contentinfo"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
					<div>
						<p
							className="font-serif italic text-xl"
							style={{ color: "var(--brand-cream)" }}
						>
							Comiendo Prejuicios
						</p>
						<p
							className="text-sm mt-2 font-light"
							style={{ color: "var(--brand-mist)" }}
						>
							Dra. Claudia Gomez
						</p>
						<p
							className="text-xs mt-1 font-light"
							style={{ color: "var(--brand-stone-light)" }}
						>
							Psicóloga · Terapeuta ACT · Ciudad de México
						</p>
					</div>

					<nav aria-label="Enlaces del pie de página">
						<ul className="flex flex-wrap gap-4 sm:gap-6">
							{[
								{ href: "#sobre-mi", label: "Sobre mí" },
								{ href: "#enfoque", label: "Enfoque" },
								{ href: "#honorarios", label: "Honorarios" },
								{ href: "#contacto", label: "Contacto" },
								{ href: "#", label: "Aviso de privacidad" },
							].map((link) => (
								<li key={link.href + link.label}>
									<a
										href={link.href}
										className="text-sm font-light transition-opacity duration-500 hover:opacity-60 underline underline-offset-4"
										style={{ color: "var(--brand-mist)" }}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</ScrollReveal>

				<ScrollReveal className="mt-8">
					<div className="pt-8 border-t" style={{ borderColor: DIVIDER_COLOR }}>
						<p
							className="text-xs font-light text-center sm:text-left"
							style={{ color: "var(--brand-stone-light)" }}
						>
							© {currentYear} Comiendo Prejuicios. Todos los derechos
							reservados.
						</p>
					</div>
				</ScrollReveal>
			</div>
		</footer>
	);
}
