"use client";
import { statsData } from "@/constants";
import React from "react";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <div className="grid grid-cols-2 items-center md:flex flex-row gap-2.5 md:gap-5">
      {statsData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start"
        >
          <CountUp
            end={item?.value}
            duration={5}
            delay={2}
            className="text-4xl lg:text-6xl font-extrabold text-white"
          />
          <p className="leading-snug text-sm">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
