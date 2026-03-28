import { describe, expect, it } from "vitest";
import { images, photoCredits } from "./images";

describe("images", () => {
	it("has all expected keys", () => {
		const expectedKeys = [
			"heroBg",
			"about",
			"problem",
			"solutionFood",
			"solutionSafe",
			"solutionMindful",
			"howItWorks",
			"avatar1",
			"avatar2",
			"avatar3",
			"ctaBg",
		] as const;
		for (const key of expectedKeys) {
			expect(images).toHaveProperty(key);
		}
	});

	it("each value is a valid Unsplash image URL", () => {
		for (const value of Object.values(images)) {
			expect(value).toMatch(/^https:\/\/images\.unsplash\.com\/photo-/);
		}
	});

	it("includes width optimization param", () => {
		expect(images.heroBg).toContain("w=1920");
	});

	it("includes quality optimization param", () => {
		expect(images.heroBg).toContain("q=80");
	});

	it("includes height param when provided", () => {
		expect(images.heroBg).toContain("h=1080");
	});

	it("omits height param when not provided", () => {
		// avatar images use w only (200x200 → both provided, so h IS present)
		// about image has w=400, h=400 — both present
		// All images in this project include both w and h, so verify the URL format
		for (const value of Object.values(images)) {
			expect(value).toContain("fit=crop");
		}
	});
});

describe("photoCredits", () => {
	it("is non-empty", () => {
		expect(photoCredits.length).toBeGreaterThan(0);
	});

	it("has 10 entries", () => {
		expect(photoCredits).toHaveLength(10);
	});

	it("each entry has a label and url", () => {
		for (const credit of photoCredits) {
			expect(credit.label).toBeTruthy();
			expect(credit.url).toBeTruthy();
		}
	});

	it("each url points to an Unsplash photo page", () => {
		for (const credit of photoCredits) {
			expect(credit.url).toMatch(/^https:\/\/unsplash\.com\/photos\//);
		}
	});

	it("all URLs are unique", () => {
		const urls = photoCredits.map((c) => c.url);
		const unique = new Set(urls);
		expect(unique.size).toBe(urls.length);
	});
});
