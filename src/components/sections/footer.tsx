import { ScrollReveal } from "@/components/scroll-reveal";
import { photoCredits } from "@/lib/images";

const CONSULTATION_URL = "#consultation";
const UNSPLASH_URL = "https://unsplash.com";

export function Footer() {
	const currentYear = new Date().getFullYear();

	const uniqueCredits = Array.from(
		new Map(photoCredits.map((c) => [c.url, c])).values(),
	);

	return (
		<footer
			className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/60 border-t border-border/60"
			role="contentinfo"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
					<div>
						<p className="font-serif font-semibold text-foreground text-lg">
							Comiendo Prejuicios
						</p>
						<p className="text-sm text-muted-foreground mt-1">
							Terapia · CBT · Trastornos alimentarios · Trauma · Espacios
							neurodivergente-friendly
						</p>
					</div>
					<nav aria-label="Enlaces del pie de página">
						<ul className="flex flex-wrap gap-4 sm:gap-6">
							<li>
								<a
									href={CONSULTATION_URL}
									className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
								>
									Consulta gratuita
								</a>
							</li>
							<li>
								<a
									href="#como-funciona"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
								>
									Proceso
								</a>
							</li>
							<li>
								<a
									href="#sobre-mi"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
								>
									Sobre mí
								</a>
							</li>
						</ul>
					</nav>
				</ScrollReveal>

				<ScrollReveal className="mt-10 pt-8 border-t border-border/60">
					<p className="text-sm font-medium text-foreground mb-2">
						Créditos fotográficos
					</p>
					<p className="text-sm text-muted-foreground mb-3">
						Las imágenes de esta web son de{" "}
						<a
							href={UNSPLASH_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline underline-offset-2"
						>
							Unsplash
						</a>
						. Cada enlace lleva a la foto en Unsplash, donde se muestra el
						autor.
					</p>
					<ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
						{uniqueCredits.map((credit) => (
							<li key={credit.url}>
								<a
									href={credit.url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-foreground hover:underline underline-offset-2"
								>
									{credit.label}
								</a>
							</li>
						))}
					</ul>
				</ScrollReveal>

				<ScrollReveal className="mt-8 pt-8 border-t border-border/60">
					<p className="text-sm text-muted-foreground text-center sm:text-left">
						© {currentYear} Comiendo Prejuicios. Todos los derechos reservados.
					</p>
				</ScrollReveal>
			</div>
		</footer>
	);
}
