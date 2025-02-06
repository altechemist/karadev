"use client";

import React, { useState } from "react";
import { goalsAndAchievements } from "@/constants";

export default function GoalsAchievementsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full bg-bodyColor text-white/80 mx-auto mt-8">
      {goalsAndAchievements.map((section, index) => (
        <div
          key={index}
          className={`border p-2 lightSky text-white/80 ${
            index === 0 ? "rounded-t-lg" : ""
          } ${
            index === goalsAndAchievements.length - 1 ? "rounded-b-lg" : ""
          } ${index === openIndex ? "border-lightSky" : "border-lightSky"}`}
        >
          <h2>
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className={`flex items-center justify-between w-full p-5 text-left text-lightSky  ${
                openIndex === index ? "bg-lightSky text-white" : ""
              } hover:bg-lightSky/80 border-lightSky rounded-md focus:outline-none`}
            >
              <span>{section.title}</span>
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
            <div className="p-5 bg-bodyColor">
              <ul className="text-white/80 space-y-3 text-start">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
