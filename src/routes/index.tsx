import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexa Tech — App, Web & AI Automation" },
      { name: "description", content: "Nexa Tech builds modern apps, websites, and AI automation systems for forward-thinking businesses." },
      { property: "og:title", content: "Nexa Tech — App, Web & AI Automation" },
      { property: "og:description", content: "Nexa Tech builds modern apps, websites, and AI automation systems." },
    ],
  }),
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip", scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
