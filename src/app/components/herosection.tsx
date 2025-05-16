'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-96 w-full flex items-center justify-between overflow-hidden px-6">
      {/* Background image */}
      <Image
        src="/services/man-installing.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover z-[-1]"
      />

      {/* Overlay fades in */}
      <motion.div
        className="absolute inset-0 bg-black/50 z-[0]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Text content fades in */}
      <motion.div
        className="text-start text-white z-10 px-4 md:w-2/3 w-full md:pl-26 pl-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Powering</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8">
          India’s Leading Manufacturer of Power Generation & Power Distribution Equipment’s with over 50 years of Trust & Reliability
        </h2>
        <button className="bg-[#233B7C] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
          Discover More
        </button>
      </motion.div>
    </div>
  );
}