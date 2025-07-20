import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import data from "@/app/backend.json";
import ServiceCard from "../Services/ServiceCard";
import FramerWrapper from "../FramerWrapper";

type Props = { className?: string };

const Services = ({ className }: Props) => {
  const services = data.services;
  return (
    <div id="services" className={cn(className, "min-h-screen  scroll-mt-[30vh]")}>
      <Heading
        title="Services"
        description="Scrybe is a one-stop digital marketing agency. We combine strategy, writing, design, and campaign expertise to help brands educate, build trust, and drive results across platforms and markets."
        descriptionClass="text-md"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {services.map((service,index) => (
          <FramerWrapper 
          key={service.id} 
          index={index}
       
          >
        <ServiceCard  service={service} />
          </FramerWrapper>
  
        ))}
      </div>
    </div>
  );
};

export default Services;
