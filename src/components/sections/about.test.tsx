import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { About } from "./about";

describe("About", () => {
	it("renders Dra. Claudia Gomez's real identity, not a placeholder name", () => {
		render(<About />);
		expect(
			screen.getByRole("heading", { name: "Dra. Claudia Gomez" }),
		).toBeInTheDocument();
		expect(screen.queryByText(/Ana/)).not.toBeInTheDocument();
	});

	it("renders her credential list", () => {
		render(<About />);
		expect(screen.getByText("Psicóloga clínica")).toBeInTheDocument();
		expect(
			screen.getByText(
				"Especialista en Terapia de Aceptación y Compromiso (ACT)",
			),
		).toBeInTheDocument();
		expect(
			screen.getByText("Sesiones en línea · Ciudad de México"),
		).toBeInTheDocument();
	});

	it("does not render invented credibility stats", () => {
		render(<About />);
		expect(screen.queryByText(/años de experiencia/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/vidas acompañadas/i)).not.toBeInTheDocument();
	});

	it("has the correct section id", () => {
		render(<About />);
		expect(document.getElementById("sobre-mi")).not.toBeNull();
	});

	it("has no axe violations", async () => {
		const { container } = render(<About />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
