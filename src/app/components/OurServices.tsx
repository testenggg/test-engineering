"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services";
import { motion } from "framer-motion";

export default function OurServices() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-start mb-10 px-6">Our Services</h2>
      <Slider {...settings} className="max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={index} className="px-2">
            <Link href={`/services/${service.slug}`}>
              <motion.div
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Image Animation */}
                <motion.div
                  className="w-full h-64 object-cover"
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>

                {/* Icon Animation */}
                <motion.div
                  className="absolute top-5 left-5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image src={service.icon} alt="icon" width={48} height={48} />
                </motion.div>

                {/* Title Animation */}
                <motion.div
                  className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.div>

                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
              </motion.div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}
