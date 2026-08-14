import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			// Minimalist: only a bottom Ghost Border, no full box. On focus the
			// border shifts to gold with a soft glow — decoration layered on top
			// of the mandatory 3px *:focus-visible outline (globals.css), which
			// remains the real focus indicator. DESIGN.md §5 Input Fields;
			// docs/adr/0003-accessibility-overrides-brand-spec-on-focus-states.md
			className={cn(
				"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-9 w-full min-w-0 rounded-none border-0 border-b-2 border-input bg-transparent px-1 py-1 text-base transition-[border-color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-b-ring focus-visible:shadow-[0_4px_10px_-4px_var(--ring)]",
				"aria-invalid:border-b-destructive aria-invalid:shadow-[0_4px_10px_-4px_var(--destructive)]",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
