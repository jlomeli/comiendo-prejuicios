import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Faq } from "./faq";

describe("Faq", () => {
	it("renders the section heading", () => {
		render(<Faq />);
		expect(
			screen.getByRole("heading", { name: "Preguntas frecuentes" }),
		).toBeInTheDocument();
	});

	it("renders all 6 question texts", () => {
		render(<Faq />);
		for (const question of [
			"¿Qué pasa si no estoy lista?",
			"¿Tengo que hablar de mi pasado?",
			"¿Cómo sé si el ACT es para mí?",
			"¿Con qué frecuencia son las sesiones?",
			"¿Puedo hacer terapia en línea?",
			"¿Qué tan confidencial es la terapia?",
		]) {
			expect(screen.getByText(question)).toBeInTheDocument();
		}
	});

	it("answer is hidden by default (max-height 0)", () => {
		render(<Faq />);
		const firstButton = screen.getAllByRole("button")[0];
		expect(firstButton).toHaveAttribute("aria-expanded", "false");
	});

	it("clicking a question expands it", async () => {
		render(<Faq />);
		const button = screen.getAllByRole("button")[0];
		await userEvent.click(button);
		expect(button).toHaveAttribute("aria-expanded", "true");
	});

	it("clicking an expanded question collapses it", async () => {
		render(<Faq />);
		const button = screen.getAllByRole("button")[0];
		await userEvent.click(button);
		await userEvent.click(button);
		expect(button).toHaveAttribute("aria-expanded", "false");
	});

	it("has the correct section id", () => {
		render(<Faq />);
		expect(document.getElementById("preguntas")).not.toBeNull();
	});

	it("each button has aria-controls pointing to its answer panel", () => {
		render(<Faq />);
		const buttons = screen.getAllByRole("button");
		for (const button of buttons) {
			const panelId = button.getAttribute("aria-controls");
			expect(panelId).toBeTruthy();
			expect(document.getElementById(panelId as string)).not.toBeNull();
		}
	});

	it("has no axe violations", async () => {
		const { container } = render(<Faq />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
