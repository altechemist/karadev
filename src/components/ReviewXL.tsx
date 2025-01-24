import React from "react";
import Image from "next/image";
import image from "../../public/avatar.png";

type ReviewData = {
  avatar: string;
  text: string;
  name: string;
  position: string;
  company: string;
  companyUrl: string;
};

interface ReviewXLProps {
 reviewData: ReviewData;
}

const ReviewXL: React.FC<ReviewXLProps> = ({
  reviewData: { avatar, text, name, position, company, companyUrl }
}) => {
  return (
    <div className="flex flex-col h-full items-center  bg-lightSky/5 border border-lightSky/20 p-4 shadow-md max-w-sm mx-auto rounded-md">
      {/* Image */}
      <Image
        src={image || avatar}
        alt={name}
        className="object-cover w-16 h-16 rounded-full"
        width={64}
        height={64}
      />

      {/* Testimonial Text */}
      <p className="text-center text-sm text-white/80 mt-2 mb-4 line-clamp-[19]">
        {text}
      </p>

      {/* Author Info */}
      <h4 className="text-center font-semibold text-white">
        <span className="block">- {name}</span>
        <span className="text-sm text-white/50">
          {position} at{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSky hover:underline"
          >
            {company}
          </a>
        </span>
      </h4>
    </div>
  );
};

export default ReviewXL;
