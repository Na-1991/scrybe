"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import Heading from "../Heading";
import ImageComponent from "../ImageComponent";

type Props = { className?: string };

const applyTransform = (left: HTMLElement, right: HTMLElement, offset: number) => {
  left.style.transform = `translateX(${-offset}px) translateY(-50%)`;
  right.style.transform = `translateX(${offset}px) translateY(-50%)`;
};

const MainSection = ({ className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const left = leftRef.current;
      const right = rightRef.current;

      if (!container || !left || !right) return;

      const isMobile = window.innerWidth < 768;
      const percentOffset = isMobile ? 0.403 : 0.403

      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;

      const windowHeight = window.innerHeight;

      const containerCenter = containerTop + containerHeight / 2;
      const viewportCenter = windowHeight / 2;
      if(containerCenter < viewportCenter){
 

      const progress = 1
 
      const maxOffset = container.offsetWidth * percentOffset;
  
      const offset = -maxOffset * progress;
    

      applyTransform(left,right,offset)
  
 
        return
      } 
      const distanceToCenter = viewportCenter - containerCenter;
      const maxDistance = windowHeight / 2;

      const progress = Math.min(
        Math.max(1 - Math.abs(distanceToCenter) / maxDistance, 0),
        1
      );


      const maxOffset = container.offsetWidth * percentOffset;
  
      const offset = -maxOffset * progress;
 
  
      applyTransform(left,right,offset)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    };
 
  }, []);

  return (
    <div id="main" className={cn(className, "")}>
      {/* <Heading title="Main Section" /> */}
      {/* <div className="h-[300px]"></div> */}

      <div
        ref={containerRef}
        className="relative overflow-hidden flex items-center justify-center mt-8"
      >
        {/* Left Image */}
        <div
          ref={leftRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 opacity-80 scale-90 w-[30%] transition-all duration-300"
        >
          <ImageComponent
            className="w-full rounded-lg overflow-hidden"
            aspect="square"
            src="/main1.png"
            alt="Left"
          />
        </div>

        {/* Right Image */}
        <div
          ref={rightRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 z-0 opacity-80 scale-90 w-[30%] transition-all duration-300"
        >
          <ImageComponent
            className="w-full rounded-lg overflow-hidden"
            aspect="square"
            src="/main2.png"
            alt="Right"
          />
        </div>

        {/* Middle Image */}
        <div className="z-10 relative w-1/2">
          <ImageComponent
            className="w-full rounded-lg overflow-hidden"
            aspect="square"
            src="/main3.png"
            alt="Main"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
