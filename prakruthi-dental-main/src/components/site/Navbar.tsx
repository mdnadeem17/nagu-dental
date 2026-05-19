import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Smiles" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Use a ref so the scroll listener always sees the latest value of `open`
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (openRef.current) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // empty deps — only runs once

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid place-items-center size-9 rounded-xl btn-primary shadow-glow">
              <Sparkles className="size-5" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Prakruthi <span className="text-gradient">Dental</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl btn-primary px-4 py-2.5 text-sm font-semibold"
            >
              Book Appointment
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center size-10 rounded-xl border border-border bg-white text-foreground"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden mt-2 rounded-2xl p-4 shadow-elevated border border-border"
              style={{ backgroundColor: "#ffffff" }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-sky-50 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-gray-100 mt-1">
                  <a
                    href="#book"
                    onClick={() => setOpen(false)}
                    className="block text-center btn-primary rounded-xl px-4 py-3 font-semibold text-sm"
                  >
                    Book Appointment
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
