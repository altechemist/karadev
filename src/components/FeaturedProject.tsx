"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Container } from "./Container";
import frame from "../../public/smartphone.png";

const projects = [
  {
    name: "Project One",
    description: "This is the first project description.",
    image: "/project1.png",
    link: "#",
  },
  {
    name: "Project Two",
    description: "This is the second project description.",
    image: "/project2.png",
    link: "#",
  },
  {
    name: "Project Three",
    description: "This is the third project description.",
    image: "/project3.png",
    link: "#",
  },
];

export default function FeaturedProject() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center md:text-5xl font-bold text-lightSky">
          Featured Projects
        </h1>
        <div className="relative flex items-center justify-center border">
          {/* Mobile Frame */}
          <Image
            src={frame}
            alt="Mobile Frame"
            layout="fill"
            className="absolute "
          />
          {/* Swiper Inside Frame */}
          <Swiper
            navigation
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            className="absolute w-[36rem] h-[39rem] overflow-hidden z-0 justify-center"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-4 shadow-lg rounded-lg md:w-[16rem] mt-6 md:h-[36rem] border mx-auto">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={350}
                    className="rounded-md mx-auto"
                  />
                  <h2 className="text-xl text-center font-bold text-lightSky mt-2">
                    {project.name}
                  </h2>
                  <p className="text-center text-sm">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-lightSky text-md font-bold mt-1"
                  >
                    View Project
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
