import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { ActApproach } from "./act-approach";

describe("ActApproach", () => {
	it("renders the core message as the section heading", () => {
		render(<ActApproach />);
		expect(screen.getByText(/No se trata de arreglarte/i)).toBeInTheDocument();
		expect(screen.getByText(/Se trata de tu libertad/i)).toBeInTheDocument();
	});

	it("renders the simplified 3-pillar Hexaflex", () => {
		render(<ActApproach />);
		for (const label of ["Aceptación", "Mindfulness", "Valores"]) {
			expect(screen.getByText(label)).toBeInTheDocument();
		}
		// The full 6-pillar Hexaflex is deliberately simplified for this section.
		expect(screen.queryByText("Defusión")).not.toBeInTheDocument();
		expect(screen.queryByText("Acción comprometida")).not.toBeInTheDocument();
	});

	it("has the correct section id", () => {
		render(<ActApproach />);
		expect(document.getElementById("enfoque")).not.toBeNull();
	});

	it("has no axe violations", async () => {
		const { container } = render(<ActApproach />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
