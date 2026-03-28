import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { images } from "@/lib/images";

export function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-20"
			aria-label="Introducción"
		>
			{/* Background image */}
			<div className="absolute inset-0 -z-20" aria-hidden>
				<img
					src={images.heroBg}
					alt=""
					className="w-full h-full object-cover"
					width={1920}
					height={1080}
					fetchPriority="high"
				/>
				{/* Warm amber overlay — "Luz de tarde" */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(160deg, rgba(247,243,238,0.88) 0%, rgba(237,232,224,0.80) 50%, rgba(201,160,154,0.30) 100%)",
					}}
					aria-hidden
				/>
			</div>

			{/* Organic ambient blobs */}
			<div className="absolute inset-0 -z-10 opacity-50" aria-hidden>
				<div
					className="absolute top-1/3 -left-40 w-[560px] h-[560px] rounded-full blur-3xl"
					style={{ background: "var(--organic-blob)" }}
				/>
				<div
					className="absolute bottom-1/4 -right-40 w-[440px] h-[440px] rounded-full blur-3xl"
					style={{ background: "var(--organic-blob-2)" }}
				/>
			</div>

			<div className="max-w-3xl mx-auto text-center">
				<ScrollReveal delay={0.1}>
					<p
						className="text-sm sm:text-base uppercase tracking-[0.2em] mb-6"
						style={{ color: "var(--brand-sage)" }}
					>
						Dra. Claudia Gomez · Psicóloga · Terapeuta ACT
					</p>
				</ScrollReveal>

				<ScrollReveal delay={0.2}>
					<h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-foreground leading-[1.08] tracking-tight mb-8">
						¿Cansada de{" "}
						<em
							className="not-italic font-normal"
							style={{ color: "var(--brand-terracotta)" }}
						>
							luchar
						</em>{" "}
						contra ti misma?
					</h1>
				</ScrollReveal>

				<ScrollReveal delay={0.35}>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
						El ACT es una forma distinta de relacionarte con tus pensamientos y
						emociones — no para silenciarlos, sino para que dejen de
						controlarte.
					</p>
				</ScrollReveal>

				<ScrollReveal delay={0.5}>
					<motion.a
						href="#contacto"
						className="inline-block px-10 py-4 rounded-2xl text-base font-medium text-white transition-colors duration-500"
						style={{ background: "var(--brand-terracotta)" }}
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
					>
						Hablemos
					</motion.a>
				</ScrollReveal>
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
					animate={{ scaleY: [0, 1, 0] }}
					transition={{
						duration: 2,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			</div>
		</section>
	);
}
