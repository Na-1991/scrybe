"use client";

import { useState } from "react";
import ImageComponent from "../ImageComponent";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all flex flex-col min-h-[420px] w-full ">
      {/* Image */}
      <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl flex items-center justify-center">
        <ImageComponent
          src={service.image}
          alt={service.title}
          aspect="video"
          className="h-full"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

      {/* Description with toggle */}
      <div>
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 72 }} // 72px ≈ 3 lines
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <span dangerouslySetInnerHTML={{ __html: service.description }} />
        </motion.div>

        {/* Toggle button */}
      </div>
      <Button
        className="text-blue-600  text-sm   hover:underline w-full font-semibold text-center bg-transparent mt-auto shadow-none hover:bg-transparent cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "See less" : "See more"}
      </Button>
    </div>
  );
}