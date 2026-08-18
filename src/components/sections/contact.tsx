import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_METHODS = [
	{ id: "correo", label: "Correo" },
	{ id: "whatsapp", label: "WhatsApp" },
	{ id: "llamada", label: "Llamada telefónica" },
] as const;

const CONTACT_INFO = [
	{
		id: "email",
		value: "claudia@comiendoprejuicios.com",
		href: "mailto:claudia@comiendoprejuicios.com",
		icon: (
			<path
				d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z M4 8l8 6 8-6"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		id: "phone",
		value: "+52 33 1853 0646",
		href: "tel:+523318530646",
		icon: (
			<path
				d="M6 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 2-2Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		),
	},
	{
		id: "location",
		value: "Ciudad de México · Sesiones en línea",
		href: undefined,
		icon: (
			<>
				<path
					d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinejoin="round"
				/>
				<circle
					cx="12"
					cy="9"
					r="2.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</>
		),
	},
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
			style={{ background: "var(--brand-surface)" }}
			aria-labelledby="contact-heading"
		>
			<div className="max-w-5xl mx-auto">
				<ScrollReveal>
					<div
						className="grid md:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-[var(--brand-shadow-ambient)]"
						style={{ background: "var(--brand-surface-lowest)" }}
					>
						{/* Info panel */}
						<div
							className="p-10 sm:p-14"
							style={{
								background: "var(--brand-aura-gradient)",
								color: "#FFFFFF",
							}}
						>
							<h2
								id="contact-heading"
								className="font-serif text-3xl sm:text-4xl font-light leading-tight mb-6"
							>
								Da el primer paso hacia tu calma
							</h2>
							<p
								className="mb-10 leading-relaxed"
								style={{ color: "rgba(255,255,255,0.93)" }}
							>
								Escríbeme sin compromiso. Estaré encantada de escucharte y
								resolver tus dudas.
							</p>

							<ul className="space-y-5">
								{CONTACT_INFO.map((item) => (
									<li key={item.id} className="flex items-center gap-4">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											role="presentation"
											aria-hidden
											className="w-5 h-5 shrink-0"
										>
											{item.icon}
										</svg>
										{item.href ? (
											<a
												href={item.href}
												className="hover:underline underline-offset-4"
											>
												{item.value}
											</a>
										) : (
											<span>{item.value}</span>
										)}
									</li>
								))}
							</ul>

							<a
								href="https://instagram.com/comiendoprejuicios"
								target="_blank"
								rel="noreferrer"
								className="mt-10 inline-flex w-10 h-10 rounded-full items-center justify-center transition-colors duration-500"
								style={{ background: "rgba(255,255,255,0.15)" }}
							>
								<span className="sr-only">
									Comiendo Prejuicios en Instagram
								</span>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									role="presentation"
									aria-hidden
									className="w-5 h-5"
								>
									<rect
										x="3"
										y="3"
										width="18"
										height="18"
										rx="5"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<circle
										cx="12"
										cy="12"
										r="4"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
								</svg>
							</a>
						</div>

						{/* Form panel */}
						<div className="p-10 sm:p-14">
							<p className="text-muted-foreground mb-8 leading-relaxed">
								No necesitas tener las palabras perfectas. Solo cuéntame un poco
								sobre lo que estás viviendo y coordinamos una consulta gratuita.
							</p>

							{/* Screen-reader-only live region announces form submission status */}
							<div aria-live="polite" aria-atomic="true" className="sr-only">
								{status === "success" &&
									"Tu mensaje fue enviado. Te responderé pronto."}
							</div>

							<form className="space-y-6" noValidate onSubmit={handleSubmit}>
								{/* Nombre */}
								<div className="space-y-2">
									<Label htmlFor="contact-name">Nombre</Label>
									<Input
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
									/>
									{errors.nombre && (
										<p
											id="contact-name-error"
											role="alert"
											className="text-xs mt-1 text-destructive"
										>
											{errors.nombre}
										</p>
									)}
								</div>

								{/* Correo */}
								<div className="space-y-2">
									<Label htmlFor="contact-email">Correo electrónico</Label>
									<Input
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
									/>
									{errors.correo && (
										<p
											id="contact-email-error"
											role="alert"
											className="text-xs mt-1 text-destructive"
										>
											{errors.correo}
										</p>
									)}
								</div>

								{/* Mensaje */}
								<div className="space-y-2">
									<Label htmlFor="contact-message">
										¿Qué te trae por aquí?
									</Label>
									<Textarea
										id="contact-message"
										name="mensaje"
										rows={4}
										placeholder="Puedes escribir tanto o tan poco como quieras..."
									/>
								</div>

								{/* Método de contacto */}
								<fieldset className="space-y-3">
									<legend className="text-sm font-medium text-foreground">
										Método de contacto preferido
									</legend>
									<div className="flex flex-wrap gap-4">
										{CONTACT_METHODS.map((method) => (
											<label
												key={method.id}
												className="flex items-center gap-2 cursor-pointer text-sm font-light text-muted-foreground"
											>
												<input
													type="radio"
													name="metodo"
													value={method.id}
													className="accent-[var(--brand-gold)]"
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
									className="w-full py-4 rounded-lg text-base font-medium text-primary-foreground shadow-[var(--brand-shadow-ambient)] transition-opacity duration-500 hover:opacity-90 disabled:opacity-70"
									style={{ background: "var(--brand-aura-gradient)" }}
									whileHover={shouldReduceMotion ? undefined : { y: -2 }}
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
								<p className="text-xs font-light text-center leading-relaxed pt-2 text-muted-foreground">
									Este formulario no se monitorea las 24 horas. Si estás en
									crisis, por favor comunícate con{" "}
									<strong className="text-foreground">
										SAPTEL: 55 5259-8121
									</strong>{" "}
									(línea de apoyo disponible 24/7).
								</p>
							</form>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
