import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Problem } from "./problem";

describe("Problem", () => {
	it("renders the section heading", () => {
		render(<Problem />);
		expect(
			screen.getByRole("heading", { name: "¿Te sientes identificada?" }),
		).toBeInTheDocument();
	});

	it("renders all 4 card titles", () => {
		render(<Problem />);
		expect(
			screen.getByText(
				"Sientes que la comida es tu única forma de gestionar lo que sientes",
			),
		).toBeInTheDocument();
		expect(
			screen.getByText("Tu cuerpo se siente como un lugar extraño u hostil"),
		).toBeInTheDocument();
		expect(
			screen.getByText("La autocrítica es la voz que más escuchas a diario"),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				'Crees que "cuando adelgaces" empezará tu vida de verdad',
			),
		).toBeInTheDocument();
	});

	it("renders the supporting tags on the first card", () => {
		render(<Problem />);
		expect(screen.getByText("Ansiedad")).toBeInTheDocument();
		expect(screen.getByText("Comida emocional")).toBeInTheDocument();
	});

	it("renders the section intro copy", () => {
		render(<Problem />);
		expect(
			screen.getByText(
				"Quizás este sea el momento de parar y mirarte con otros ojos. Es probable que...",
			),
		).toBeInTheDocument();
	});

	it("has no axe violations", async () => {
		const { container } = render(<Problem />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
