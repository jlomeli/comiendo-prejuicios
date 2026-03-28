import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Fees } from "./fees";

describe("Fees", () => {
	it("renders the section heading", () => {
		render(<Fees />);
		expect(
			screen.getByRole("heading", { name: "Honorarios" }),
		).toBeInTheDocument();
	});

	it("renders the fee range", () => {
		render(<Fees />);
		expect(screen.getByText("$800–$1,200 MXN")).toBeInTheDocument();
	});

	it("renders the sliding scale mention", () => {
		render(<Fees />);
		expect(screen.getByText("Escala móvil")).toBeInTheDocument();
	});

	it("renders the teletherapy note", () => {
		render(<Fees />);
		expect(screen.getByText("En línea")).toBeInTheDocument();
	});

	it("has the correct section id", () => {
		render(<Fees />);
		expect(document.getElementById("honorarios")).not.toBeNull();
	});
});
