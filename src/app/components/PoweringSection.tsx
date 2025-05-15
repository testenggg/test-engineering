'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 60000, label: "MVA Installed" },
  { value: 4000, label: "Workforce" },
  { value: 40, label: "Branches" },
  { value: 4, label: "Manufacturing facilities" },
];

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1000;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * to);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {to >= 1000 ? "+" : ""}
    </span>
  );
}

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

      {/* Stats grid with animated counts */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              <AnimatedCounter to={item.value} />
            </h3>
            <p className="mt-2 text-base text-black">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
