import { Container } from "@/components/Container";
import { TooltipContent, TooltipProvider } from "../../components/ui/tooltip";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import React from "react";
import Accordion from "@/components/Accordion";
import { IconType } from "react-icons";

import { toolsData } from "@/constants";
import GoalsAchievementsAccordion from "@/components/Goals";

export default function ExperiencePage() {
  interface Tool {
    name: string;
    icon: IconType;
    description: string;
    skillLevel: string;
  }

  // Render tool cards with tooltips
  const renderToolCards = (tools: Tool[]) => {
    if (!tools || tools.length === 0) {
      return (
        <p className="text-lightSky text-center">
          No tools available in this category.
        </p>
      );
    }

    return tools.map((tool) => (
      <TooltipProvider key={tool.name}>
        <Tooltip>
          <TooltipTrigger asChild aria-label={`Tool: ${tool.name}`}>
            <div className="group basis-1/4 relative p-4 rounded-xl  border-lightSky/30 hover:bg-lightSky/10 cursor-pointer transition-all duration-300">
              <div className="text-center">
                <div className="flex justify-center mb-4 text-lightSky text-2xl">
                  {React.createElement(tool.icon)}
                </div>
                <h3 className="text-sm md:inline-flex md:text-lg text-white/80">
                  {tool.name}
                </h3>
              </div>
              <TooltipContent className="bg-hoverColor text-white p-2 rounded-lg shadow-lg font-semibold text-sm">
                Skill Level: {tool.skillLevel}
              </TooltipContent>
            </div>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    ));
  };

  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="bg-bodyColor text-white/80 px-4 py-20 md:px-20 md:py-16 min-h-screen content-center">
        <h1 className="text-3xl text-center md:text-5xl font-bold text-lightSky">
          Professional Experience
        </h1>

        {/* Description */}
        <p className="text-center text-white/70 text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          I have hands-on experience with various frontend, backend, database,
          and development tools. Over the years, I have honed my skills to
          design and build efficient, user-friendly applications. I&apos;m
          familiar with industry-standard practices, modern frameworks, and
          deployment strategies, which enable me to deliver high-quality
          solutions.
        </p>

        {/* Accordion for Work Experience */}
        <Accordion />

        <section className="text-center text-white py-12">
          <h2 className="text-3xl md:text-5xl font-bold text-lightSky mt-4">
            Goals and Achievements
          </h2>

          <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto text-white/70">
            As a passionate software developer, I thrive on solving real-world
            problems and continuously improving my skills. My journey in
            development has allowed me to work with diverse technologies and
            frameworks, always striving for innovation and excellence.
          </p>

         <GoalsAchievementsAccordion />
        </section>

        {/* Frontend Tools */}
        <div className="mt-10">
          <h2
            className="text-2xl font-bold text-white mb-4"
            role="heading"
            aria-level={2}
          >
            Frontend
          </h2>
          <div className="flex overflow-auto scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {renderToolCards(toolsData.frontendTools)}
          </div>
        </div>

        {/* Backend Tools */}
        <div className="mt-10">
          <h2
            className="text-2xl font-bold text-white mb-4"
            role="heading"
            aria-level={2}
          >
            Backend
          </h2>
          <div className="flex overflow-auto scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {renderToolCards(toolsData.backendTools)}
          </div>
        </div>

        {/* Databases */}
        <div className="mt-10">
          <h2
            className="text-2xl font-bold text-white mb-4"
            role="heading"
            aria-level={2}
          >
            Databases
          </h2>
          <div className="flex overflow-auto scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {renderToolCards(toolsData.databaseTools)}
          </div>
        </div>

        {/* Dev Tools */}
        <div className="mt-10">
          <h2
            className="text-2xl font-bold text-white mb-4"
            role="heading"
            aria-level={2}
          >
            Dev Tools
          </h2>
          <div className="flex overflow-auto scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {renderToolCards(toolsData.devTools)}
          </div>
        </div>
      </Container>
    </div>
  );
}
