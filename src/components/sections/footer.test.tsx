import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";

describe("Footer", () => {
	it("renders the current year in the copyright line", () => {
		render(<Footer />);
		const year = new Date().getFullYear().toString();
		expect(
			screen.getByText(new RegExp(`© ${year} Comiendo Prejuicios`)),
		).toBeInTheDocument();
	});

	it("renders footer navigation links", () => {
		render(<Footer />);
		// Scope to the footer nav to avoid collision with photo credit links sharing the same label
		const nav = screen.getByRole("navigation", {
			name: "Enlaces del pie de página",
		});
		expect(
			within(nav).getByRole("link", { name: "Consulta gratuita" }),
		).toHaveAttribute("href", "#consultation");
		expect(within(nav).getByRole("link", { name: "Proceso" })).toHaveAttribute(
			"href",
			"#como-funciona",
		);
		expect(within(nav).getByRole("link", { name: "Sobre mí" })).toHaveAttribute(
			"href",
			"#sobre-mi",
		);
	});

	it("renders the photo credits heading", () => {
		render(<Footer />);
		expect(screen.getByText("Créditos fotográficos")).toBeInTheDocument();
	});

	it("renders photo credit links with no duplicate URLs", () => {
		render(<Footer />);
		const creditLinks = Array.from(
			document.querySelectorAll("a[target='_blank']"),
		).filter((el) => el.getAttribute("href")?.includes("/photos/"));
		const hrefs = creditLinks.map((el) => el.getAttribute("href"));
		const unique = new Set(hrefs);
		expect(hrefs.length).toBeGreaterThan(0);
		expect(hrefs.length).toBe(unique.size);
	});

	it("renders the brand name", () => {
		render(<Footer />);
		expect(screen.getByText("Comiendo Prejuicios")).toBeInTheDocument();
	});
});
