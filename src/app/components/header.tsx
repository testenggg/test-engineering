"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to toggle opacity
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 bg-white ">

      <nav className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 w-full ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="font-bold font-serif">
            <Image src="/logo.png" alt="Logo" width={140} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative overflow-hidden h-6 group font-sans  ${
                pathname === link.href ? "text-[#233B7C] font-bold" : "text-black"
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

      {/* Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="fixed top-0 right-0 w-3/4 h-screen bg-black/90 text-white shadow-lg p-6 flex flex-col z-50"
        >
          {/* Close Button */}
          <button onClick={toggleDrawer} className="self-end mb-4">
            <X size={28} />
          </button>

          {/* Drawer Heading */}
          <h2 className="text-2xl font-bold mb-6">Menu</h2>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleDrawer}
                className={`text-lg transition duration-300 ${
                  pathname === link.href ? "text-[#07bbce] font-bold" : "hover:text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
