import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import LabNotes from "@/components/LabNotes";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />
      <main>
        <Hero />
        <Publications />
        <LabNotes />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
