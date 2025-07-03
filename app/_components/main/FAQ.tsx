import React from "react";
import Heading from "../Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across culture, education, government, entertainment, F&B, destination marketing, energy, automotive, electronics, banking, healthcare, and real estate.",
  },
  {
    question: "Why is localization important for global markets?",
    answer:
      "Localization ensures your message fits its audience. It improves trust, clarity, and conversion across languages, cultures, and platforms.",
  },
  {
    question:
      "How long does it take to produce executive thought leadership articles?",
    answer:
      "Most articles can be delivered within five to seven working days after an initial briefing. Timelines vary based on research and review needs.",
  },
  {
    question: "Why is multilingual marketing more effective than translation?",
    answer:
      "Multilingual marketing captures tone, context, and culture. It makes your message feel natural and relevant, not just translated.",
  },
  {
    question: "How do you measure digital marketing success?",
    answer:
      "We measure traffic, conversion rate, lead quality, and engagement. We also review long term metrics like trust, loyalty, and lifetime customer value.",
  },
];

const FAQ = (props: Props) => {
  return (
    <div className="bg-white rounded-xl p-12">
      <Heading title="FAQs" />
      <div className="mt-12">
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <AccordionItemComponent
              key={index}
              value={`item-${index}`}
              title={item.question}
              description={item.answer}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

const AccordionItemComponent = ({
  description,
  value,
  title,
}: {
  title: string;
  description: string;
  value: string;
}) => {
  return (
    <AccordionItem value={value} className="">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="border-t-none">
        {description}
      </AccordionContent>
    </AccordionItem>
  );
};
