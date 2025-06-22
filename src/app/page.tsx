import Navbar from "./Navbar";
import MiddleHome from "./MiddleHome";
import AccoladeList from "./AccoladeList";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nick\'s Portfolio',
  icons: {
    icon: "appicon.png"
  }
}

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar/>
      <MiddleHome/>
      <AccoladeList/>
      <AboutMe/>
      <Projects id="projects"/>
      <Experience id="experience"/>
      <Education id="education"/>
      <Contact/>
    </main>
  );
}