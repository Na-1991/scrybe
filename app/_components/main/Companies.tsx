import React from "react";
import ImageComponent from "../ImageComponent";
import Heading from "../Heading";

type Props = {};

const companies = [
  "/companies/ADCB-png.png",
  "/companies/Agthia-png.png",
  "/companies/alfutaim-jpg.png",
  "/companies/al-qana-png.png",
  "/companies/al-ula-saudi-png.png",
  "/companies/bank-Muscat-png.png",
  "/companies/bank-of-america-png.png",
  "/companies/DAFZA-png.png",
  "/companies/DCT-png.png",
  "/companies/dewa-png.png",
  "/companies/DHCC-jpg.png",
  "/companies/Diriyah-E-Prix-png.png",
  "/companies/DMCC-png.png",
  "/companies/DP-World-png.png",
  "/companies/eithad-cargo-png.png",
  "/companies/ENEC-jpg.png",
  "/companies/etihad-rail-png.png",
  "/companies/FAO-png.png",
  "/companies/FXTM-png.png",
  "/companies/Grundfos-png.png",
  "/companies/IATA-png.png",
  "/companies/savills-png.png",
  "/companies/saxo-png.png",
  "/companies/shangri-la-png.png",
  "/companies/Takeda-png.png",
  "/companies/the-national-aquariu.png",
  "/companies/UN-png.png",
  "/companies/vistatec-jpg.png",
];

const Companies = (props: Props) => {
  return (
    <div>
        <Heading title="Industries We Serve"
        description="    We work with businesses across sectors, including:Culture & Education
          | Government & International Organizations | Entertainment | F&B &
          Food Aggregation | Destination Marketing | Aviation, Automotive &
          Mobility | Oil & Gas, Energy & Engineering | Consumer Electronics,
          Retail & Luxury | Banking & Trading | Healthcare | Real Estate Each
          industry has its voice. We help you find it."
          descriptionClass="text-sm"
        />
  <div className="overflow-hidden relative w-full mt-4 group bg-white py-4 rounded-lg">
  <div className="logo-marquee-track">
    <div className="flex gap-8">
      {companies.map((src, index) => (
        <ImageComponent
          src={src}
          key={`loop1-${index}`}
          alt={`Company ${index}`}
          aspect="square"
          className="h-[100px] w-auto shrink-0"
        />
      ))}
      {companies.map((src, index) => (
        <ImageComponent
          src={src}
          key={`loop2-${index}`}
          alt={`Company ${index}`}
          aspect="square"
          className="h-[100px] w-auto shrink-0"
        />
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default Companies;
