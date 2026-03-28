import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ActApproach } from "./act-approach";

describe("ActApproach", () => {
	it("renders the section heading", () => {
		render(<ActApproach />);
		expect(
			screen.getByRole("heading", { name: "El Enfoque ACT" }),
		).toBeInTheDocument();
	});

	it("renders all 6 ACT pillar labels", () => {
		render(<ActApproach />);
		// Use getAllByText since "Aceptación" also appears in the intro paragraph
		for (const label of [
			"Aceptación",
			"Defusión",
			"Momento presente",
			"Yo como contexto",
			"Valores",
			"Acción comprometida",
		]) {
			expect(screen.getAllByText(new RegExp(label)).length).toBeGreaterThan(0);
		}
	});

	it("renders the closing quote", () => {
		render(<ActApproach />);
		expect(screen.getByText(/No se trata de arreglarte/i)).toBeInTheDocument();
		expect(screen.getByText(/Se trata de libertad/i)).toBeInTheDocument();
	});

	it("has the correct section id", () => {
		render(<ActApproach />);
		expect(document.getElementById("enfoque")).not.toBeNull();
	});
});
