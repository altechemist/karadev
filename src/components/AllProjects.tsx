import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { listedRepos } from "@/constants";

// Define types for project and component props
interface Project {
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  links: { href: string; label: string }[];
}

interface AllProjectsProps {
  projects: Project[];
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects }) => {
  // Filter projects
  const filteredProjects = projects.filter((project) => {
    return !listedRepos.some((listed) =>
      project.title.toLowerCase().includes(listed.toLowerCase())
    );
  });
  

  return (
    <div className="px-4 py-8">
      {/* Filters */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="rounded-lg  bg-lightSky/5 border border-lightSky/20 p-4">
            <h3 className="text-xl text-lightSky mb-2">{project.title}</h3>
            <p className="text-sm text-white/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, idx) => (
                <Badge key={idx} className="text-lightSky border-lightSky">
                  {tech}
                </Badge>
              ))}
            </div>
            {project.links.map((link, linkIndex) => (
              <Button
                key={linkIndex}
                onClick={() => window.open(link.href, "_blank")}
                className="mt-2 bg-lightSky text-bodyColor hover:bg-lightSky/80"
              >
                {link.label}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
