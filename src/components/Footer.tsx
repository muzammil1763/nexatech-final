import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import nexaLogo from "@/assets/nexa-logo.png";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socials = [
  { label: "Instagram @nexatech317", href: "https://instagram.com/nexatech317", icon: Instagram },
  { label: "Facebook Nexa Tech", href: "https://www.facebook.com/profile.php?id=61588872067622", icon: Facebook },
  { label: "Linkedin", href: "https://www.linkedin.com/in/nexatech/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/19284383309", icon: WhatsAppIcon },
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
