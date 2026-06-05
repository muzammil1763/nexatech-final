import { motion } from "framer-motion";
import { FadeIn } from "../FadeIn";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", name: "App Development", desc: "Building high-performance native and cross-platform mobile applications with intuitive interfaces, robust architecture, and scalable backends." },
  { n: "02", name: "Web Development", desc: "Designing and engineering modern, responsive websites and web platforms — from marketing sites to complex SaaS dashboards." },
  { n: "03", name: "AI Automation", desc: "Streamlining operations with intelligent agents, custom AI workflows, and automation systems that save time and unlock new capabilities." },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#FFFFFF", color: "#0C0C0C" }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        >
          Services
        </h2>
      </FadeIn>
      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 12 }}
            className="group relative flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12 cursor-pointer overflow-hidden"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <motion.span
              aria-hidden
              className="absolute inset-0 -z-0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: "#0C0C0C", transformOrigin: "left" }}
            />
            <div
              className="font-black flex-shrink-0 relative z-10 transition-colors duration-500 group-hover:text-white"
              style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {s.n}
            </div>
            <div className="flex flex-col gap-3 md:gap-4 pt-2 relative z-10 flex-1">
              <h3
                className="font-medium uppercase transition-colors duration-500 group-hover:text-white"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl transition-colors duration-500 group-hover:text-white/80"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
              >
                {s.desc}
              </p>
            </div>
            <ArrowUpRight
              className="relative z-10 w-8 h-8 md:w-12 md:h-12 flex-shrink-0 mt-2 transition-all duration-500 group-hover:text-white group-hover:rotate-45"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
