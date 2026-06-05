import { Magnet } from "../Magnet";
import { ContactButton } from "../ContactButton";
import { FadeIn } from "../FadeIn";
import heroCyborg from "@/assets/hero-cyborg.png";

// Repeated enough times so the loop looks seamless at any screen width
const REPEAT = 6;
const items = Array.from({ length: REPEAT }, (_, i) => i);

export function HeroSection() {
  return (
    <section
      id="top"
      className="h-screen flex flex-col relative pt-24 md:pt-28"
      style={{ overflowX: "clip" }}
    >
      {/* ── Marquee heading ── */}
      <div
        className="relative z-0 select-none"
        style={{
          transform: "rotate(-6deg)",
          margin: "2rem -8vw",
          padding: "0.5rem 0",
          overflow: "hidden",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee-left 12s linear infinite" }}
        >
          {items.map((i) => (
            <span
              key={i}
              className="hero-heading font-black uppercase tracking-tight leading-none flex-shrink-0 pr-[0.35em]"
              style={{ fontSize: "clamp(3rem, 17.5vw, 220px)" }}
            >
              Nexa Tech
            </span>
          ))}
        </div>
      </div>

      {/* ── Cyborg image ── */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={heroCyborg}
            alt="Glowing cyan cybernetic head"
            className="w-full h-auto"
          />
        </FadeIn>
      </Magnet>

      {/* ── Bottom bar ── */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: "#D7E2EA", fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            we build apps, websites & AI systems that move businesses forward
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
