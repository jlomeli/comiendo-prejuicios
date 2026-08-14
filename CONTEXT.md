# Comiendo Prejuicios

A single-page marketing/landing site for Dra. Claudia Gomez's ACT (Acceptance and
Commitment Therapy) private practice, serving Spanish-speaking women navigating
eating disorders, trauma, and neurodivergence.

## Language

**Luz de Atardecer** (Sunset Light):
The current brand identity — palette, typography, and motion language — for the
site. Replaced the prior "Luz de tarde" (Afternoon Light) brand in full; the two
are not concurrent themes.
_Avoid_: Luz de tarde (superseded brand name), "the redesign" (name the brand
directly once it's live).

**Dra. Claudia Gomez**:
The therapist whose practice this site represents. The site's real identity —
name, credentials, and location (Ciudad de México) come from her, not from
design mockups or templates, which may use a placeholder persona/name.
_Avoid_: Ana (a placeholder name that has appeared in design mockups but is not
the real therapist).

**Sesión individual**:
A single 50-minute therapy session, priced $800–$1,200 MXN. The practice's base
unit of paid service.
_Avoid_: consulta, cita (used for scheduling language, not the priced unit).

**Bono de 4 sesiones**:
A discounted package of four individual sessions, priced as "4 sessions for the
price of 3.5." The only pricing discount the practice offers.
_Avoid_: paquete, descuento (too generic — this is the one specific bundle).

**Nuestro proceso**:
The practice's onboarding path, shown as a 3-step timeline (valoración →
evaluación y mapa → siguientes pasos). Not four steps, despite earlier PRD
drafts describing it that way.

**Voces del camino**:
The testimonials section. Quotes are real, anonymized client testimonials
identified only by a single initial (e.g. "M.") to preserve confidentiality —
never a full name.
_Avoid_: reviews, reseñas (implies public/unverified feedback rather than
solicited, anonymized client quotes).

## Working rule: design docs vs. real content

`docs/design/PRD.md`, `docs/design/DESIGN.md`, and their mockup are the source
of truth for **visual and structural** direction (layout, palette, type,
motion, section framing copy). They are **not** the source of truth for facts
that already exist correctly in the codebase — therapist identity, pricing/
currency, and testimonial content. When a design doc's content conflicts with
an existing real fact, the real fact wins; only the presentation changes.
