import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";

type Props = { className?: string };

const ContactUs = ({ className }: Props) => {
  return (
    <div id="contact-us" className={cn(className, "min-h-[300px]")}>
      <Heading
        title="Contact Us"
        description="Have a project? Let us help you build trust, educate your audience, and stand out across platforms and markets."
        descriptionClass="text-md  "
      />
      <section className="max-w-6xl mx-auto   py-20">
        {/* Contact Info (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 gap-12">
          <div className="p-4 rounded-xl bg-white">
            <h4 className="font-bold mb-1">Email</h4>
            <p>info@scrybe.ae</p>
          </div>
          <div className="p-4 rounded-xl bg-white">
            <h4 className="font-bold mb-1">Phone</h4>
            <p>+971 52 891 8909</p>
          </div>
          {/* <div>
            <h4 className="font-bold mb-1">Address</h4>
            <p>Office ***, Downtown Street<br />Dubai, UAE</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
