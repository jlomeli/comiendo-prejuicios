import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
	once?: boolean;
	amount?: number;
}

/* "Drift Reveal" — DESIGN.md §5 Content Immersion: a 20px drift + slow
 * opacity fade, 800ms, cubic-bezier(0.22, 1, 0.36, 1). */
const directionOffset = {
	up: { y: 20 },
	down: { y: -20 },
	left: { x: 20 },
	right: { x: -20 },
};

export function ScrollReveal({
	children,
	className,
	delay = 0,
	direction = "up",
	once = true,
	amount = 0.15,
}: ScrollRevealProps) {
	/**
	 * useReducedMotion reads window.matchMedia("(prefers-reduced-motion: reduce)")
	 * and updates reactively when the OS preference changes.
	 * When true, content renders immediately without animation (WCAG 2.3.3).
	 */
	const shouldReduceMotion = useReducedMotion();

	const offset = directionOffset[direction];
	const initial = shouldReduceMotion
		? { opacity: 1, x: 0, y: 0 }
		: { opacity: 0, ...offset };
	const animate = { opacity: 1, x: 0, y: 0 };
	const transition = shouldReduceMotion
		? { duration: 0 }
		: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const };

	return (
		<motion.div
			className={className}
			initial={initial}
			whileInView={animate}
			viewport={{ once, amount }}
			transition={transition}
		>
			{children}
		</motion.div>
	);
}
