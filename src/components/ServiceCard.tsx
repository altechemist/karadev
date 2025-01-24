import React from "react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/constants";

export default function ServiceCard() {
  return (
    <div className="rounded-lg">
      <div className="">
        {servicesData?.map((item, index) => (
          <div key={index} className="mb-8">
            {/* Dynamically display service number, title, and description */}
            <p className="text-white text-xl font-semibold">{item.number}</p>
            <h2 className="text-2xl font-bold text-white mt-2">{item.title}</h2>
            <p className="text-white mt-2">{item.description}</p>
            <div className="mt-4">
              <Button className="mt-3 bg-lightSky text-bodyColor hover:bg-lightSky/80 w-full md:w-[400px]">
                Learn more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
