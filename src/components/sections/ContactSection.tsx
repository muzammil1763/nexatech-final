import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { FadeIn } from "../FadeIn";
import { AnimatedText } from "../AnimatedText";
import { ContactButton } from "../ContactButton";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "https://instagram.com/nexatech317", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588872067622", icon: Facebook },
  { label: "Linkedin", href: "https://www.linkedin.com/in/nexatech/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/19284383309", icon: WhatsAppIcon },
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
