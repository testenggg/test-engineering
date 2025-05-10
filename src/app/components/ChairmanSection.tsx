'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChairmanSection() {
  return (
    <section className="w-full bg-[#233B7C] text-white py-8 px-6 md:px-20">
      {/* Title with fade animation */}
      <motion.h2
        className="text-4xl text-center font-bold leading-tight py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Leading the way with meaningful Innovations
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left: Image with animation */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/ceo.jpg" 
            alt="Seth ji"
            width={600}
            height={600}
            className="rounded-lg w-full h-100 object-cover"
          />
        </motion.div>

        {/* Right: Text with animations */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Sudhir Seth</h3>
            <p className="text-sm text-gray-300 mt-4">Chairman Emeritus</p>
          </motion.div>

          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Sudhir Seth's pioneering leadership established Sudhir Power Ltd,
            India's foremost generator manufacturer and power equipment company,
            with a diverse portfolio and strategic collaborations propelling the
            brand to industry preeminence.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
