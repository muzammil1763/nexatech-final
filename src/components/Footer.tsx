import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import nexaLogo from "@/assets/nexa-logo.png";

const socials = [
  { label: "Instagram @nexatech317", href: "https://instagram.com/nexatech317", icon: Instagram },
  { label: "Facebook Nexa Tech", href: "https://www.facebook.com/profile.php?id=61588872067622", icon: Facebook },
  { label: "Linkedin", href: "https://www.linkedin.com/in/nexatech/", icon: Linkedin },
];

export function Footer() {
  return (
    <footer
      className="relative px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-10 overflow-hidden"
      style={{ background: "#0C0C0C", color: "#D7E2EA" }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, #0E8B8B, #2DC5C5, #5EE4E4, transparent)",
        }}
      />

      <div className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm opacity-70 mb-4"
        >
          / Made with care
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src={nexaLogo}
            alt="Nexa Tech logo"
            className="h-32 sm:h-44 md:h-56 lg:h-64 w-auto object-contain"
          />
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8"
        >
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group flex items-center gap-2 rounded-full border border-white/15 hover:border-white/60 px-5 py-2.5 text-xs md:text-sm uppercase tracking-widest transition-colors"
              >
                <Icon className="w-4 h-4" />
                {s.label}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 md:mt-24 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
      >
        <p className="text-xs md:text-sm uppercase tracking-widest opacity-70">
          © {new Date().getFullYear()} Nexa Tech — All rights reserved
        </p>
        <p className="text-xs md:text-sm uppercase tracking-widest opacity-70">
          Apps · Web · AI Automation
        </p>
      </motion.div>
    </footer>
  );
}
