import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../FadeIn";
import { LiveProjectButton } from "../ContactButton";
import { projectImages } from "@/assets/images";

const projects = [
  { n: "01", category: "Real Estate",       name: "Haider Estate & Builders",   img: projectImages.p1, url: "https://haiderestate.com/" },
  { n: "02", category: "Food & Delivery",   name: "Pizza 1981",                 img: projectImages.p2, url: "https://pizza1981.vercel.app/" },
  { n: "03", category: "Real Estate",       name: "Abbott Nature",              img: projectImages.p3, url: "https://abbot2.vercel.app/" },
  { n: "04", category: "IoT Systems",       name: "Smart IoT Solutions",        img: projectImages.p4, url: "https://iotcore.vercel.app/" },
  { n: "05", category: "Web3",              name: "$BBB — Big Beautiful Bill",  img: projectImages.p5, url: "https://bbb-coin.vercel.app/" },
  { n: "06", category: "E-Commerce",        name: "Thread & Twill",             img: projectImages.p6, url: "https://bloom-and-thread-61.lovable.app/" },
  { n: "07", category: "Solar & Electric",  name: "Solar Care & Electric",      img: projectImages.p7, url: "https://solarcare-electric.com/" },
  { n: "08", category: "Books & Community", name: "Pavulum",                    img: projectImages.p8, url: "https://pavulum.com/" },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
  range,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="h-[85vh] sticky flex items-start justify-center"
      style={{ top: `${96 + index * 28}px` }}
    >
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
              <span
                className="uppercase tracking-widest font-light text-xs sm:text-sm"
                style={{ color: "#D7E2EA", opacity: 0.6 }}
              >
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
          <LiveProjectButton href={project.url} />
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.img}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#1a1a1a]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.img}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#1a1a1a]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="col-span-3">
            <img
              src={project.img}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#1a1a1a]"
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
