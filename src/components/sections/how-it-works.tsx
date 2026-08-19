import step1PhotoRaw from "@/assets/images/process-step-1-valoracion.jpg";
import step2PhotoRaw from "@/assets/images/process-step-2-mapa.jpg";
import step3PhotoRaw from "@/assets/images/process-step-3-camino.jpg";
import { ScrollReveal } from "@/components/scroll-reveal";

/** Shape shared with astro:assets' getImage() output — index.astro passes
 * optimized (resized, webp) versions; these raw imports are the fallback
 * used when the component is rendered without that (e.g. in tests). */
type OptimizedImage = { src: string; width: number; height: number };

const STEPS = [
	{
		step: "01",
		title: "Sesión de valoración",
		description:
			"Un primer encuentro de 20 minutos gratuito para conocernos, que me cuentes qué necesitas y ver si mi forma de trabajar resuena contigo.",
		photoRaw: step1PhotoRaw,
		alt: "Una persona toma notas a mano junto a una taza de café",
	},
	{
		step: "02",
		title: "Evaluación y Mapa",
		description:
			"No hay dos procesos iguales. Dedicaremos las primeras sesiones a entender tu historia y trazar un mapa de hacia dónde queremos caminar juntas.",
		photoRaw: step2PhotoRaw,
		alt: "Notas adhesivas de colores organizadas sobre un tablero, como un mapa de ideas",
	},
	{
		step: "03",
		title: "Sesiones de camino",
		description:
			"Trabajo semanal o quincenal. Sesiones de 50 minutos donde usamos herramientas de ACT para ganar flexibilidad psicológica y bienestar real.",
		photoRaw: step3PhotoRaw,
		alt: "Un camino sinuoso atraviesa colinas doradas hacia el horizonte",
	},
] as const;

function StepVisual({ photo, alt }: { photo: OptimizedImage; alt: string }) {
	return (
		<div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[var(--brand-shadow-ambient)]">
			<img
				src={photo.src}
				width={photo.width}
				height={photo.height}
				alt={alt}
				loading="lazy"
				decoding="async"
				className="w-full h-full object-cover"
			/>
		</div>
	);
}

export function HowItWorks({
	photos,
}: {
	/** Optimized images in step order (01, 02, 03). Falls back to the raw,
	 * unoptimized imports when omitted. */
	photos?: OptimizedImage[];
}) {
	return (
		<section
			id="que-esperar"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-surface)" }}
			aria-labelledby="how-heading"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal className="mb-16 sm:mb-20">
					<h2
						id="how-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						Nuestro proceso
					</h2>
					<div
						className="w-24 h-1 rounded-full mb-6"
						style={{ background: "var(--brand-aura-gradient)" }}
						aria-hidden
					/>
					<p className="text-muted-foreground text-lg max-w-xl font-light leading-relaxed">
						Nada está grabado en piedra. Esto es solo una guía — tu proceso será
						único y lo iremos construyendo juntas.
					</p>
				</ScrollReveal>

				<div className="space-y-16 sm:space-y-24">
					{STEPS.map((item, i) => (
						<ScrollReveal key={item.step} delay={i * 0.1}>
							<div
								className={`flex flex-col md:items-center gap-8 md:gap-12 ${
									i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
								}`}
							>
								<div className="w-full md:w-1/2">
									<div
										className="font-serif text-7xl sm:text-8xl font-light select-none leading-none -mb-6 sm:-mb-8"
										style={{ color: "var(--brand-surface-lowest)" }}
										aria-hidden
									>
										{item.step}
									</div>
									<h3 className="font-serif text-2xl font-normal text-foreground mb-3 relative">
										{item.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed font-light">
										{item.description}
									</p>
								</div>
								<div className="w-full md:w-1/2">
									<StepVisual
										photo={photos?.[i] ?? item.photoRaw}
										alt={item.alt}
									/>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
