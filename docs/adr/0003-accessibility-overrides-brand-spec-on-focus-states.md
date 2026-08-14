# Accessibility requirements override brand/design-system spec when they conflict

**Status:** accepted

`DESIGN.md`'s input focus treatment (a soft bottom-border color shift + glow)
would replace this project's existing global `*:focus-visible` 3px solid
outline, which exists specifically to meet WCAG 2.4.11 and this project's own
stated bar of "high-visibility focus states for neurodivergent navigation." We
kept the 3px outline (recolored to the new palette) as non-negotiable and
layered the design system's glow on top as decoration, rather than following
the design spec literally. This is the standing precedent for the rest of the
redesign: where a brand/design-system spec and an accessibility requirement
conflict, accessibility wins and the visual spec gets adapted around it, not
the reverse.
