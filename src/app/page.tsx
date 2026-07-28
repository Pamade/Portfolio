import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
