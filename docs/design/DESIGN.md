# Design System: Editorial Serenity

## 1. Overview &amp; Creative North Star: "The Ethereal Editorial"

The Creative North Star for this design system is **"The Ethereal Editorial."** Unlike standard SaaS platforms that prioritize rigid efficiency, this system prioritizes *emotional resonance* and *narrative flow*. 

To move beyond the "template" look, we embrace **Intentional Asymmetry**. Large display typography should often be offset from the main content column, and imagery should bleed off-edge or overlap container boundaries. We avoid "boxes" in favor of "atmospheres." By using the "Luz de Atardecer" (Sunset Light) palette, we create a UI that feels like a physical space catching the last warm rays of the day—hopeful, quiet, and deeply human.

---

## 2. Colors: The Sunset Spectrum

The palette is built on tonal depth rather than high-contrast separation. We use color to simulate the behavior of natural light.

*   **Primary `#7f5353` - Dusty Rose):** Use for meaningful actions and brand moments. It represents the heart of the sunset.

*   **Secondary `#735c00` - Muted Gold):** Reserved for "Golden Hour" highlights—subtle accents that guide the eye without shouting.

*   **Tertiary `#50606f` - Soft Slate Blue):** The cooling sky. Use this for grounding elements and secondary information to provide a sense of calm.

*   **Neutral/Surface `#fbf9f5` - Cream):** Our "Paper" base. It is warm, reflective, and soft on the eyes.

### The "No-Line" Rule

**Explicit Instruction:** Do not use 1px solid borders for sectioning. 

Boundaries must be defined solely through background color shifts. Use `surface-container-low` `#f5f3ef`) for large section blocks and `surface-container` `#efeeea`) for inner modules. If you feel the need for a line, increase your vertical spacing `spacing-12` or `spacing-16`) instead.

### Signature Textures: The "Aura" Gradient

To provide visual soul, hero sections and primary CTAs should utilize a subtle linear gradient: 

*   **Direction:** 135 degrees.

*   **Start:** `primary` `#7f5353`).

*   **End:** `primary_container` `#d8a2a1`).

This mimics the shift of light across a cloud, preventing the UI from feeling "flat" or "digital."

---

## 3. Typography: The Human Touch

We pair two distinct serif-driven personalities to create a sophisticated, book-like feel.

*   **Display &amp; Headlines (Noto Serif):** This elegant, slightly rounded serif is our "voice." It should be used with generous leading. 

    *   *Implementation:* Use `display-lg` (3.5rem) for hero statements. Apply a slight negative letter-spacing (-0.02em) to large headers to make them feel more "locked" and professional.

*   **Body &amp; Labels (Be Vietnam Pro):** A warm, humanist sans with slab-serif-like stability. It ensures high readability while maintaining the "gentle" brand tone.

    *   *Implementation:* Body text `body-lg`) should never be pure black; use `on_surface_variant` `#504444`) to maintain the soft sunset atmosphere.

---

## 4. Elevation &amp; Depth: Tonal Layering

In this system, depth is a matter of *density*, not shadow.

*   **The Layering Principle:** Stack surfaces to create hierarchy. 

    *   **Base:** `surface` `#fbf9f5`).

    *   **Nested Section:** `surface-container-low` `#f5f3ef`).

    *   **Floating Component:** `surface-container-lowest` `#ffffff`).

*   **Glassmorphism:** For navigation bars or floating action menus, use a semi-transparent `surface_bright` with a `20px` backdrop-blur. This allows the sunset colors to "bleed" through the interface, keeping the experience integrated.

*   **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., in high-density data), use `outline_variant` `#d4c2c2`) at **15% opacity**. Anything higher is too aggressive for this aesthetic.

*   **Ambient Shadows:** If a shadow is essential for a "raised" card, use:

    *   `box-shadow: 0 12px 32px -4px rgba(127, 83, 83, 0.08);` (A tinted shadow using the primary rose color).

---

## 5. Components: Softness &amp; Intent

### Buttons

*   **Primary:** Rounded `lg` (1rem), using the "Aura" Gradient. Text is `on_primary` (White).

*   **Secondary:** Ghost-style. No background, no border. Use `primary` text with a `title-sm` weight. On hover, apply a subtle `surface_container_high` background.

*   **Forbid:** Do not use sharp corners or high-contrast black buttons.

### Cards

*   **Construction:** Use `surface-container-low` backgrounds. 

*   **Spacing:** Internal padding must be at least `spacing-6` (2rem). 

*   **No Dividers:** Separate header and body text within a card using a `spacing-3` gap, never a horizontal rule.

### Input Fields

*   **Style:** Minimalist. Only a bottom "Ghost Border" (15% opacity `outline`). 

*   **Focus State:** The bottom border transitions to `secondary` (Gold) with a soft glow effect.

### Content Immersion (Custom Component)

*   **The "Drift" Reveal:** Content blocks should animate in with a 20px vertical "drift" and a slow opacity fade (Duration: 800ms, Easing: cubic-bezier(0.22, 1, 0.36, 1)). This mimics the gentle shift of light.

---

## 6. Do’s and Don’ts

### Do:

*   **Do** use asymmetrical margins. If the left margin is `spacing-10`, try a right margin of `spacing-20` for editorial impact.

*   **Do** allow images to overlap different colored background sections.

*   **Do** use the `secondary_fixed` (Muted Gold) for small UI details like pagination dots or bullet points.

### Don’t:

*   **Don’t** use pure `#000000` for text. It breaks the sunset illusion.

*   **Don’t** use standard "Drop Shadows." Use the tinted, diffused ambient shadows described in Section 4.

*   **Don’t** cram content. If a screen feels full, increase the spacing tokens. This system thrives on "Breathing Room."

*   **Don’t** use "Alert Red" for errors if possible; use `error` `#ba1a1a`) but wrap it in an `error_container` with a high blur to soften the impact.

---

**Director's Note:** Remember, you are not building a dashboard; you are crafting a digital sanctuary. Every pixel should feel like it was placed with compassion.