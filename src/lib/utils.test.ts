import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
	it("merges class names", () => {
		expect(cn("foo", "bar")).toBe("foo bar");
	});

	it("handles conditional falsy values", () => {
		expect(cn("foo", undefined, false, null, "bar")).toBe("foo bar");
	});

	it("resolves conflicting Tailwind classes (last wins)", () => {
		expect(cn("p-2", "p-4")).toBe("p-4");
	});

	it("resolves conflicting text color classes", () => {
		expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
	});

	it("returns empty string with no arguments", () => {
		expect(cn()).toBe("");
	});

	it("handles object syntax for conditional classes", () => {
		expect(cn({ "font-bold": true, "font-normal": false })).toBe("font-bold");
	});

	it("merges multiple conflicting classes correctly", () => {
		expect(cn("px-2 py-1", "p-4")).toBe("p-4");
	});
});
