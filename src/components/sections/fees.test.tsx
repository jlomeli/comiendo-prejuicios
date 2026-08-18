import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Fees } from "./fees";

describe("Fees", () => {
	it("renders the section heading", () => {
		render(<Fees />);
		expect(
			screen.getByRole("heading", { name: "Honorarios" }),
		).toBeInTheDocument();
	});

	it("renders the real MXN fee range, not the mockup's EUR pricing", () => {
		render(<Fees />);
		expect(screen.getByText("$800–$1,200")).toBeInTheDocument();
		expect(screen.getByText("MXN / sesión")).toBeInTheDocument();
		expect(screen.queryByText(/€/)).not.toBeInTheDocument();
	});

	it("renders the 4-session bundle", () => {
		render(<Fees />);
		expect(screen.getByText("Bono 4 Sesiones")).toBeInTheDocument();
		expect(screen.getByText("por el precio de 3.5")).toBeInTheDocument();
	});

	it("does not render the discontinued sliding scale or superbill", () => {
		render(<Fees />);
		expect(screen.queryByText("Escala móvil")).not.toBeInTheDocument();
		expect(screen.queryByText(/superbill/i)).not.toBeInTheDocument();
	});

	it("renders the online-only modality", () => {
		render(<Fees />);
		expect(screen.getAllByText("En línea").length).toBeGreaterThan(0);
	});

	it("has the correct section id", () => {
		render(<Fees />);
		expect(document.getElementById("honorarios")).not.toBeNull();
	});

	it("has no axe violations", async () => {
		const { container } = render(<Fees />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
