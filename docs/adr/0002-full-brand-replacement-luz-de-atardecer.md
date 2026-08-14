# Replace the brand system in place rather than run it as a parallel theme

**Status:** accepted

The landing page redesign ("Luz de Atardecer") changes the palette, typography,
and motion language wholesale from the prior "Luz de tarde" brand. We
considered shipping it as an addressable alternate theme (flag/query param) to
compare against production before committing, but chose a full in-place
replacement instead: this is a pre-revenue marketing site with no live users
mid-flow, and a parallel theme would mean maintaining two token sets, two font
loads, and a cleanup step later for a comparison that a feature branch already
gives us for free.
