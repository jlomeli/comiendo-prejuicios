import { defineConfig } from "vitest/config";

export default defineConfig({
	esbuild: {
		jsx: "automatic",
		jsxImportSource: "react",
	},
	resolve: {
		alias: {
			"@": new URL("./src", import.meta.url).pathname,
			"framer-motion": new URL(
				"./src/test/__mocks__/framer-motion.tsx",
				import.meta.url,
			).pathname,
		},
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
	},
});
