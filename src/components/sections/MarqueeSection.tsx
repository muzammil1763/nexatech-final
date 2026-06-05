import { useEffect, useRef, useState } from "react";
import p1 from "@/assets/project-3.png.asset.json";
import p2 from "@/assets/project-4.png.asset.json";
import p3 from "@/assets/project-5.png.asset.json";
import p4 from "@/assets/project-6.png.asset.json";
import p5 from "@/assets/project-7.png.asset.json";
import p6 from "@/assets/project-8.png.asset.json";
import p7 from "@/assets/project-9.png.asset.json";
import p8 from "@/assets/project-10.png.asset.json";

const images = [p1.url, p2.url, p3.url, p4.url, p5.url, p6.url, p7.url, p8.url];

const row1 = images.slice(0, 4);
const row2 = images.slice(4);

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      loading="lazy"
      alt=""
      className="rounded-2xl object-cover flex-shrink-0"
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
        <div className="flex gap-3" style={{ transform: `translateX(${t1}px)`, willChange: "transform" }}>
          {tripled1.map((src, i) => <Tile key={`a${i}`} src={src} />)}
        </div>
        <div className="flex gap-3" style={{ transform: `translateX(${t2}px)`, willChange: "transform" }}>
          {tripled2.map((src, i) => <Tile key={`b${i}`} src={src} />)}
        </div>
      </div>
    </section>
  );
}
