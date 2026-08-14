import type * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			// Same minimalist bottom Ghost Border + gold focus glow treatment as
			// Input — see input.tsx and DESIGN.md §5 Input Fields.
			className={cn(
				"border-input placeholder:text-muted-foreground focus-visible:border-b-ring aria-invalid:border-b-destructive flex field-sizing-content min-h-16 w-full rounded-none border-0 border-b-2 bg-transparent px-1 py-2 text-base transition-[border-color,box-shadow] outline-none focus-visible:shadow-[0_4px_10px_-4px_var(--ring)] aria-invalid:shadow-[0_4px_10px_-4px_var(--destructive)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
