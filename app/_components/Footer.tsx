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
          <ImageComponent src="/logo-blue.png" aspect="video" imgClassName="object-contain" className="w-[120px]" alt="Logo" />
          </Link>
            <p className="text-gray-400 text-sm">
              Empowering your digital presence with content that connects.
            </p>
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
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact-us" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">info@scrybe.ae</p>
            <p className="text-sm text-gray-300 mb-2">+971 52 891 8909</p>
             
          </div>

          {/* Social (optional) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                YouTube
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                TikTok
              </a>
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
