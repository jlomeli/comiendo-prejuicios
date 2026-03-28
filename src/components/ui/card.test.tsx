import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

describe("Card", () => {
	it("renders children", () => {
		render(<Card>Card content</Card>);
		expect(screen.getByText("Card content")).toBeInTheDocument();
	});

	it("has data-slot='card' attribute", () => {
		render(<Card>test</Card>);
		expect(document.querySelector("[data-slot='card']")).toBeInTheDocument();
	});
});

describe("Card composition", () => {
	it("renders a fully composed card with all sub-components", () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>My Title</CardTitle>
					<CardDescription>My description</CardDescription>
				</CardHeader>
				<CardContent>Main content</CardContent>
				<CardFooter>Footer content</CardFooter>
			</Card>,
		);
		expect(screen.getByText("My Title")).toBeInTheDocument();
		expect(screen.getByText("My description")).toBeInTheDocument();
		expect(screen.getByText("Main content")).toBeInTheDocument();
		expect(screen.getByText("Footer content")).toBeInTheDocument();
	});

	it("each sub-component renders with the correct data-slot attribute", () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Desc</CardDescription>
				</CardHeader>
				<CardContent>Content</CardContent>
				<CardFooter>Footer</CardFooter>
			</Card>,
		);
		expect(
			document.querySelector("[data-slot='card-header']"),
		).toBeInTheDocument();
		expect(
			document.querySelector("[data-slot='card-title']"),
		).toBeInTheDocument();
		expect(
			document.querySelector("[data-slot='card-description']"),
		).toBeInTheDocument();
		expect(
			document.querySelector("[data-slot='card-content']"),
		).toBeInTheDocument();
		expect(
			document.querySelector("[data-slot='card-footer']"),
		).toBeInTheDocument();
	});
});
