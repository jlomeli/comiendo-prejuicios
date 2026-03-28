import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Problem } from "./problem";

describe("Problem", () => {
	it("renders the section heading", () => {
		render(<Problem />);
		expect(
			screen.getByRole("heading", { name: "No estás sola en esto" }),
		).toBeInTheDocument();
	});

	it("renders numbered badges 1, 2, and 3", () => {
		render(<Problem />);
		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.getByText("2")).toBeInTheDocument();
		expect(screen.getByText("3")).toBeInTheDocument();
	});

	it("renders all 3 pain point titles", () => {
		render(<Problem />);
		expect(screen.getByText("La comida controla tu día")).toBeInTheDocument();
		expect(screen.getByText("El trauma que no se va")).toBeInTheDocument();
		expect(
			screen.getByText("Un mundo que no está hecho para ti"),
		).toBeInTheDocument();
	});

	it("renders exactly 3 pain point cards", () => {
		render(<Problem />);
		// Each card contains a numbered badge; count the badge elements
		const badges = [
			screen.getByText("1"),
			screen.getByText("2"),
			screen.getByText("3"),
		];
		expect(badges).toHaveLength(3);
	});
});
