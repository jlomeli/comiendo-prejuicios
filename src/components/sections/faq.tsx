"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const FAQ_ITEMS = [
	{
		id: "lista",
		question: "¿Qué pasa si no estoy lista?",
		answer:
			"No tienes que estar lista. La mayoría de las personas que empiezan terapia llegan con dudas, miedo o sin saber bien qué necesitan. Eso es completamente válido. El primer paso es simplemente dar el primer paso — yo te acompaño desde ahí.",
	},
	{
		id: "pasado",
		question: "¿Tengo que hablar de mi pasado?",
		answer:
			"No es obligatorio. En el ACT no excavamos el pasado para buscar culpables — trabajamos con lo que está presente en tu vida hoy. Si algo del pasado aparece y es relevante, lo abordamos con cuidado y a tu ritmo.",
	},
	{
		id: "act",
		question: "¿Cómo sé si el ACT es para mí?",
		answer:
			"El ACT funciona bien para personas que sienten que su mente las controla más de lo que quisieran, que luchan contra sus propios pensamientos o emociones, o que saben lo que quieren pero no logran vivir conforme a eso. En la consulta gratuita podemos explorar juntas si este enfoque encaja con lo que buscas.",
	},
	{
		id: "frecuencia",
		question: "¿Con qué frecuencia son las sesiones?",
		answer:
			"Lo más común es empezar con sesiones semanales para tener continuidad y ritmo. Con el tiempo, muchas personas pasan a sesiones quincenales. El ritmo siempre se ajusta a tu vida, tus posibilidades y cómo vas avanzando.",
	},
	{
		id: "linea",
		question: "¿Puedo hacer terapia en línea?",
		answer:
			"Sí, todas las sesiones son por videollamada. Esto te permite estar en el lugar donde te sientas más cómoda y facilita los horarios. He visto que muchas personas se abren más desde la comodidad de su propio espacio.",
	},
	{
		id: "confidencial",
		question: "¿Qué tan confidencial es la terapia?",
		answer:
			"Todo lo que compartes en sesión es estrictamente confidencial. Solo existen excepciones muy limitadas obligadas por ley (riesgo inminente para tu vida o la de otros), y te las explicaré claramente desde el principio. Tu privacidad es una prioridad.",
	},
] as const;

function FaqItem({ question, answer }: { question: string; answer: string }) {
	const [open, setOpen] = useState(false);

	return (
		<div
			className="border-b last:border-b-0"
			style={{ borderColor: "var(--brand-mist)" }}
		>
			<button
				type="button"
				className="w-full flex items-center justify-between py-5 text-left gap-4 transition-colors duration-500 hover:opacity-70"
				aria-expanded={open}
				onClick={() => setOpen((prev) => !prev)}
			>
				<span
					className="font-serif text-lg font-normal"
					style={{ color: "var(--brand-stone)" }}
				>
					{question}
				</span>
				<span
					className="shrink-0 text-xl leading-none transition-transform duration-500"
					style={{
						color: "var(--brand-dusty-rose)",
						transform: open ? "rotate(45deg)" : "rotate(0deg)",
					}}
					aria-hidden
				>
					+
				</span>
			</button>

			{/* CSS max-height accordion — no JS animation library needed */}
			<div
				className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				style={{ maxHeight: open ? "400px" : "0px" }}
			>
				<p
					className="pb-5 text-sm font-light leading-relaxed"
					style={{ color: "var(--brand-stone-light)" }}
				>
					{answer}
				</p>
			</div>
		</div>
	);
}

export function Faq() {
	return (
		<section
			id="preguntas"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			aria-labelledby="faq-heading"
		>
			<div className="max-w-2xl mx-auto">
				<ScrollReveal className="text-center mb-14">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						Resolvemos dudas
					</p>
					<h2
						id="faq-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground"
					>
						Preguntas frecuentes
					</h2>
				</ScrollReveal>

				<ScrollReveal delay={0.1}>
					<div
						className="rounded-3xl border px-6 sm:px-8"
						style={{
							borderColor: "var(--brand-mist)",
							background: "var(--brand-linen)",
						}}
					>
						{FAQ_ITEMS.map((item) => (
							<FaqItem
								key={item.id}
								question={item.question}
								answer={item.answer}
							/>
						))}
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
