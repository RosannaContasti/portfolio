import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="background-static">
        <Navbar />
        <Header />
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
