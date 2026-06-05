import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import nexaLogo from "@/assets/nexa-logo.png";

const navLinks = [
  { label: "Home",     href: "#top" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3"
    >
      {/* ── Logo above the pill ── */}
      <a
        href="#top"
        onClick={(e) => { smoothScroll(e, "#top"); setActive("home"); }}
        aria-label="Nexa Tech home"
        className="hidden md:flex items-center justify-center mb-1"
      >
        <img
          src={nexaLogo}
          alt="Nexa Tech"
          className="h-14 w-auto object-contain drop-shadow-lg"
        />
      </a>

      {/* ── Desktop links pill ── */}
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.88)" : "rgba(10,10,10,0.55)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.1)"
            : "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ backdropFilter: "blur(20px)", borderRadius: 999 }}
        className="hidden md:flex items-center gap-1 px-3 py-2"
      >
        {navLinks.map((l) => (
          <NavLink key={l.label} l={l} active={active} setActive={setActive} />
        ))}
      </motion.nav>

      {/* ── Mobile bar ── */}
      <div className="md:hidden w-full px-4">
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(10,10,10,0.88)" : "rgba(10,10,10,0.55)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.09)"
              : "inset 0 0 0 1px rgba(255,255,255,0.07)",
          }}
          transition={{ duration: 0.35 }}
          style={{ backdropFilter: "blur(18px)", borderRadius: 999 }}
          className="flex items-center justify-between px-4 py-2.5"
        >
          <a href="#top" onClick={(e) => smoothScroll(e, "#top")} aria-label="Nexa Tech home">
            <img src={nexaLogo} alt="Nexa Tech" className="h-9 w-auto object-contain" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-white p-1"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-3xl px-6 py-5"
              style={{
                background: "rgba(10,10,10,0.93)",
                backdropFilter: "blur(18px)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => { smoothScroll(e, l.href); setOpen(false); }}
                      className="block text-lg font-medium uppercase tracking-wider"
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
      </div>
    </motion.header>
  );
}

function NavLink({
  l,
  active,
  setActive,
}: {
  l: { label: string; href: string };
  active: string;
  setActive: (s: string) => void;
}) {
  const isActive = active === l.label.toLowerCase();

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <a
      href={l.href}
      onClick={(e) => {
        smoothScroll(e, l.href);
        setActive(l.label.toLowerCase());
      }}
      className="relative px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-widest transition-colors duration-200"
      style={{ color: isActive ? "#fff" : "rgba(215,226,234,0.65)" }}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(255,255,255,0.11)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative z-10">{l.label}</span>
      {/* active dot */}
      <span
        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-opacity duration-200"
        style={{ background: "#5EE4E4", opacity: isActive ? 1 : 0 }}
      />
    </a>
  );
}
