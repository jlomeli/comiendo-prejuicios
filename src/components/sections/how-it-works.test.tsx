import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { HowItWorks } from "./how-it-works";

describe("HowItWorks", () => {
	it("renders the section heading", () => {
		render(<HowItWorks />);
		expect(
			screen.getByRole("heading", { name: "Nuestro proceso" }),
		).toBeInTheDocument();
	});

	it("renders exactly 3 steps — not 4", () => {
		render(<HowItWorks />);
		expect(screen.getByText("01")).toBeInTheDocument();
		expect(screen.getByText("02")).toBeInTheDocument();
		expect(screen.getByText("03")).toBeInTheDocument();
		expect(screen.queryByText("04")).not.toBeInTheDocument();
	});

	it("renders all 3 step titles", () => {
		render(<HowItWorks />);
		expect(screen.getByText("Sesión de valoración")).toBeInTheDocument();
		expect(screen.getByText("Evaluación y Mapa")).toBeInTheDocument();
		expect(screen.getByText("Sesiones de camino")).toBeInTheDocument();
	});

	it("has the correct section id", () => {
		render(<HowItWorks />);
		expect(document.getElementById("que-esperar")).not.toBeNull();
	});

	it("renders a real photo with alt text for each step", () => {
		render(<HowItWorks />);
		const images = screen.getAllByRole("img");
		expect(images).toHaveLength(3);
		for (const img of images) {
			expect(img.getAttribute("alt")).toBeTruthy();
			expect(img.getAttribute("src")).not.toBe("");
		}
	});

	it("has no axe violations", async () => {
		const { container } = render(<HowItWorks />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
