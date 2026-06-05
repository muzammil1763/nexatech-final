import { useEffect, useRef, useState } from "react";
import { projectImages } from "@/assets/images";

const images = [
  projectImages.p1,
  projectImages.p2,
  projectImages.p3,
  projectImages.p4,
  projectImages.p5,
  projectImages.p6,
  projectImages.p7,
  projectImages.p8,
];

const row1 = images.slice(0, 4);
const row2 = images.slice(4);

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      loading="lazy"
      alt=""
      className="rounded-2xl object-cover flex-shrink-0 bg-[#1a1a1a]"
      style={{ width: 420, height: 270 }}
    />
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const o = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(o);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  const t1 = offset - 200;
  const t2 = -(offset - 200);

  const tripled1 = [...row1, ...row1, ...row1];
  const tripled2 = [...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${t1}px)`, willChange: "transform" }}
        >
          {tripled1.map((src, i) => (
            <Tile key={`a${i}`} src={src} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${t2}px)`, willChange: "transform" }}
        >
          {tripled2.map((src, i) => (
            <Tile key={`b${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
