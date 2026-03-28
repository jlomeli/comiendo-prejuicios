import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Testimonials } from "./testimonials";

describe("Testimonials", () => {
	it("renders the section heading", () => {
		render(<Testimonials />);
		expect(
			screen.getByRole("heading", {
				name: "Lo que dicen quienes han dado el paso",
			}),
		).toBeInTheDocument();
	});

	it("renders exactly 3 testimonial cards", () => {
		render(<Testimonials />);
		const blockquotes = document.querySelectorAll("blockquote");
		expect(blockquotes).toHaveLength(3);
	});

	it("renders all 3 author names", () => {
		render(<Testimonials />);
		expect(screen.getByText("M.")).toBeInTheDocument();
		expect(screen.getByText("L.")).toBeInTheDocument();
		expect(screen.getByText("R.")).toBeInTheDocument();
	});

	it("renders all 3 context labels", () => {
		render(<Testimonials />);
		expect(
			screen.getByText("Trastorno alimentario y ansiedad"),
		).toBeInTheDocument();
		expect(
			screen.getByText("Neurodivergencia y relación con la comida"),
		).toBeInTheDocument();
		expect(screen.getByText("Trauma y autoestima")).toBeInTheDocument();
	});
});
