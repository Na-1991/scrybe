import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import ImageComponent from "../ImageComponent";

type Props = { className?: string };

const AboutUs = ({ className }: Props) => {
  return (
    <div id="about-us" className={cn(className, "  p-8")}>
      <Heading title="About Us" titleClass=""  descriptionClass="text-md"/>
      <div className="flex  gap-2 mt-6 lg:flex-row flex-col">
        <div className="flex flex-col gap-2 flex-1 mt-8">
          <h2>Scrybe is a Dubai based digital marketing agency with over ten years of experience. We help businesses tell their story clearly, connect with their audience, and stand out across platforms, languages, and markets.</h2>
          <p>We started Scrybe because we noticed a gap. Too many brands relied on generic messaging and awkward translations that missed the mark. We wanted to fix that. Today, we help businesses communicate with precision, purpose, and a deep understanding of their markets.</p>
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
