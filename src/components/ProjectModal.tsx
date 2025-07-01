import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    desc: string;
    additionalImages: string[];
    features: string[];
    liveLink: string;
    technologies: string[];
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
      onClick={onClose}>
      <div className="relative bg-white w-full h-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 rounded-lg md:m-4">
        {/* Close Icon */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <XMarkIcon className="h-8 w-8" />
        </Button>

        {/* Modal Content */}
        <Typography variant="h3" color="blue-gray" className="mb-4">
          {project.title}
        </Typography>
        <Typography className="mb-6 font-normal text-gray-600">
          {project.desc}
        </Typography>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {project.additionalImages.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${project.title} image ${idx + 1}`}
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Features */}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Features
        </Typography>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Technologies */}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Technologies Used
        </Typography>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Link */}
        <Button
          color="blue"
          size="lg"
          onClick={() => window.open(project.liveLink, "_blank")}
        >
          Visit Live Website
        </Button>
      </div>
    </div>
  );
}

export default ProjectModal;