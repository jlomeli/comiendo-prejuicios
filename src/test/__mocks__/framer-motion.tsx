import { createElement, type ReactNode } from "react";

type MotionProps = {
	children?: ReactNode;
	className?: string;
	id?: string;
	[key: string]: unknown;
};

const createMotionComponent =
	(tag: string) =>
	({ children, className, id }: MotionProps) =>
		createElement(tag, { className, id }, children);

export const motion = {
	div: createMotionComponent("div"),
	span: createMotionComponent("span"),
	nav: createMotionComponent("nav"),
	section: createMotionComponent("section"),
	button: createMotionComponent("button"),
	p: createMotionComponent("p"),
	ul: createMotionComponent("ul"),
	li: createMotionComponent("li"),
};

export const AnimatePresence = ({ children }: { children?: ReactNode }) => (
	<>{children}</>
);

export const useAnimation = () => ({});
export const useInView = () => [null, false];
