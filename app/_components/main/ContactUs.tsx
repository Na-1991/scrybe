import { cn } from "@/lib/utils";
import React from "react";
import Heading from "../Heading";
import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

type Props = { className?: string };

const ContactUs = ({ className }: Props) => {
  return (
    <div id="contact-us" className={cn(className, "min-h-[300px]  scroll-mt-[30vh]")}>
      <Heading
        title="Contact Us"
        description="Have a project? Let us help you build trust, educate your audience, and stand out across platforms and markets."
        descriptionClass="text-md  "
      />
      <section className="max-w-6xl mx-auto   py-20">
        {/* Contact Info (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-700 gap-12">
          <div className="p-4 rounded-xl bg-white">
            <h4 className="font-bold mb-1 flex items-center gap-3"><Mail className="size-5" />Email</h4>
            <Link
              target="_blank"
              href="mailto:info@scrybe.ae"
              className="underline"
            >
              info@scrybe.ae
            </Link>
          </div>
          <div className="p-4 rounded-xl bg-white">
            <h4 className="font-bold mb-1 flex items-center gap-3"><Phone className="size-5" />Phone</h4>
            <Link
              href="https://wa.me/+971528918909"
              target="_blank"
              className="underline"
            >
              +971 52 891 8909
            </Link>
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
