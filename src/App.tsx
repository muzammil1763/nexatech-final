import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";

export function App() {
  return (
    <>
      <CustomCursor />
      <main style={{ background: "#0C0C0C", overflowX: "clip", scrollBehavior: "smooth", cursor: "none" }}>
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
