import { Facebook, Github, Slack, Youtube } from "lucide-react";
import Link from "next/dist/client/link";
import React from "react";
import { TooltipContent, TooltipProvider } from "./ui/tooltip";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";

const socialData = [
  { title: "Youtube", icon: <Youtube />, href: "https://www.youtube.com" },
  { title: "GitHub", icon: <Github />, href: "https://www.youtube.com" },
  { title: "Messenger", icon: <Facebook />, href: "https://www.youtube.com" },
  { title: "Gmail", icon: <Slack />, href: "https://www.youtube.com" },
  { title: "Twitter", icon: <Youtube />, href: "https://www.youtube.com" },
];
export default function SocialLinks() {
  return (
    <TooltipProvider>
      <div className="flex items-center justify-center gap-3">
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <div
                className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect"
              >
                <Link
                  href={item?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item?.icon}</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-hoverColor text-black font-semibold">{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
