import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

const CONTACT_METHODS = [
	{ id: "correo", label: "Correo" },
	{ id: "whatsapp", label: "WhatsApp" },
	{ id: "llamada", label: "Llamada telefónica" },
] as const;

export function Contact() {
	return (
		<section
			id="contacto"
			className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
			style={{ background: "var(--brand-linen)" }}
			aria-labelledby="contact-heading"
		>
			<div className="max-w-xl mx-auto">
				<ScrollReveal className="text-center mb-12">
					<p
						className="text-sm uppercase tracking-[0.2em] mb-4"
						style={{ color: "var(--brand-sage)" }}
					>
						Dar el primer paso
					</p>
					<h2
						id="contact-heading"
						className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4"
					>
						Hablemos
					</h2>
					<p className="text-muted-foreground text-lg font-light leading-relaxed">
						No necesitas tener las palabras perfectas. Solo cuéntame un poco
						sobre lo que estás viviendo y coordinamos una consulta gratuita.
					</p>
				</ScrollReveal>

				<ScrollReveal delay={0.1}>
					<form
						className="space-y-6"
						/* Static form — no action/method */
						onSubmit={(e) => e.preventDefault()}
					>
						{/* Nombre */}
						<div className="space-y-2">
							<label
								htmlFor="contact-name"
								className="block text-sm font-medium"
								style={{ color: "var(--brand-stone)" }}
							>
								Nombre
							</label>
							<input
								id="contact-name"
								name="nombre"
								type="text"
								autoComplete="name"
								required
								placeholder="¿Cómo te llamas?"
								className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm outline-none transition-colors duration-500 placeholder:opacity-40 focus:border-[var(--brand-sage)]"
								style={{
									borderColor: "var(--brand-mist)",
									color: "var(--brand-stone)",
									background: "var(--brand-cream)",
								}}
							/>
						</div>

						{/* Correo */}
						<div className="space-y-2">
							<label
								htmlFor="contact-email"
								className="block text-sm font-medium"
								style={{ color: "var(--brand-stone)" }}
							>
								Correo electrónico
							</label>
							<input
								id="contact-email"
								name="correo"
								type="email"
								autoComplete="email"
								required
								placeholder="tu@correo.com"
								className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm outline-none transition-colors duration-500 placeholder:opacity-40 focus:border-[var(--brand-sage)]"
								style={{
									borderColor: "var(--brand-mist)",
									color: "var(--brand-stone)",
									background: "var(--brand-cream)",
								}}
							/>
						</div>

						{/* Mensaje */}
						<div className="space-y-2">
							<label
								htmlFor="contact-message"
								className="block text-sm font-medium"
								style={{ color: "var(--brand-stone)" }}
							>
								¿Qué te trae por aquí?
							</label>
							<textarea
								id="contact-message"
								name="mensaje"
								rows={4}
								placeholder="Puedes escribir tanto o tan poco como quieras..."
								className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm outline-none resize-none transition-colors duration-500 placeholder:opacity-40 focus:border-[var(--brand-sage)]"
								style={{
									borderColor: "var(--brand-mist)",
									color: "var(--brand-stone)",
									background: "var(--brand-cream)",
								}}
							/>
						</div>

						{/* Método de contacto */}
						<fieldset className="space-y-3">
							<legend
								className="text-sm font-medium"
								style={{ color: "var(--brand-stone)" }}
							>
								Método de contacto preferido
							</legend>
							<div className="flex flex-wrap gap-4">
								{CONTACT_METHODS.map((method) => (
									<label
										key={method.id}
										className="flex items-center gap-2 cursor-pointer text-sm font-light"
										style={{ color: "var(--brand-stone-light)" }}
									>
										<input
											type="radio"
											name="metodo"
											value={method.id}
											className="accent-[var(--brand-sage)]"
										/>
										{method.label}
									</label>
								))}
							</div>
						</fieldset>

						{/* Submit */}
						<motion.button
							type="submit"
							className="w-full py-4 rounded-2xl text-base font-medium text-white transition-colors duration-500"
							style={{ background: "var(--brand-terracotta)" }}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							Enviar mensaje
						</motion.button>

						{/* Crisis note */}
						<p
							className="text-xs font-light text-center leading-relaxed pt-2"
							style={{ color: "var(--brand-stone-light)" }}
						>
							Este formulario no se monitorea las 24 horas. Si estás en crisis,
							por favor comunícate con{" "}
							<strong style={{ color: "var(--brand-stone)" }}>
								SAPTEL: 55 5259-8121
							</strong>{" "}
							(línea de apoyo disponible 24/7).
						</p>
					</form>
				</ScrollReveal>
			</div>
		</section>
	);
}
