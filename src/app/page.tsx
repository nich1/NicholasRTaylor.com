import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PersonStructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <PersonStructuredData />
      <Nav />
      <main id="main" className="flex flex-col">
        <Hero />
        <AboutMe />
        <Projects id="projects" />
        <Experience id="experience" />
        <Education id="education" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
