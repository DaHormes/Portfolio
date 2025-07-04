// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
//import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
//import Testimonial from "./testimonial";
//import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}


//      <Clients />
//      <Testimonial />
//      <PopularClients />