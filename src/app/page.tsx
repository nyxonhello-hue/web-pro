import Hero from "@/components/Hero";
import { About, Contact, Lab, Process, Skills, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Process />
      <Lab />
      <Contact />
    </>
  );
}
