import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaXTwitter />, label: "Twitter (X)" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
  { icon: <FaYoutube />, label: "YouTube" },
];

const centerLinks = [
  "Generator Rentals",
  "Rental Plans",
  "Contact Us",
  "About Us",
  "FAQ Section",
];

const rightLinks = [
  "Customer Support",
  "Blog Posts",
  "Testimonials",
  "Careers Page",
  "Sustainability Efforts",
];


export default function Footer() {
  return (
    <footer className="bg-[#1E3375] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/img/logo1.png"
              alt="Test Engineering"
              width={200}
              height={40}
            />
          </div>
          <div className="">
            <p className="text-xs">Address:</p>
            <p className="text-xs">#31, 1st Floor , Al Khoudh</p>
            <p className="text-xs">Contact: +96898833765</p>
          </div>
          <div className="flex gap-4 text-lg">
            {socialIcons.map((item, idx) => (
              <span
                key={idx}
                aria-label={item.label}
                title={item.label}
                className="cursor-pointer hover:text-gray-400 transition-colors"
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-10">
          {/* Center Section */}
          <div className="flex flex-col gap-2 text-sm">
            {centerLinks.map((link, idx) => (
              <a
                href="#"
                key={idx}
                className="hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-2 text-sm">
            {rightLinks.map((link, idx) => (
              <a
                href="#"
                key={idx}
                className="hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-400" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        <p>© 2025 Test Engineering. All rights reserved.</p>
       
      </div>
    </footer>
  );
}
