import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Solution } from "./solution";

describe("Solution", () => {
	it("renders the section heading", () => {
		render(<Solution />);
		expect(
			screen.getByRole("heading", { name: "Crecimiento con compasión" }),
		).toBeInTheDocument();
	});

	it("renders all 3 benefit titles", () => {
		render(<Solution />);
		expect(
			screen.getByText("Una relación más sana con la comida"),
		).toBeInTheDocument();
		expect(
			screen.getByText("Procesar trauma con seguridad"),
		).toBeInTheDocument();
		expect(
			screen.getByText("Un espacio neurodivergente-friendly"),
		).toBeInTheDocument();
	});

	it("renders all 3 benefit descriptions", () => {
		render(<Solution />);
		expect(
			screen.getByText(/metodologías basadas en evidencia/),
		).toBeInTheDocument();
		expect(screen.getByText(/historia es escuchada/)).toBeInTheDocument();
		expect(
			screen.getByText(/respeto por tu forma de pensar/),
		).toBeInTheDocument();
	});

	it("renders 3 benefit card images", () => {
		render(<Solution />);
		// Images with alt="" are decorative and excluded from RTL role queries; query DOM directly
		const imgs = document.querySelectorAll("img");
		expect(imgs.length).toBeGreaterThanOrEqual(3);
	});
});
