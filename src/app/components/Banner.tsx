"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Advertisment() {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background Image */}
      <Image
        src="/img/factory.jpg"
        alt="Factory Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
        {/* Title with scroll animation */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Power Your Business <br /> Without Interruptions
        </motion.h1>

        {/* Paragraph with scroll animation */}
        <motion.p
          className="text-lg mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Test Engineering today for reliable generator rentals tailored to your business needs.
        </motion.p>

        {/* Buttons with scroll animation */}
        <div className="flex gap-4">
          <motion.button
            className="bg-white text-black font-semibold py-2 px-5 rounded hover:bg-gray-200 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Inquire
          </motion.button>
          <motion.button
            className="border border-white text-white font-semibold py-2 px-5 rounded hover:bg-white hover:text-black transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}
