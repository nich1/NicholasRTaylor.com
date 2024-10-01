import Navbar from "./Navbar";
import MiddleHome from "./MiddleHome";
import AccoladeList from "./AccoladeList";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
export default function Home() {
  return (
    <main className="!scroll-smooth">
      <Navbar/>
      <MiddleHome/>
      <AccoladeList/>
      <AboutMe/>
      <Projects/>
      <Education/>
      <Contact/>
    </main>
  );
}

/*
<main className="!scroll-smooth">
      <Navbar/>
      <MiddleHome/>
      <AccoladeList/>
      <AboutMe/>
      <Projects/>
      <Education/>
      <Contact/>
    </main>
*/
