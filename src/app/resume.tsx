"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Engineering in Electrical/Electronic Engineering",
  },
  {
    icon: PuzzlePieceIcon,
    children: "5+ years Expert Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend/Backend Framework Design Proficiency",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24 scroll-smooth" id="resume">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            About Me
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Transforming Digital Presence Through Strategic Design
            <br/>
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
            <br/>
            Creating digital solutions that empower businesses to succeed in an increasingly connected world.
          </Typography>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full  bg-gray-200 px-3 py-1 text-sm text-neon-pink">WordPress</div>
              <div className="rounded-full  bg-gray-200 px-3 py-1 text-sm text-neon-blue">Shopify</div>
              <div className="rounded-full  bg-gray-200 px-3 py-1 text-sm text-neon-purple">Web Design</div>
              <div className="rounded-full  bg-gray-200 px-3 py-1 text-sm text-neon-green">UI/UX</div>
              <div className="rounded-full  bg-gray-200 px-3 py-1 text-sm text-neon-yellow">E-commerce</div>
              <div className="rounded-full  bg-gray-200 px-3 py-1 text-sm text-neon-orange">AI Integration</div>
            </div>
            <div>
              <Button
                color="gray"
                size="md"
              >
                Let&apos;s Build Together
                <ArrowRightIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-gray ml-2 inline-block align-middle"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
