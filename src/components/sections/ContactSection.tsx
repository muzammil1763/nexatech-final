import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { FadeIn } from "../FadeIn";
import { AnimatedText } from "../AnimatedText";
import { ContactButton } from "../ContactButton";

const socials = [
  { label: "Instagram @nexatech317", href: "https://instagram.com/nexatech317", icon: Instagram },
  { label: "Facebook @nexatech317", href: "https://facebook.com/nexatech317", icon: Facebook },
  { label: "Linkedin", href: "https://linkedin.com/company/nexatech317", icon: Linkedin },
];

const headingLines = ["Let's create", "together"];

function AnimatedHeadingChar({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [40, 0]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ opacity, y }}
        className="absolute left-0 top-0 hero-heading"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

function AnimatedHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  const totalChars = headingLines.reduce((acc, l) => acc + l.length, 0);
  let charIndex = 0;

  return (
    <h2
      ref={ref}
      className="font-black uppercase leading-[0.9] tracking-tight"
      style={{ fontSize: "clamp(3rem, 13vw, 16rem)" }}
    >
      {headingLines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split("").map((c, i) => {
            const start = charIndex / totalChars;
            const end = (charIndex + 1) / totalChars;
            charIndex += 1;
            return (
              <AnimatedHeadingChar
                key={`${lineIdx}-${i}`}
                char={c}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </span>
      ))}
    </h2>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 pt-24 md:pt-40 pb-10 md:pb-14"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <FadeIn>
        <p
          className="uppercase tracking-[0.3em] text-xs md:text-sm mb-6 md:mb-10"
          style={{ color: "#D7E2EA" }}
        >
          / Contact
        </p>
      </FadeIn>

      <AnimatedHeading />

      <div className="mt-14 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <FadeIn delay={0.15}>
          <AnimatedText
            text="Have a project in mind or just want to say hi? I'm always open to new collaborations and creative conversations."
            className="uppercase tracking-wide font-light leading-snug max-w-md text-white"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.5rem)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8"
          >
            <ContactButton />
          </motion.div>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {[
            { label: "info@nexatech.agency", href: "mailto:info@nexatech.agency", icon: Mail, upper: false },
            ...socials.map((s) => ({ ...s, upper: true })),
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ x: 6 }}
                className="group flex items-center justify-between border-b border-white/15 pb-4 hover:border-white/60 transition-colors"
              >
                <span
                  className={`flex items-center gap-3 text-white text-lg md:text-2xl font-light ${item.upper ? "uppercase tracking-wide" : ""}`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  {item.label}
                </span>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>
      </div>

    </section>
  );
}
