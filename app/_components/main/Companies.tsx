import React from "react";
import ImageComponent from "../ImageComponent";
import Heading from "../Heading";
import { cn } from "@/lib/utils";

type Props = {
  companies:string[],
  showHeader:boolean,
  slideRight:boolean
};



const Companies = ({companies,showHeader, slideRight}: Props) => {
  return (
    <div>
     {!!showHeader && <Heading title="Industries We Serve"
        description="    We work with businesses across sectors, including:Culture & Education
          | Government & International Organizations | Entertainment | F&B &
          Food Aggregation | Destination Marketing | Aviation, Automotive &
          Mobility | Oil & Gas, Energy & Engineering | Consumer Electronics,
          Retail & Luxury | Banking & Trading | Healthcare | Real Estate Each
          industry has its voice. We help you find it."
          descriptionClass="text-sm"
        />}
<div className="overflow-hidden relative w-full mt-4 group bg-white rounded-lg">
  <div className="logo-marquee-viewport">
    <div className={cn("logo-marquee-row", slideRight && "is-reverse")}>
      {companies.map((src, i) => (
        <ImageComponent key={`a-${i}`} src={src} alt="" aspect="square"
          className="h-[75px] md:h-[100px] w-auto shrink-0" />
      ))}
      {companies.map((src, i) => (
        <ImageComponent key={`b-${i}`} src={src} alt="" aspect="square"
          className="h-[75px] md:h-[100px] w-auto shrink-0" />
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default Companies;
