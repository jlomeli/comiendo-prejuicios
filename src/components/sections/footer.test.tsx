import { fireEvent, render, screen, within } from "@testing-library/react";
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

	it("submits to Buttondown's embed-subscribe endpoint in a new tab", () => {
		render(<Footer />);
		const form = screen.getByLabelText("Correo electrónico").closest("form");
		expect(form).toHaveAttribute(
			"action",
			"https://buttondown.com/api/emails/embed-subscribe/comiendoprejuicios",
		);
		expect(form).toHaveAttribute("method", "post");
		expect(form).toHaveAttribute("target", "_blank");
	});

	it("uses Buttondown's expected 'email' field name", () => {
		render(<Footer />);
		expect(screen.getByLabelText("Correo electrónico")).toHaveAttribute(
			"name",
			"email",
		);
	});

	it("shows an acknowledgment after submitting, without claiming success", async () => {
		render(<Footer />);
		await userEvent.type(
			screen.getByLabelText("Correo electrónico"),
			"lectora@correo.com",
		);
		// jsdom doesn't implement real form navigation (it can't actually
		// submit to an external action/target), so a userEvent.click on the
		// submit button never reaches our onSubmit handler here. Firing the
		// submit event directly still exercises the same handler a real
		// click would trigger.
		const form = screen.getByLabelText("Correo electrónico").closest("form");
		if (!form) throw new Error("form not found");
		fireEvent.submit(form);
		// We only know the request was sent (a new tab opened) — the actual
		// subscribe outcome plays out on Buttondown's page, in that new tab.
		expect(
			await screen.findByText(/pestaña nueva/, { selector: "p" }),
		).toBeInTheDocument();
	});

	it("has no axe violations", async () => {
		const { container } = render(<Footer />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
