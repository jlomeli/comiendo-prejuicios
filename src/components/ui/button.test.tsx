import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
	it("renders a button element", () => {
		render(<Button>Click me</Button>);
		expect(
			screen.getByRole("button", { name: "Click me" }),
		).toBeInTheDocument();
	});

	it("applies default variant (bg-primary) class", () => {
		render(<Button>Default</Button>);
		expect(screen.getByRole("button").className).toContain("bg-primary");
	});

	it("applies outline variant classes", () => {
		render(<Button variant="outline">Outline</Button>);
		const button = screen.getByRole("button");
		expect(button.className).toContain("border");
		expect(button.className).not.toContain("bg-primary");
	});

	it("applies disabled attribute and opacity when disabled", () => {
		render(<Button disabled>Disabled</Button>);
		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
		expect(button.className).toContain("disabled:opacity-50");
	});

	it("has data-slot='button' attribute", () => {
		render(<Button>Test</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("data-slot", "button");
	});

	it("with asChild renders the child element instead of a button", () => {
		render(
			<Button asChild>
				<a href="#test">Link button</a>
			</Button>,
		);
		expect(
			screen.getByRole("link", { name: "Link button" }),
		).toBeInTheDocument();
		expect(screen.queryByRole("button")).not.toBeInTheDocument();
	});

	it("applies sm size class", () => {
		render(<Button size="sm">Small</Button>);
		expect(screen.getByRole("button").className).toContain("h-8");
	});

	it("applies lg size class", () => {
		render(<Button size="lg">Large</Button>);
		expect(screen.getByRole("button").className).toContain("h-10");
	});
});
