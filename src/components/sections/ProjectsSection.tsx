import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../FadeIn";
import { LiveProjectButton } from "../ContactButton";
import p1 from "@/assets/project-3.png.asset.json";
import p2 from "@/assets/project-4.png.asset.json";
import p3 from "@/assets/project-5.png.asset.json";
import p4 from "@/assets/project-6.png.asset.json";
import p5 from "@/assets/project-7.png.asset.json";
import p6 from "@/assets/project-8.png.asset.json";
import p7 from "@/assets/project-9.png.asset.json";
import p8 from "@/assets/project-10.png.asset.json";

const projects = [
  { n: "01", category: "Real Estate", name: "Haider Estate & Builders", img1: p1.url, img2: p1.url, img3: p1.url },
  { n: "02", category: "Food & Delivery", name: "Pizza 1981", img1: p2.url, img2: p2.url, img3: p2.url },
  { n: "03", category: "Real Estate", name: "Abbott Nature", img1: p3.url, img2: p3.url, img3: p3.url },
  { n: "04", category: "IoT Systems", name: "Smart IoT Solutions", img1: p4.url, img2: p4.url, img3: p4.url },
  { n: "05", category: "Web3", name: "$BBB — Big Beautiful Bill", img1: p5.url, img2: p5.url, img3: p5.url },
  { n: "06", category: "E-Commerce", name: "Thread & Twill", img1: p6.url, img2: p6.url, img3: p6.url },
  { n: "07", category: "Solar & Electric", name: "Solar Care & Electric", img1: p7.url, img2: p7.url, img3: p7.url },
  { n: "08", category: "Books & Community", name: "Pavulum", img1: p8.url, img2: p8.url, img3: p8.url },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
  range,
}: {
  project: typeof projects[number];
  index: number;
  total: number;
  progress: any;
  range: [number, number];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex items-start justify-center" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale, background: "#0C0C0C" }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <div
              className="font-black hero-heading"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {project.n}
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="uppercase tracking-widest font-light text-xs sm:text-sm" style={{ color: "#D7E2EA", opacity: 0.6 }}>
                {project.category}
              </span>
              <span
                className="font-medium uppercase"
                style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.img1}
              alt=""
              loading="lazy"
              className="w-full object-contain rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-black"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.img2}
              alt=""
              loading="lazy"
              className="w-full object-contain rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-black"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="col-span-3">
            <img
              src={project.img3}
              alt=""
              loading="lazy"
              className="w-full h-full object-contain rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-black"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {projects.map((p, i) => {
          const start = i / projects.length;
          const end = (i + 1) / projects.length;
          return (
            <ProjectCard
              key={p.n}
              project={p}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </div>
    </section>
  );
}
