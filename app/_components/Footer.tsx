import React from "react";
import Container from "./Container";
import Link from "next/link";
import ImageComponent from "./ImageComponent";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-12  ">
      <Container>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href={"/"} className="font-[500]">
              <ImageComponent
                src="/logo-blue.png"
                aspect="video"
                imgClassName="object-contain"
                className="w-[120px]"
                alt="Logo"
              />
            </Link>
            {/* <p className="text-gray-400 text-sm">
              Empowering your digital presence with content that connects.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact-us" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <Link
              target="_blank"
              href="mailto:info@scrybe.ae"
              className="text-sm text-gray-300 mb-2 hover:underline block"
            >
              info@scrybe.ae
            </Link>
            <Link
              href="https://wa.me/+971528918909"
              target="_blank"
              className="text-sm text-gray-300 mb-2 block hover:underline"
            >
              +971 52 891 8909
            </Link>
          </div>

          {/* Social (optional) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://ae.linkedin.com/company/scrybe-fze"
                className="text-gray-300 hover:text-indigo-700 font-[600] "
              >
                Linked In
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
