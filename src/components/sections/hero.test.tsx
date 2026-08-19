import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Hero } from "./hero";

describe("Hero", () => {
	it("renders the section heading", () => {
		render(<Hero />);
		expect(
			screen.getByRole("heading", {
				name: "Un camino hacia la paz contigo misma",
			}),
		).toBeInTheDocument();
	});

	it("renders the primary and secondary CTAs", () => {
		render(<Hero />);
		expect(
			screen.getByRole("link", { name: "Comienza tu proceso" }),
		).toHaveAttribute("href", "#contacto");
		expect(
			screen.getByRole("link", { name: /Conocer mi enfoque/ }),
		).toHaveAttribute("href", "#enfoque");
	});

	it("has the correct section id and label", () => {
		render(<Hero />);
		expect(document.getElementById("hero")).not.toBeNull();
		expect(
			screen.getByRole("region", { name: "Introducción" }),
		).toBeInTheDocument();
	});

	it("renders the real hero photo with meaningful alt text", () => {
		render(<Hero />);
		const img = screen.getByRole("img", {
			name: /planta.*luz.*atardecer/i,
		});
		expect(img).toBeInTheDocument();
		expect(img.getAttribute("src")).not.toBe("");
	});

	it("has no axe violations", async () => {
		const { container } = render(<Hero />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
