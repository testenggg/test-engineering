"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function PoweringSection() {
  return (
    <section className="text-center px-6 py-16 bg-white">
      {/* Logo + Line */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="CompanyLogo.svg"
          alt="Powering Your Future"
          width={500}
          height={150}
          className="mx-auto w-full max-w-md"
        />
        <div className="flex items-center gap-4 py-6">
          <div className="flex-grow h-px bg-[#233B7C]"></div>
          <h3 className="text-black text-md whitespace-nowrap text-2xl">
            Powering Your Future
          </h3>
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        We are powering a brighter tomorrow through innovative energy solutions
        that prioritize cleanliness, sustainability, and community well-being
      </motion.p>

    </section>
  );
}
