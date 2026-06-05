import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { projectImages } from "@/assets/images";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "https://instagram.com/nexatech317", icon: Instagram },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61588872067622", icon: Facebook },
  { label: "Linkedin",  href: "https://www.linkedin.com/in/nexatech/", icon: Linkedin },
  { label: "WhatsApp",  href: "https://wa.me/19284383309", icon: WhatsAppIcon },
];

const projects = [
  { img: projectImages.p1, name: "Haider Estate & Builders", url: "https://haiderestate.com/" },
  { img: projectImages.p2, name: "Pizza 1981",               url: "https://pizza1981.vercel.app/" },
  { img: projectImages.p3, name: "Abbott Nature",            url: "https://abbot2.vercel.app/" },
  { img: projectImages.p4, name: "Smart IoT Solutions",      url: "https://iotcore.vercel.app/" },
  { img: projectImages.p5, name: "$BBB — Big Beautiful Bill",url: "https://bbb-coin.vercel.app/" },
  { img: projectImages.p6, name: "Thread & Twill",           url: "https://bloom-and-thread-61.lovable.app/" },
  { img: projectImages.p7, name: "Solar Care & Electric",    url: "https://solarcare-electric.com/" },
  { img: projectImages.p8, name: "Pavulum",                  url: "https://pavulum.com/" },
];

const row1 = projects.slice(0, 4);
const row2 = projects.slice(4);

function Tile({ src, name, url }: { src: string; name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-2xl flex-shrink-0 overflow-hidden bg-[#1a1a1a]"
      style={{ width: 420, height: 270, cursor: "none" }}
    >
      <img
        src={src}
        loading="lazy"
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <span className="text-white font-medium uppercase tracking-widest text-sm text-center px-4">
          {name}
        </span>
        <span className="flex items-center gap-1 text-[#5EE4E4] text-xs uppercase tracking-widest border border-[#5EE4E4]/60 rounded-full px-4 py-1">
          Live Project
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
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
      {/* Social links row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-14 sm:mb-16 px-4"
      >
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-2 rounded-full border border-white/15 hover:border-[#5EE4E4]/60 hover:text-[#5EE4E4] px-5 py-2.5 text-xs md:text-sm uppercase tracking-widest transition-colors"
              style={{ color: "#D7E2EA" }}
            >
              <Icon className="w-4 h-4" />
              {s.label}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Parallax image rows */}
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${t1}px)`, willChange: "transform" }}
        >
          {tripled1.map((p, i) => (
            <Tile key={`a${i}`} src={p.img} name={p.name} url={p.url} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${t2}px)`, willChange: "transform" }}
        >
          {tripled2.map((p, i) => (
            <Tile key={`b${i}`} src={p.img} name={p.name} url={p.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
