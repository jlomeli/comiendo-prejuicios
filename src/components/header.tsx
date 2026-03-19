import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#como-funciona", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#sobre-mi", label: "Sobre mí" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16 sm:h-18"
          aria-label="Principal"
        >
          <a
            href="#hero"
            className="font-semibold text-foreground text-lg hover:text-primary transition-colors"
          >
            <span className="font-serif">Comiendo Prejuicios</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="rounded-xl">
                <a href="#consultation">Consulta gratuita</a>
              </Button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted aria-expanded:bg-muted"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "block py-3 px-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full rounded-xl" size="lg">
                  <a href="#consultation" onClick={() => setMenuOpen(false)}>
                    Consulta gratuita
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
