"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/astro1.png`,
    title: "AstroNote, SaaS website",
    desc: "A SaaS website, for an instant sync cloud Notes product/service.  .",
    additionalImages: [
      `${getImagePrefix()}image/astro1.png`,
      `${getImagePrefix()}image/astro2.png`,
    ],
    features: [
      "Responsive design",
      "Clear Minimalist design",
      "Product Overview section",
      "Blog section",
      "Fast load times",
      "User Reviews/Testimonials",
      "Intuitive Pricing model",
    ],
    liveLink: "https://dahsample2.hstn.me",
    technologies: ["WordPress", "ProElement", "Elementor", "Custom Styling", "Ultimate Header & Footer", ],
  },
  {
    img: `${getImagePrefix()}image/falcus1.png`,
    title: "FalcusMedia Ltd",
    desc: "A company portfolio and Client management system for an Account Manager of various content creators.",
    additionalImages: [
      `${getImagePrefix()}image/falcus2.png`,
      `${getImagePrefix()}image/falcus3.png`,
    ],
    features: [
      "Company Portfolio",
      "Client Contract System",
      "Client/User Profile Dashboard",
      "Admin Management Dashboard",
      "Interactive Consultation form",
      "Payout Update Dashboard",
      "Customer Support System",
      "Loan Application Form",
      "...",

    ],
    liveLink: "https://falcusmedia.com",
    technologies: ["WordPress", "Advanved Custom Field, ACF", "PHP", "JavaScript/HTML/CSS", "ProElement", "Custom Theme/Plugin Modification", "Ultimate Member","...", ],
  },
  {
    img: `${getImagePrefix()}image/digi1.png`,
    title: "Digi, Waitlister",
    desc: "A waitlist for a SaaS. Digi, website that is intuitive and compelling for anticipating users to join the waitlist.",
    additionalImages: [
      `${getImagePrefix()}image/digi1.png`,
      `${getImagePrefix()}image/digi2.png`,
    ],
    features: [
      "Responsive design",
      "Interactive Waitlist forms",
      "SEO optimization",
      "Fast load times",
      "Awesome design",
    ],
    liveLink: "https://dahsample1.hstn.me/",
    technologies: ["WordPress", "ProElement", "Elementor", "Form Builder",],
  },
  {
    img: `${getImagePrefix()}image/simpl3.png`,
    title: "Simpl, SaaS Website",
    desc: "A SaaS website offering an excellent task management product, showcasing product features and usecase..",
    additionalImages: [
      `${getImagePrefix()}image/simpl1.png`,
      `${getImagePrefix()}image/simpl4.png`,
    ],
    features: [
      "Minimalist design",
      "Responsive layout",
      "Interactive download buttons",
      "SEO optimization",
      "Interactive FAQs section",
      "Fast load times",
      "Pricing Comparision model",

    ],
    liveLink: "http://dahsample3.hstn.me",
    technologies: ["WordPress", "ProElement", "Elementor", "Accordion Edit", "Ultimate Header & Footer", ],
  },
  {
    img: `${getImagePrefix()}image/chido1.png`,
    title: "CHIDOREK, A wedding website",
    desc: "A Wedding website. Celebrating love and commitment #CHIDOREK2025..  .",
    additionalImages: [
      `${getImagePrefix()}image/chido2.png`,
      `${getImagePrefix()}image/chido3.png`,
    ],
    features: [
      "Responsive design",
      "Clear Minimalist design",
      "Intuitive RSVP section",
      "'Our Moments' - Photo Gallery",
      "CLear Registry/Gifting section",
      "D-Day Timer CountDown",
      "FAQs section",
    ],
    liveLink: "https://www.chidorek.love/",
    technologies: ["React", "Tailwind", "Netlify Form", "Cursor ai", ],
  },
  {
    img: `${getImagePrefix()}image/voxed1.png`,
    title: "VoxEd, EdTech website",
    desc: "An EdTech website, for an AI-Powered translation SaaS Bridging Language Barriers in Education - Transforming Education with AI-Powered Translation.",
    additionalImages: [
      `${getImagePrefix()}image/voxed2.png`,
      `${getImagePrefix()}image/voxed3.png`,
    ],
    features: [
      "Responsive design",
      "Clear Minimalist design",
      "Landing page Overview",
      "Intuitive User DashBoard",
      "Interactive File Upload",
    ],
    liveLink: "https://dahormes-edtech.netlify.app/",
    technologies: ["React", "Tailwind", ],
  }
];

export function Projects() {
  return (
    <section className="py-28 px-8 scroll-smooth" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Explore how I&apos;ve helped businesses establish powerful digital presences.
          Whether you have an online idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality. 
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;



  {/*
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    additionalImages: [
      `${getImagePrefix()}image/blog-1.svg`,
      `${getImagePrefix()}image/blog2.svg`,
      `${getImagePrefix()}image/blog3.svg`,
      `${getImagePrefix()}image/blog4.svg`,
    ],
    features: [
      "User-friendly interface",
      "Real-time restaurant search",
      "User reviews and ratings",
      "Location-based recommendations",
    ],
    liveLink: "https://example.com/restaurant-app",
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  */}