import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./header";

describe("Header", () => {
	it("renders the site logo link", () => {
		render(<Header />);
		expect(screen.getByText("Comiendo Prejuicios")).toBeInTheDocument();
	});

	it("renders all navigation links", () => {
		render(<Header />);
		for (const label of [
			"Problema",
			"Solución",
			"Proceso",
			"Testimonios",
			"Sobre mí",
		]) {
			expect(
				screen.getAllByRole("link", { name: label }).length,
			).toBeGreaterThan(0);
		}
	});

	it("mobile menu is not present by default", () => {
		render(<Header />);
		expect(document.getElementById("mobile-menu")).toBeNull();
	});

	it("hamburger button has aria-expanded false by default", () => {
		render(<Header />);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("aria-expanded", "false");
	});

	it("clicking the hamburger button opens the mobile menu", async () => {
		render(<Header />);
		const button = screen.getByRole("button");
		await userEvent.click(button);
		expect(button).toHaveAttribute("aria-expanded", "true");
		expect(document.getElementById("mobile-menu")).not.toBeNull();
	});

	it("clicking a nav link inside the mobile menu closes it", async () => {
		render(<Header />);
		await userEvent.click(screen.getByRole("button"));
		expect(document.getElementById("mobile-menu")).not.toBeNull();

		const mobileMenu = document.getElementById("mobile-menu") as HTMLElement;
		const mobileLink = mobileMenu.querySelector(
			"a[href='#como-funciona']",
		) as Element;
		expect(mobileLink).not.toBeNull();
		await userEvent.click(mobileLink);

		expect(document.getElementById("mobile-menu")).toBeNull();
	});

	it("CTA links point to #consultation", () => {
		render(<Header />);
		const ctaLinks = screen.getAllByRole("link", { name: "Consulta gratuita" });
		for (const link of ctaLinks) {
			expect(link).toHaveAttribute("href", "#consultation");
		}
	});
});
