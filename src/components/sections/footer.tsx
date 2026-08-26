import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type NewsletterStatus = "idle" | "submitted";

// Buttondown's embed-subscribe endpoint. Buttondown's own docs ask
// integrators NOT to submit this via fetch(): a subscriber sometimes needs
// to see Buttondown's response page to complete a CAPTCHA challenge or fix a
// typo'd address. So this is left as a real HTML form submission (not
// intercepted with preventDefault) — target="_blank" keeps this site's own
// tab in place while Buttondown's confirmation/error page opens in a new
// one. Because that outcome plays out in the new tab, we can only
// acknowledge the request was sent, not that the subscription succeeded.
const BUTTONDOWN_ENDPOINT =
	"https://buttondown.com/api/emails/embed-subscribe/comiendoprejuicios";

function Newsletter() {
	const [status, setStatus] = useState<NewsletterStatus>("idle");

	return (
		<section
			id="boletin"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-surface-low)" }}
			aria-labelledby="newsletter-heading"
		>
			<ScrollReveal className="max-w-xl mx-auto text-center">
				<h2
					id="newsletter-heading"
					className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4"
				>
					¿Deseas recibir calma en tu correo?
				</h2>
				<p className="text-muted-foreground leading-relaxed mb-8">
					Suscríbete para recibir reflexiones, herramientas de ACT y un espacio
					de calma directamente en tu bandeja de entrada.
				</p>

				<div aria-live="polite" aria-atomic="true" className="sr-only">
					{status === "submitted" &&
						"Se abrió una pestaña nueva de Buttondown para confirmar tu suscripción."}
				</div>

				<form
					className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
					action={BUTTONDOWN_ENDPOINT}
					method="post"
					target="_blank"
					onSubmit={() => setStatus("submitted")}
					rel="noopener"
				>
					<input type="hidden" name="embed" value="1" />
					<label htmlFor="newsletter-email" className="sr-only">
						Correo electrónico
					</label>
					<Input
						id="newsletter-email"
						name="email"
						type="email"
						required
						placeholder="tu@correo.com"
						className="flex-1"
					/>
					<Button type="submit">Unirme</Button>
				</form>

				{status === "submitted" && (
					<p className="text-sm text-primary mt-4">
						Se abrió una pestaña nueva para confirmar tu suscripción — si no la
						ves, revisa si tu navegador bloqueó la ventana emergente.
					</p>
				)}

				<p className="text-sm italic text-muted-foreground mt-6">
					Respetamos tu privacidad. Sin spam, solo herramientas para sanar.
				</p>
			</ScrollReveal>
		</section>
	);
}

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<Newsletter />

			<footer
				className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
				style={{ background: "var(--brand-ink)" }}
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
								style={{ color: "var(--brand-ink-light-on-dark)" }}
							>
								Dra. Claudia Gomez
							</p>
							<p
								className="text-xs mt-1 font-light"
								style={{ color: "var(--brand-ink-light-on-dark)" }}
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
								].map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											className="text-sm font-light transition-opacity duration-500 hover:opacity-60 underline underline-offset-4"
											style={{ color: "var(--brand-ink-light-on-dark)" }}
										>
											{link.label}
										</a>
									</li>
								))}
								{/* Placeholder — privacy policy page not yet available; not interactive */}
								<li>
									<span
										className="text-sm font-light underline underline-offset-4 opacity-40 cursor-not-allowed"
										style={{ color: "var(--brand-ink-light-on-dark)" }}
									>
										Aviso de privacidad
									</span>
								</li>
							</ul>
						</nav>
					</ScrollReveal>

					<ScrollReveal className="mt-8">
						<div
							className="pt-8"
							style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
						>
							<p
								className="text-xs font-light text-center sm:text-left"
								style={{ color: "var(--brand-ink-light-on-dark)" }}
							>
								© {currentYear} Comiendo Prejuicios. Todos los derechos
								reservados.
							</p>
						</div>
					</ScrollReveal>
				</div>
			</footer>
		</>
	);
}
