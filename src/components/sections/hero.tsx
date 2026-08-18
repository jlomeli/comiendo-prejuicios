import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

/**
 * Hero image placeholder — an illustrated stand-in for the "warm, natural
 * photography (plants/sunlight)" PRD §2 calls for. No photo-generation
 * tooling is available in this environment, so this ships as a tasteful
 * abstract panel (Aura gradient + soft light motif) rather than a faked
 * photo. Swap for real photography — tracked in #15.
 */
function HeroImagePlaceholder() {
	return (
		<div className="relative">
			<div
				className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--brand-shadow-ambient)] rotate-3 relative"
				style={{
					background: `
						radial-gradient(ellipse 90% 70% at 30% 20%, var(--organic-blob-2) 0%, transparent 60%),
						radial-gradient(ellipse 80% 60% at 70% 80%, var(--organic-blob) 0%, transparent 65%),
						var(--brand-surface-low)
					`,
				}}
			>
				{/* Soft light rays through leaves — decorative, evokes sunlight/plants */}
				<svg
					viewBox="0 0 300 375"
					fill="none"
					role="presentation"
					aria-hidden
					className="absolute inset-0 w-full h-full opacity-40"
				>
					<path
						d="M150 -20 L40 200 M150 -20 L110 220 M150 -20 L190 220 M150 -20 L260 200"
						stroke="var(--brand-blush)"
						strokeWidth="1"
					/>
					<path
						d="M20 300 C60 260 90 280 120 250 C150 220 170 260 210 235 C250 210 260 250 300 220"
						stroke="var(--brand-rose)"
						strokeWidth="1.2"
						strokeLinecap="round"
						opacity="0.5"
					/>
					<ellipse
						cx="90"
						cy="270"
						rx="16"
						ry="30"
						transform="rotate(-15 90 270)"
						fill="var(--brand-rose)"
						fillOpacity="0.08"
						stroke="var(--brand-rose)"
						strokeWidth="0.8"
					/>
					<ellipse
						cx="220"
						cy="255"
						rx="14"
						ry="26"
						transform="rotate(20 220 255)"
						fill="var(--brand-gold)"
						fillOpacity="0.1"
						stroke="var(--brand-gold)"
						strokeWidth="0.8"
					/>
				</svg>
			</div>

			{/* Floating "ACT" methodology badge */}
			<div
				className="absolute -bottom-8 -left-8 aspect-square w-36 sm:w-48 rounded-full p-1 shadow-[var(--brand-shadow-ambient)] -rotate-6"
				style={{ background: "var(--brand-aura-gradient)" }}
			>
				<div className="bg-background w-full h-full rounded-full flex flex-col items-center justify-center text-center p-4">
					<span className="font-serif text-2xl sm:text-3xl font-bold italic text-primary">
						ACT
					</span>
					<span className="text-[10px] uppercase tracking-widest text-muted-foreground">
						Metodología
					</span>
				</div>
			</div>
		</div>
	);
}

export function Hero() {
	// Disable JS-driven animations when user prefers reduced motion (WCAG 2.3.3)
	const shouldReduceMotion = useReducedMotion();

	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-20"
			aria-label="Introducción"
		>
			{/* CSS gradient mesh background — "Luz de Atardecer" */}
			<div
				className="absolute inset-0 -z-20"
				style={{
					background: `
						radial-gradient(ellipse 80% 60% at 15% 70%, var(--organic-blob) 0%, transparent 60%),
						radial-gradient(ellipse 70% 50% at 85% 20%, var(--organic-blob-2) 0%, transparent 55%),
						radial-gradient(ellipse 60% 70% at 60% 90%, var(--brand-surface-low) 0%, transparent 70%),
						var(--brand-cream)
					`,
				}}
				aria-hidden
			/>

			{/* Grain texture overlay for depth */}
			<div
				className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
				}}
				aria-hidden
			/>

			<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center relative w-full">
				<div className="md:col-span-7">
					<ScrollReveal delay={0.1}>
						<span
							className="inline-block text-sm font-medium tracking-[0.2em] uppercase mb-4"
							style={{ color: "var(--brand-gold)" }}
						>
							Terapia con alma
						</span>
					</ScrollReveal>

					<ScrollReveal delay={0.2}>
						<h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-foreground leading-[1.1] mb-8 -tracking-[0.02em]">
							Un camino hacia la{" "}
							<em className="not-italic italic font-normal text-primary">
								paz
							</em>{" "}
							contigo misma
						</h1>
					</ScrollReveal>

					<ScrollReveal delay={0.35}>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-light">
							Acompañamiento psicológico desde la Terapia de Aceptación y
							Compromiso (ACT) y la perspectiva de género. Un refugio para sanar
							tu relación con la comida, tu cuerpo y tu propia historia.
						</p>
					</ScrollReveal>

					<ScrollReveal delay={0.5}>
						<div className="flex flex-wrap items-center gap-4 sm:gap-6">
							<motion.a
								href="#contacto"
								className="inline-block px-8 py-4 rounded-lg text-base font-medium text-primary-foreground shadow-[var(--brand-shadow-ambient)] transition-opacity duration-500 hover:opacity-90"
								style={{ background: "var(--brand-aura-gradient)" }}
								whileHover={shouldReduceMotion ? undefined : { y: -2 }}
								whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
							>
								Comienza tu proceso
							</motion.a>
							<a
								href="#enfoque"
								className="inline-flex items-center gap-2 px-4 py-4 rounded-lg font-semibold text-primary transition-colors duration-500 hover:bg-muted"
							>
								Conocer mi enfoque
								<svg
									viewBox="0 0 20 20"
									fill="none"
									role="presentation"
									aria-hidden
									className="w-4 h-4"
								>
									<path
										d="M4 10h12M11 5l5 5-5 5"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</ScrollReveal>
				</div>

				<div className="md:col-span-5">
					<ScrollReveal delay={0.25} direction="left">
						<HeroImagePlaceholder />
					</ScrollReveal>
				</div>
			</div>

			{/* Subtle scroll indicator */}
			<div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
				aria-hidden
			>
				<span className="text-xs tracking-widest uppercase text-muted-foreground">
					seguir
				</span>
				<motion.div
					className="w-px h-8 bg-muted-foreground origin-top"
					animate={shouldReduceMotion ? { scaleY: 1 } : { scaleY: [0, 1, 0] }}
					transition={
						shouldReduceMotion
							? { duration: 0 }
							: {
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}
					}
				/>
			</div>
		</section>
	);
}
