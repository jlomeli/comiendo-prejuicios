import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Problem } from "./problem";

describe("Problem", () => {
	it("renders the section heading", () => {
		render(<Problem />);
		expect(
			screen.getByRole("heading", { name: "Quizás estás aquí si..." }),
		).toBeInTheDocument();
	});

	it("renders all 3 card titles", () => {
		render(<Problem />);
		expect(screen.getByText("Alimentación & Cuerpo")).toBeInTheDocument();
		expect(screen.getByText("Trauma & Pasado")).toBeInTheDocument();
		expect(
			screen.getByText("Neurodivergencia & Vida Diaria"),
		).toBeInTheDocument();
	});

	it("renders exactly 3 cards", () => {
		render(<Problem />);
		expect(screen.getByText("Alimentación & Cuerpo")).toBeInTheDocument();
		expect(screen.getByText("Trauma & Pasado")).toBeInTheDocument();
		expect(
			screen.getByText("Neurodivergencia & Vida Diaria"),
		).toBeInTheDocument();
	});

	it("renders the section label", () => {
		render(<Problem />);
		expect(screen.getByText("Para quién es este espacio")).toBeInTheDocument();
	});
});
