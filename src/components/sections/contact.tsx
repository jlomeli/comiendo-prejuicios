import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const CONTACT_METHODS = [
	{ id: "correo", label: "Correo" },
	{ id: "whatsapp", label: "WhatsApp" },
	{ id: "llamada", label: "Llamada telefónica" },
] as const;

type FormErrors = {
	nombre?: string;
	correo?: string;
};

type FormStatus = "idle" | "submitting" | "success";

/** Validates required fields using the HTML5 Constraint Validation API. */
function validateForm(form: HTMLFormElement): FormErrors {
	const errors: FormErrors = {};
	const nombre = form.elements.namedItem("nombre") as HTMLInputElement;
	const correo = form.elements.namedItem("correo") as HTMLInputElement;

	if (!nombre.validity.valid) {
		errors.nombre = nombre.validity.valueMissing
			? "Por favor, escribe tu nombre."
			: nombre.validationMessage;
	}
	if (!correo.validity.valid) {
		errors.correo = correo.validity.valueMissing
			? "Por favor, ingresa tu correo electrónico."
			: correo.validity.typeMismatch
				? "El correo no parece válido. Ejemplo: tu@correo.com"
				: correo.validationMessage;
	}
	return errors;
}

const inputClass =
	"w-full px-4 py-3 rounded-2xl border bg-transparent text-sm transition-colors duration-500 placeholder:opacity-40 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--brand-sage)] focus-visible:outline-offset-0 focus-visible:border-[var(--brand-sage)]";

export function Contact() {
	const [errors, setErrors] = useState<FormErrors>({});
	const [status, setStatus] = useState<FormStatus>("idle");
	// Disable JS-driven animations when user prefers reduced motion (WCAG 2.3.3)
	const shouldReduceMotion = useReducedMotion();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const newErrors = validateForm(form);
		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) return;
		setStatus("submitting");
		// Static form — simulate success after brief delay
		setTimeout(() => setStatus("success"), 600);
	};

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

				{/* Screen-reader-only live region announces form submission status */}
				<div aria-live="polite" aria-atomic="true" className="sr-only">
					{status === "success" &&
						"Tu mensaje fue enviado. Te responderé pronto."}
				</div>

				<ScrollReveal delay={0.1}>
					<form className="space-y-6" noValidate onSubmit={handleSubmit}>
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
								aria-invalid={errors.nombre ? "true" : undefined}
								aria-describedby={
									errors.nombre ? "contact-name-error" : undefined
								}
								className={inputClass}
								style={{
									borderColor: errors.nombre
										? "var(--destructive)"
										: "var(--brand-mist)",
									color: "var(--brand-stone)",
									background: "var(--brand-cream)",
								}}
							/>
							{errors.nombre && (
								<p
									id="contact-name-error"
									role="alert"
									className="text-xs mt-1"
									style={{ color: "var(--destructive)" }}
								>
									{errors.nombre}
								</p>
							)}
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
								aria-invalid={errors.correo ? "true" : undefined}
								aria-describedby={
									errors.correo ? "contact-email-error" : undefined
								}
								className={inputClass}
								style={{
									borderColor: errors.correo
										? "var(--destructive)"
										: "var(--brand-mist)",
									color: "var(--brand-stone)",
									background: "var(--brand-cream)",
								}}
							/>
							{errors.correo && (
								<p
									id="contact-email-error"
									role="alert"
									className="text-xs mt-1"
									style={{ color: "var(--destructive)" }}
								>
									{errors.correo}
								</p>
							)}
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
								className={`${inputClass} resize-none`}
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
							disabled={status === "submitting" || status === "success"}
							className="w-full py-4 rounded-2xl text-base font-medium text-white transition-colors duration-500 disabled:opacity-70"
							style={{ background: "var(--brand-terracotta)" }}
							whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
							whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							{status === "submitting"
								? "Enviando…"
								: status === "success"
									? "¡Mensaje enviado!"
									: "Enviar mensaje"}
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
