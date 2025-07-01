"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Web & App Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites & apps that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Business Automation",
    children:
      "Custom automation solutions that streamline workflows and enable 24/7 global operations.",
  },
  {
    icon: HashtagIcon,
    title: " Website Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "Compelling visual storytelling that transcends language barriers and creates emotional connections. I create interfaces that are aesthetically pleasing.",
  },
  {
    icon: SwatchIcon,
    title: "Digital Strategy",
    children:
      "Data-driven insights to help you make strategic decisions for expanding into new markets.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  return (
    <section className="px-8 scroll-smooth" id="services">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Solutions I Provide
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Services
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Solutions designed to position your business for international success.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
