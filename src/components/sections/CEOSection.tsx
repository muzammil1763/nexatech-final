import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FadeIn } from "../FadeIn";

export function CEOSection() {
  return (
    <section
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn y={30}>
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-6 md:mb-10" style={{ color: "#5EE4E4" }}>
            / Leadership
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Avatar */}
          <FadeIn delay={0.1} x={-40} y={0}>
            <div className="relative flex-shrink-0">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #5EE4E4 0%, transparent 70%)" }}
              />
              <div
                className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full flex items-center justify-center border-2 border-[#5EE4E4]/30"
                style={{ background: "linear-gradient(135deg, #0E8B8B22 0%, #0C0C0C 100%)" }}
              >
                <span
                  className="font-black uppercase text-center hero-heading select-none"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1 }}
                >
                  MA
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Info */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <FadeIn delay={0.15} y={24}>
              <p
                className="uppercase tracking-widest font-light text-sm"
                style={{ color: "#5EE4E4" }}
              >
                Chief Executive Officer
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={24}>
              <h2
                className="font-black uppercase leading-none tracking-tight hero-heading"
                style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
              >
                Muzammil
                <br />
                Aziz
              </h2>
            </FadeIn>

            <FadeIn delay={0.28} y={20}>
              <p
                className="font-light leading-relaxed max-w-lg"
                style={{ color: "#D7E2EA", fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)", opacity: 0.75 }}
              >
                Visionary founder and CEO of Nexa Tech, driving the company's mission to deliver
                cutting-edge digital solutions. With deep expertise in technology strategy and
                product development, Muzammil leads a passionate team building the future of
                apps, web platforms, and AI automation.
              </p>
            </FadeIn>

            <FadeIn delay={0.35} y={16}>
              <motion.a
                href="mailto:muzammilk1763@gmail.com"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 group"
                style={{ color: "#D7E2EA" }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[#5EE4E4]/30 group-hover:border-[#5EE4E4] transition-colors duration-300"
                  style={{ background: "rgba(94,228,228,0.06)" }}
                >
                  <Mail className="w-4 h-4 text-[#5EE4E4]" />
                </span>
                <span
                  className="font-light tracking-wide group-hover:text-[#5EE4E4] transition-colors duration-300"
                  style={{ fontSize: "clamp(0.85rem, 1.3vw, 1rem)" }}
                >
                  muzammilk1763@gmail.com
                </span>
              </motion.a>
            </FadeIn>

            {/* Divider line */}
            <FadeIn delay={0.4}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="h-px w-full max-w-xs origin-left mt-2"
                style={{ background: "linear-gradient(90deg, #5EE4E4, transparent)" }}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
