"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";

const workHistory = [
  {
    jobTitle: "Frontend Developer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Developed responsive web applications using React, Tailwind CSS, and TypeScript. Collaborated with cross-functional teams to deliver high-quality user interfaces and improve performance.",
    stack: ["NodeJS", "Flutter"],
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Creative Studios",
    duration: "Jun 2020 - Dec 2021",
    description:
      "Designed user-friendly interfaces and created wireframes for mobile and web applications. Conducted usability testing and collaborated with developers to ensure design consistency.",
    stack: ["NodeJS", "Flutter"],
  },
  {
    jobTitle: "Software Engineer Intern",
    company: "NextGen Solutions",
    duration: "Jan 2020 - May 2020",
    description:
      "Assisted in developing backend APIs and frontend features for e-commerce platforms. Worked on improving website load times and optimizing database queries.",
    stack: ["NodeJS", "Flutter"],
  },
  {
    jobTitle: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2018 - 2020",
    description:
      "Built custom websites for small businesses using modern technologies like React, Vue.js, and WordPress. Focused on SEO optimization and cross-browser compatibility.",
    stack: ["NodeJS", "Flutter"],
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
