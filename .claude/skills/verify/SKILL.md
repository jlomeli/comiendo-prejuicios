---
name: verify
description: Run TypeScript type check and production build to confirm changes are valid. Use after making code changes before committing.
---

Run the following commands in sequence and report any errors:

1. **Lint:** `bun run lint`
   - Report all lint/formatting issues with file, line, and rule name.
   - If this passes cleanly, say so.

2. **Type check:** `bun tsc --noEmit`
   - Report all type errors with file, line, and message.
   - If this passes cleanly, say so.

3. **Build:** `bun run build.ts`
   - Report any build errors.
   - If this passes cleanly, confirm the build succeeded and note the output in `dist/`.

If all three pass, summarize: "Lint passed. Type check passed. Build succeeded." and suggest committing.
If any fail, list the errors and propose fixes before asking to proceed.
