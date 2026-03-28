import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

/* Delicate botanical line art — stems, leaves, and seed pods */
function BotanicalLeft() {
	return (
		<svg
			viewBox="0 0 220 480"
			fill="none"
			role="presentation"
			aria-hidden
			className="absolute bottom-0 left-0 w-40 sm:w-56 opacity-25 pointer-events-none select-none"
		>
			{/* Main stem */}
			<path
				d="M40 480 C45 400 35 360 50 300 C60 250 40 200 55 140 C65 95 55 50 70 10"
				stroke="var(--brand-sage)"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
			{/* Left branch 1 */}
			<path
				d="M52 310 C30 295 10 270 5 250"
				stroke="var(--brand-sage)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<path
				d="M5 250 C25 248 40 235 45 220"
				stroke="var(--brand-sage)"
				strokeWidth="0.8"
				strokeLinecap="round"
			/>
			{/* Right branch 1 */}
			<path
				d="M52 270 C75 255 90 235 95 210"
				stroke="var(--brand-sage)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<ellipse
				cx="97"
				cy="204"
				rx="12"
				ry="22"
				transform="rotate(-25 97 204)"
				stroke="var(--brand-sage)"
				strokeWidth="0.8"
				fill="var(--brand-sage)"
				fillOpacity="0.08"
			/>
			{/* Left branch 2 */}
			<path
				d="M53 220 C32 200 18 185 8 165"
				stroke="var(--brand-sage)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<ellipse
				cx="5"
				cy="158"
				rx="10"
				ry="20"
				transform="rotate(15 5 158)"
				stroke="var(--brand-sage)"
				strokeWidth="0.8"
				fill="var(--brand-sage)"
				fillOpacity="0.06"
			/>
			{/* Right branch 2 */}
			<path
				d="M54 180 C72 162 88 148 100 128"
				stroke="var(--brand-sage)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<ellipse
				cx="102"
				cy="120"
				rx="11"
				ry="20"
				transform="rotate(-35 102 120)"
				stroke="var(--brand-sage)"
				strokeWidth="0.8"
				fill="var(--brand-sage)"
				fillOpacity="0.07"
			/>
			{/* Seed pod top */}
			<circle
				cx="71"
				cy="8"
				r="8"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="0.8"
				fill="var(--brand-dusty-rose)"
				fillOpacity="0.12"
			/>
			<path
				d="M68 0 C66 -6 70 -12 71 -8 C72 -12 76 -6 74 0"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="0.7"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function BotanicalRight() {
	return (
		<svg
			viewBox="0 0 220 480"
			fill="none"
			role="presentation"
			aria-hidden
			className="absolute top-0 right-0 w-44 sm:w-60 opacity-20 pointer-events-none select-none"
		>
			{/* Main stem */}
			<path
				d="M180 0 C175 80 185 120 170 180 C160 230 178 280 163 340 C150 390 162 440 148 480"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
			{/* Left branch */}
			<path
				d="M172 170 C150 155 130 145 118 128"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<ellipse
				cx="112"
				cy="122"
				rx="12"
				ry="22"
				transform="rotate(20 112 122)"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="0.8"
				fill="var(--brand-dusty-rose)"
				fillOpacity="0.07"
			/>
			{/* Right branch */}
			<path
				d="M168 220 C190 205 205 190 214 170"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<ellipse
				cx="216"
				cy="163"
				rx="10"
				ry="19"
				transform="rotate(-20 216 163)"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="0.8"
				fill="var(--brand-dusty-rose)"
				fillOpacity="0.07"
			/>
			{/* Lower left branch */}
			<path
				d="M162 320 C140 308 122 298 108 282"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="1"
				strokeLinecap="round"
			/>
			<ellipse
				cx="102"
				cy="276"
				rx="11"
				ry="21"
				transform="rotate(15 102 276)"
				stroke="var(--brand-dusty-rose)"
				strokeWidth="0.8"
				fill="var(--brand-dusty-rose)"
				fillOpacity="0.06"
			/>
		</svg>
	);
}

export function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-20"
			aria-label="Introducción"
		>
			{/* CSS gradient mesh background — "Luz de tarde" */}
			<div
				className="absolute inset-0 -z-20"
				style={{
					background: `
						radial-gradient(ellipse 80% 60% at 15% 70%, #C9A09A33 0%, transparent 60%),
						radial-gradient(ellipse 70% 50% at 85% 20%, #7B9E8726 0%, transparent 55%),
						radial-gradient(ellipse 60% 70% at 60% 90%, #EDE8E0 0%, transparent 70%),
						#F7F3EE
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

			{/* Botanical decorations */}
			<BotanicalLeft />
			<BotanicalRight />

			<div className="max-w-3xl mx-auto text-center relative">
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
