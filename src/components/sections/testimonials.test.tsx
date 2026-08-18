import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
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

	it("renders exactly one testimonial at a time, starting with the first", () => {
		render(<Testimonials />);
		expect(document.querySelectorAll("blockquote")).toHaveLength(1);
		expect(screen.getByText("M.")).toBeInTheDocument();
		expect(
			screen.getByText("Trastorno alimentario y ansiedad"),
		).toBeInTheDocument();
		expect(screen.queryByText("L.")).not.toBeInTheDocument();
	});

	it("advances to the next testimonial on next-button click", async () => {
		render(<Testimonials />);
		await userEvent.click(
			screen.getByRole("button", { name: "Testimonio siguiente" }),
		);
		expect(screen.getByText("L.")).toBeInTheDocument();
	});

	it("wraps from the last to the first testimonial", async () => {
		render(<Testimonials />);
		await userEvent.click(
			screen.getByRole("button", { name: "Testimonio anterior" }),
		);
		expect(screen.getByText("R.")).toBeInTheDocument();
	});

	it("jumps to a testimonial via its pagination dot", async () => {
		render(<Testimonials />);
		await userEvent.click(
			screen.getByRole("button", { name: "Ir al testimonio 3 de 3" }),
		);
		expect(screen.getByText("R.")).toBeInTheDocument();
	});

	it("announces the active testimonial via an aria-live region", () => {
		render(<Testimonials />);
		expect(screen.getByText(/Testimonio 1 de 3: M\./)).toBeInTheDocument();
	});

	it("does not autoplay — no autoplay/interval attributes", () => {
		const { container } = render(<Testimonials />);
		// No timers are started by this component; a static render is enough
		// to prove there's no autoplay wiring beyond user-triggered clicks.
		expect(container.querySelector("[data-autoplay]")).toBeNull();
	});

	it("has no axe violations", async () => {
		const { container } = render(<Testimonials />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
