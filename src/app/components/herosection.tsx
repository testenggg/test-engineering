'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/services/high-voltage-3.jpg',
    title: 'Powering',
    subtitle: 'India’s Leading Manufacturer of Power Generation & Power Distribution Equipment’s with over 50 years of Trust & Reliability',
  },
  {
    image: '/services/high-voltage2.jpg',
    title: 'Empowering Progress',
    subtitle: 'Cutting-edge Electrical Solutions Designed to Energize Your Industry',
  },
  {
    image: '/services/high-voltage1.jpg',
    title: 'Reliable Infrastructure',
    subtitle: 'Building Sustainable Energy Systems with Precision and Excellence',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const currentSlide = slides[index];
  const previousSlide = prevIndex !== null ? slides[prevIndex] : null;

  return (
    <div className="relative h-96 w-full flex items-center justify-center overflow-hidden ">
      {/* Background container */}
      <div className="absolute inset-0 z-[-1] overflow-hidden ">
        {/* Previous image fades out */}
        <AnimatePresence>
          {previousSlide && (
            <motion.div
              key={previousSlide.image}
              className="absolute inset-0"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={previousSlide.image}
                alt="Previous Background"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Current image fades in */}
        <AnimatePresence>
          <motion.div
            key={currentSlide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={currentSlide.image}
              alt="Current Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[0]" />

      {/* Text Content with slide-in/out */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.title}
          className="text-start text-white z-10 md:w-2/3 w-full px-12 md:pl-0 absolute"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{currentSlide.title}</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-start">{currentSlide.subtitle}</h2>
          <button className="bg-[#233B7C] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
            Discover More
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
