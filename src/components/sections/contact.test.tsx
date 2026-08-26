import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Contact } from "./contact";

/** Fills in the two required fields and submits, leaving the rest default. */
async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>) {
	await user.type(screen.getByLabelText("Nombre"), "Lectora");
	await user.type(
		screen.getByLabelText("Correo electrónico"),
		"lectora@correo.com",
	);
	await user.click(screen.getByRole("button", { name: "Enviar mensaje" }));
}

describe("Contact", () => {
	it("renders the section heading", () => {
		render(<Contact />);
		expect(
			screen.getByRole("heading", {
				name: "Da el primer paso hacia tu calma",
			}),
		).toBeInTheDocument();
	});

	it("renders real contact info, not the mockup's Madrid/EUR placeholders", () => {
		render(<Contact />);
		expect(
			screen.getByRole("link", { name: "claudia@comiendoprejuicios.com" }),
		).toHaveAttribute("href", "mailto:claudia@comiendoprejuicios.com");
		expect(
			screen.getByRole("link", { name: "+52 33 1853 0646" }),
		).toHaveAttribute("href", "tel:+523318530646");
		expect(
			screen.getByText("Ciudad de México · Sesiones en línea"),
		).toBeInTheDocument();
		expect(screen.queryByText(/Madrid/)).not.toBeInTheDocument();
	});

	it("renders the name field", () => {
		render(<Contact />);
		expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
	});

	it("renders the email field", () => {
		render(<Contact />);
		expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument();
	});

	it("renders the message textarea", () => {
		render(<Contact />);
		expect(screen.getByLabelText("¿Qué te trae por aquí?")).toBeInTheDocument();
	});

	it("renders all 3 contact method radio options", () => {
		render(<Contact />);
		expect(screen.getByLabelText("Correo")).toBeInTheDocument();
		expect(screen.getByLabelText("WhatsApp")).toBeInTheDocument();
		expect(screen.getByLabelText("Llamada telefónica")).toBeInTheDocument();
	});

	it("renders the crisis line note", () => {
		render(<Contact />);
		expect(screen.getByText(/SAPTEL/)).toBeInTheDocument();
		expect(screen.getByText(/55 5259-8121/)).toBeInTheDocument();
	});

	it("renders the submit button", () => {
		render(<Contact />);
		expect(
			screen.getByRole("button", { name: "Enviar mensaje" }),
		).toBeInTheDocument();
	});

	it("has the correct section id", () => {
		render(<Contact />);
		expect(document.getElementById("contacto")).not.toBeNull();
	});

	it("shows name error when submitting empty form", async () => {
		render(<Contact />);
		await userEvent.click(
			screen.getByRole("button", { name: "Enviar mensaje" }),
		);
		expect(
			await screen.findByText("Por favor, escribe tu nombre."),
		).toBeInTheDocument();
	});

	it("marks name input as aria-invalid after failed submit", async () => {
		render(<Contact />);
		await userEvent.click(
			screen.getByRole("button", { name: "Enviar mensaje" }),
		);
		await screen.findByText("Por favor, escribe tu nombre.");
		expect(screen.getByLabelText("Nombre")).toHaveAttribute(
			"aria-invalid",
			"true",
		);
	});

	it("has no axe violations", async () => {
		const { container } = render(<Contact />);
		expect(await axe(container)).toHaveNoViolations();
	});

	describe("submission", () => {
		afterEach(() => {
			vi.unstubAllGlobals();
		});

		it("posts to Formspree and shows a success message", async () => {
			const fetchMock = vi.fn().mockResolvedValue({ ok: true });
			vi.stubGlobal("fetch", fetchMock);
			const user = userEvent.setup();

			render(<Contact />);
			await fillAndSubmit(user);

			expect(
				await screen.findByRole("button", { name: "¡Mensaje enviado!" }),
			).toBeInTheDocument();
			expect(fetchMock).toHaveBeenCalledWith(
				"https://formspree.io/f/mjybzkna",
				expect.objectContaining({
					method: "POST",
					headers: { Accept: "application/json" },
				}),
			);
			const sentBody = fetchMock.mock.calls[0][1].body as FormData;
			expect(sentBody.get("nombre")).toBe("Lectora");
			expect(sentBody.get("correo")).toBe("lectora@correo.com");
		});

		it("shows an error message and a fallback email when the request fails", async () => {
			vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
			const user = userEvent.setup();

			render(<Contact />);
			await fillAndSubmit(user);

			const alert = await screen.findByText(/No se pudo enviar tu mensaje/, {
				selector: "p[role='alert']",
			});
			expect(alert).toBeInTheDocument();
			expect(
				within(alert).getByRole("link", {
					name: "claudia@comiendoprejuicios.com",
				}),
			).toHaveAttribute("href", "mailto:claudia@comiendoprejuicios.com");
			// Button re-enables so the visitor can retry.
			expect(
				screen.getByRole("button", { name: "Enviar mensaje" }),
			).not.toBeDisabled();
		});

		it("shows an error message on a network failure", async () => {
			vi.stubGlobal(
				"fetch",
				vi.fn().mockRejectedValue(new Error("network down")),
			);
			const user = userEvent.setup();

			render(<Contact />);
			await fillAndSubmit(user);

			expect(
				await screen.findByText(/No se pudo enviar tu mensaje/, {
					selector: "p[role='alert']",
				}),
			).toBeInTheDocument();
		});
	});
});
