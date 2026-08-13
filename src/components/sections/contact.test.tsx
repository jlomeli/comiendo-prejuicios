import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Contact } from "./contact";

describe("Contact", () => {
	it("renders the section heading", () => {
		render(<Contact />);
		expect(
			screen.getByRole("heading", { name: "Hablemos" }),
		).toBeInTheDocument();
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
});
