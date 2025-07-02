"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Heading from "../Heading";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Name Name",
    role: "Product Manager, NovaTech",
    image: "/image-placeholder.png",
    quote:
      "Working with Brand was a game-changer. The visuals, delivery, and professionalism were unmatched.",
  },
  {
    name: "Name Name",
    role: "CEO, VisionaryAI",
    image: "/image-placeholder.png",
    quote:
      "Brand transformed our idea into a captivating story that connected instantly with our audience.",
  },
  {
    name: "Name Name",
    role: "Founder, Creatix Studio",
    image: "/image-placeholder.png",
    quote:
      "From concept to final product, Brand delivers with clarity, elegance, and impact. Highly recommended!",
  },
  {
    name: "Name Name",
    role: "CTO, Cyberloop",
    image: "/image-placeholder.png",
    quote:
      "Brand is our go-to for compelling visual content. Creative, fast, and always on-point.",
  },
  {
    name: "Name Name",
    role: "Marketing Lead, Neura",
    image: "/image-placeholder.png",
    quote:
      "We saw a 300% engagement spike after using Brand’s visuals. Stellar results every time.",
  },
];

type Props = {
  className?: string;
};

const TestimonialsSection = ({ className }: Props) => {
  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full  "
  >

    <section className={cn("py-20  0", className)}>
    
       <Heading title="What People Are Saying" />

       <CarouselContent className="w-full mt-12 items-stretch">
          {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 w-full" >
            <div
            
              className="  w-full flex-shrink-0 h-full  bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-lg text-center">{t.name}</h4>
              <span className="text-sm text-gray-500 text-center block">{t.role}</span>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
     
     
    </section>
    </Carousel>
  );
};

export default TestimonialsSection;
