import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  additionalImages: string[];
  features: string[];
  liveLink: string;
  technologies: string[];
}

export function ProjectCard({ 
  img, 
  title, 
  desc,
  additionalImages,
  features,
  liveLink,
  technologies, 
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <Card color="transparent" shadow={false}>
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-0">
          <a
            href="#"
            className="text-blue-gray-900 transition-colors hover:text-gray-800"
          >
            <Typography variant="h5" className="mb-2">
              {title}
            </Typography>
          </a>
          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
          <Button color="gray" size="sm" onClick={() => setIsModalOpen(true)}>
            see details
          </Button>
        </CardBody>
      </Card>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{ title, desc, additionalImages, features, liveLink, technologies }}
      />
    </>
  );
}

export default ProjectCard;
