"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";

const workHistory = [
  {
    jobTitle: "Fullstack Developer",
    company: "CodeTribe",
    duration: "Jun 2024 - Present",
    description:
      "Developed responsive web applications using React, Tailwind CSS, and TypeScript. Collaborated with cross-functional teams to deliver high-quality user interfaces and improve performance.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    jobTitle: "Software Engineer",
    company: "Digistrads",
    duration: "2022 - Current",
    description:
      "Developed responsive websites using HTML, CSS, and JavaScript. Built e-commerce solutions integrating shopping carts, payment gateways, and inventory systems. Managed SQL databases, developed backend systems using Django, and built cross-platform apps with Angular and Firebase. Used GitHub for version control and collaborated effectively with teams.",
    stack: ["HTML", "CSS", "JavaScript", "Django", "Angular", "Firebase", "SQL", "Git"],
  },
  {
    jobTitle: "Freelancer",
    company: "Self Employed",
    duration: "2015 - 2022",
    description:
      "Handled diverse projects including hardware installations, client communication, software testing, and debugging. Provided excellent customer service and managed multiple projects efficiently. Demonstrated self-motivation and commitment to continuous learning in the tech industry.",
    stack: ["Hardware", "Networking", "Software Testing", "Client Communication"],
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full bg-bodyColor text-white/80 mx-auto mt-8">
      {workHistory.map((job, index) => (
        <div
          key={index}
          className={`border p-2 lightSky text-white/80 ${
            index === 0 ? "rounded-t-lg" : ""
          } ${index === workHistory.length - 1 ? "rounded-b-lg" : ""} ${
            index === openIndex ? "border-lightSky" : "border-lightSky"
          }`}
        >
          <h2>
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className={`flex items-center justify-between w-full p-5 text-left text-lightSky  ${
                openIndex === index ? "bg-lightSky text-white" : ""
              } hover:bg-lightSky/80 border-lightSky rounded-md focus:outline-none`}
            >
              <span>
                {job.jobTitle} at {job.company}{" "}
                <span className="text-sm text-gray-500">({job.duration})</span>
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </h2>
          {openIndex === index && (
            <>
              <div className="p-5 bg-bodyColor">
                <p className="text-white/80">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 mb-3">
                {job.stack.map((tech, index) => (
                  <Badge key={index} className="text-lightSky border-lightSky">
                    {tech}
                  </Badge>
                ))}
              </div>
              </div>
             
            </>
          )}
        </div>
      ))}
    </div>
  );
}
