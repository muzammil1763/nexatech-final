import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import nexaLogo from "@/assets/nexa-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.nav
        animate={{
          paddingTop: scrolled ? 10 : 24,
          paddingBottom: scrolled ? 10 : 24,
          marginLeft: scrolled ? 16 : 0,
          marginRight: scrolled ? 16 : 0,
          marginTop: scrolled ? 12 : 0,
          borderRadius: scrolled ? 999 : 0,
          backgroundColor: scrolled ? "rgba(12,12,12,0.7)" : "rgba(12,12,12,0)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ backdropFilter: scrolled ? "blur(14px)" : "none" }}
        className="px-5 md:px-10 flex items-center justify-between"
      >
        <a
          href="#top"
          onClick={(e) => smoothScroll(e, "#top")}
          className="flex items-center"
          aria-label="Nexa Tech home"
        >
          <img
            src={nexaLogo}
            alt="Nexa Tech logo"
            className="h-16 md:h-24 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((l, i) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
            >
              <a
                href={l.href}
                onClick={(e) => smoothScroll(e, l.href)}
                className="group relative text-sm lg:text-base font-medium uppercase tracking-wider"
                style={{ color: "#D7E2EA" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 rounded-3xl px-6 py-6"
            style={{
              background: "rgba(12,12,12,0.92)",
              backdropFilter: "blur(14px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => {
                      smoothScroll(e, l.href);
                      setOpen(false);
                    }}
                    className="block text-xl font-medium uppercase tracking-wider"
                    style={{ color: "#D7E2EA" }}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
