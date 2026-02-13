/**
 * Stock image URLs (Unsplash). Optimized query params: w=width, q=80 quality.
 * Replace with your own assets or booking/CTA links as needed.
 */
const unsplash = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80${h ? `&h=${h}` : ""}&fit=crop`;

const UNSPLASH_PHOTO = (id: string) => `https://unsplash.com/photos/${id}`;

export const images = {
  /** Hero: calm, soft light - woman in peaceful setting */
  heroBg: unsplash("1544367567-0f2fcb009e0b", 1920, 1080),
  /** About: warm professional portrait */
  about: unsplash("1580489944761-15a19d654956", 400, 400),
  /** Problem section: contemplative, safe feeling */
  problem: unsplash("1494597564530-871f2b93ac55", 800, 500),
  /** Solution cards: food/calm, safe space, mindfulness */
  solutionFood: unsplash("1494597564530-871f2b93ac55", 600, 400),
  solutionSafe: unsplash("1507003211169-0a1dd7228f2d", 600, 400),
  solutionMindful: unsplash("1545205597-3d9d02c29597", 600, 400),
  /** How it works: video call / therapy session */
  howItWorks: unsplash("1573496359142-b8d87734a5a2", 800, 500),
  /** Testimonial avatars - diverse, warm */
  avatar1: unsplash("1531746020798-e6953c6e8e04", 200, 200),
  avatar2: unsplash("1529626455594-4ff0802cf2fb", 200, 200),
  avatar3: unsplash("1517841905240-472988babdf9", 200, 200),
  /** Final CTA: soft nature background */
  ctaBg: unsplash("1506905925346-21bda4d32df4", 1920, 1080),
} as const;

/** Photo credits for footer. Each links to the Unsplash photo page where the photographer is shown. */
export const photoCredits = [
  { label: "Hero (fondo)", url: UNSPLASH_PHOTO("1544367567-0f2fcb009e0b") },
  { label: "Sobre mí", url: UNSPLASH_PHOTO("1580489944761-15a19d654956") },
  { label: "Sección problema / comida", url: UNSPLASH_PHOTO("1494597564530-871f2b93ac55") },
  { label: "Solución (espacio seguro)", url: UNSPLASH_PHOTO("1507003211169-0a1dd7228f2d") },
  { label: "Solución (mindfulness)", url: UNSPLASH_PHOTO("1545205597-3d9d02c29597") },
  { label: "Cómo trabajamos", url: UNSPLASH_PHOTO("1573496359142-b8d87734a5a2") },
  { label: "Testimonios (avatar 1)", url: UNSPLASH_PHOTO("1531746020798-e6953c6e8e04") },
  { label: "Testimonios (avatar 2)", url: UNSPLASH_PHOTO("1529626455594-4ff0802cf2fb") },
  { label: "Testimonios (avatar 3)", url: UNSPLASH_PHOTO("1517841905240-472988babdf9") },
  { label: "CTA (fondo naturaleza)", url: UNSPLASH_PHOTO("1506905925346-21bda4d32df4") },
] as const;
