import { createElement, type ReactNode } from "react";

type MotionProps = {
	children?: ReactNode;
	[key: string]: unknown;
};

// Framer Motion-only props that aren't valid DOM attributes — stripped so the
// rest (href, style, id, className, aria-*, role, data-*, ...) can pass
// through untouched to the underlying tag.
const ANIMATION_PROPS = new Set([
	"initial",
	"animate",
	"exit",
	"whileHover",
	"whileTap",
	"whileFocus",
	"whileDrag",
	"whileInView",
	"transition",
	"variants",
	"viewport",
	"layout",
	"layoutId",
	"custom",
	"drag",
	"dragConstraints",
	"onAnimationStart",
	"onAnimationComplete",
]);

const createMotionComponent =
	(tag: string) =>
	({ children, ...props }: MotionProps) => {
		const domProps: Record<string, unknown> = {};
		for (const key of Object.keys(props)) {
			if (!ANIMATION_PROPS.has(key)) {
				domProps[key] = props[key];
			}
		}
		return createElement(tag, domProps, children);
	};

export const motion = {
	div: createMotionComponent("div"),
	span: createMotionComponent("span"),
	nav: createMotionComponent("nav"),
	section: createMotionComponent("section"),
	button: createMotionComponent("button"),
	p: createMotionComponent("p"),
	ul: createMotionComponent("ul"),
	li: createMotionComponent("li"),
	a: createMotionComponent("a"),
};

export const AnimatePresence = ({ children }: { children?: ReactNode }) => (
	<>{children}</>
);

export const useAnimation = () => ({});
export const useInView = () => [null, false];
/**
 * useReducedMotion mock — returns false (animations enabled) in the test environment.
 * Override with vi.mock("framer-motion", ...) for reduced-motion-specific tests.
 */
export const useReducedMotion = () => false;
