import { render, screen } from "@testing-library/react";
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
});
