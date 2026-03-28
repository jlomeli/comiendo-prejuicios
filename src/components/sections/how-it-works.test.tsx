import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HowItWorks } from "./how-it-works";

describe("HowItWorks", () => {
	it("renders the section heading", () => {
		render(<HowItWorks />);
		expect(
			screen.getByRole("heading", { name: "Cómo trabajamos juntas" }),
		).toBeInTheDocument();
	});

	it("renders all 4 step numbers", () => {
		render(<HowItWorks />);
		expect(screen.getByText("01")).toBeInTheDocument();
		expect(screen.getByText("02")).toBeInTheDocument();
		expect(screen.getByText("03")).toBeInTheDocument();
		expect(screen.getByText("04")).toBeInTheDocument();
	});

	it("renders all 4 step titles", () => {
		render(<HowItWorks />);
		expect(screen.getByText("Consulta gratuita")).toBeInTheDocument();
		expect(screen.getByText("Evaluación y plan")).toBeInTheDocument();
		expect(screen.getByText("Sesiones de terapia")).toBeInTheDocument();
		expect(screen.getByText("Seguimiento y ajustes")).toBeInTheDocument();
	});

	it("renders exactly 4 steps", () => {
		render(<HowItWorks />);
		const steps = ["01", "02", "03", "04"].map((n) => screen.getByText(n));
		expect(steps).toHaveLength(4);
	});
});
