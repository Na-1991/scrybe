import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import ImageComponent from "../ImageComponent";

type Props = { className?: string };

const AboutUs = ({ className }: Props) => {
  return (
    <div id="about-us" className={cn(className, "max-h-[600px] rounded-2xl bg-indigo-500 p-8")}>
      <Heading title="About Us" titleClass="text-start" />
      <div className="flex  gap-2 mt-6">
        <div className="flex flex-col gap-2 flex-1 mt-8">
          <h3>Who Are We?</h3>
          <p>We Are The Best...</p>
        </div>
        <ImageComponent
        className="flex-1 bg-white h-full"
          src="/image-placeholder.png"
          alt="placeholder"
          aspect="video"
        />
      </div>
    </div>
  );
};

export default AboutUs;
