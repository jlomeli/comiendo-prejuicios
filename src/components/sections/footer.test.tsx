import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
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
		const nav = screen.getByRole("navigation", {
			name: "Enlaces del pie de página",
		});
		expect(within(nav).getByRole("link", { name: "Sobre mí" })).toHaveAttribute(
			"href",
			"#sobre-mi",
		);
		expect(within(nav).getByRole("link", { name: "Enfoque" })).toHaveAttribute(
			"href",
			"#enfoque",
		);
		expect(
			within(nav).getByRole("link", { name: "Honorarios" }),
		).toHaveAttribute("href", "#honorarios");
		expect(within(nav).getByRole("link", { name: "Contacto" })).toHaveAttribute(
			"href",
			"#contacto",
		);
	});

	it("renders the brand name", () => {
		render(<Footer />);
		expect(screen.getByText("Comiendo Prejuicios")).toBeInTheDocument();
	});

	it("renders therapist credentials", () => {
		render(<Footer />);
		expect(screen.getByText("Dra. Claudia Gomez")).toBeInTheDocument();
		expect(screen.getByText(/Psicóloga · Terapeuta ACT/)).toBeInTheDocument();
	});

	it("does not render a photo credits section", () => {
		render(<Footer />);
		expect(screen.queryByText("Créditos fotográficos")).not.toBeInTheDocument();
	});
});

describe("Newsletter", () => {
	it("renders the newsletter heading and signup form", () => {
		render(<Footer />);
		expect(
			screen.getByRole("heading", {
				name: "¿Deseas recibir calma en tu correo?",
			}),
		).toBeInTheDocument();
		expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Unirme" })).toBeInTheDocument();
	});

	it("shows a confirmation after submitting a valid email", async () => {
		render(<Footer />);
		await userEvent.type(
			screen.getByLabelText("Correo electrónico"),
			"lectora@correo.com",
		);
		await userEvent.click(screen.getByRole("button", { name: "Unirme" }));
		expect(await screen.findByText(/nos leemos pronto/)).toBeInTheDocument();
	});

	it("has no axe violations", async () => {
		const { container } = render(<Footer />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
