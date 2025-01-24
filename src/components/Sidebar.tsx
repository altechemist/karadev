import React from "react";
import { Logo } from "./Logo";
import { navbarData } from "@/constants";
import Link from "next/dist/client/link";
import SocialLinks from "./SocialLinks";
import { X } from "lucide-react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export const Sidebar: React.FC<Props> = ({ isOpen, onClose, pathname }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-l border-l-hoverColor/50 shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
      aria-hidden={!isOpen}
      role="dialog"
    >
      <div className="flex justify-end p-4">
        <button
          className="hover:text-red-600 hoverEffect text-white"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X/>
        </button>
      </div>

      <nav className="flex flex-col px-5 gap-7 text-sm lowercase tracking-wide font-medium mt-2">
        <Logo title="Karadev" subtitle="." />
        {navbarData?.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
              pathname === item?.href && "text-hoverColor"
            }`}
            onClick={onClose}
          >
            {item?.title}
          </Link>
        ))}
        <Link
          href={"/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-center bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
        >
          RESUME
        </Link>
        <SocialLinks />
      </nav>
    </div>
  );
};
