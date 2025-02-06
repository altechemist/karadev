"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import image from "../../public/path.png";
import { featuredRepos } from "@/constants";

interface Project {
  title: string;
  description: string;
  stack: string[];
  links: { href: string; label: string; icon?: React.ReactNode }[];
  blog?: string;
  imageUrl?: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [projects]);

  return (
    <div
      className="relative w-full px-4 py-8 md:px-20 md:py-12"
      data-carousel="slide"
    >
      <div className="relative w-full h-full md:h-96 overflow-hidden rounded-lg">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center p-4 space-y-6 md:space-y-0 md:space-x-14">
              <div className="flex-shrink-0 w-full sm:w-48 sm:h-48 md:w-72 md:h-72">
                <p>{featuredRepos[index].imageUrl}</p>
                <Image
                  src={featuredRepos[index].imageUrl || image}
                  alt={project.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="rounded-xl w-full h-full"
                />
              </div>
              <div className="flex-1 text-white text-center md:text-start">
                <h3 className="text-xl text-lightSky md:text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-wrap md:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center md:justify-start flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <Badge key={idx} className="text-lightSky border-lightSky">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Separator className="mt-2 mb-2 bg-lightSky opacity-25" />

                <div className="flex justify-center md:justify-start flex-wrap gap-2 mb-4">
                  {/* Render Blog button if it exists */}
                  <div className="flex gap-2">
                    <Button
                      className="mt-4 bg-lightSky text-bodyColor hover:bg-lightSky/80"
                      onClick={() => {
                        // Generate the project-specific blog link
                        const blogUrl = `${
                          window.location.origin
                        }/blog/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`;
                        window.open(blogUrl, "_blank");
                      }}
                    >
                      Blog
                    </Button>
                  </div>

                  {/* Render project links */}
                  <div className="flex gap-2">
                    {project.links.map((link, idx) => (
                      <Button
                        key={idx}
                        className="mt-4 bg-lightSky text-bodyColor hover:bg-lightSky/80"
                        onClick={() => window.open(link.href, "_blank")}
                      >
                        {link.icon} {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-28 md:top-0 left-0 z-30 flex items-center justify-center h-full md:px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-lightSky/30 group-hover:bg-lightSky/50">
          <svg
            className="w-3 h-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-28 md:top-0 right-0 z-30 flex items-center justify-center h-full md:px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-lightSky/30 group-hover:bg-lightSky/50">
          <svg
            className="w-3 h-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default FeaturedProjects;
