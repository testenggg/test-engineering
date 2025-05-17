"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/ourServices" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white ">
      <nav className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 w-full ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="font-bold font-serif">
            <Image src="/CompanyLogo.svg" alt="Logo" width={140} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative overflow-hidden h-6 group font-sans  ${
                pathname === link.href
                  ? "text-[#233B7C] font-bold"
                  : "text-black"
              }`}
            >
              <span className="block transition-transform duration-300 font-sans">
                {link.name}
              </span>
              <span className="absolute top-full left-0 text-gray-400 font-sans ">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden text-black">
          <Menu size={28} />
        </button>
      </nav>

      {/* Drawer Overlay (1/4 transparent area on left) */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="fixed top-0 right-0 w-full h-screen z-50 flex"
        >
          {/* Transparent Black Overlay (1/4 width) */}
          <div
            className="w-1/4 h-full bg-black/90 "
            onClick={toggleDrawer} // click outside to close
          />

          {/* Drawer Content (3/4 width) */}
          <div className="w-3/4 h-full bg-white text-black shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <button onClick={toggleDrawer} className="self-end mb-4 p-4">
              <X size={28} />
            </button>

            {/* Drawer Heading */}
            <div className="text-2xl font-bold mb-6">
              <Link href="/" className="font-bold font-serif">
                <Image
                  src="/CompanyLogo.svg"
                  alt="Logo"
                  width={240}
                  height={40}
                />
              </Link>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-16 py-10 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleDrawer}
                  className={`text-2xl transition duration-300 ${
                    pathname === link.href
                      ? "text-[#233B7C] font-bold"
                      : "hover:text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
