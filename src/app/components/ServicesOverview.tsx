"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesOverview() {
  const services = [
    {
      title: "ELECTRICAL CONTRACTOR SERVICES",
      description:
        "We are fully equipped to provide the electrical contracting, installation and maintenance services for your project or operations.",
      icon: "/icons/icon1.png",
    },
    {
      title: "EMERGING TECHNOLOGIES",
      description:
        "Capitalize on the growing need for renewable energy. Our team can help you develop and install infrastructure and address the technological demands of transitioning to new energy sources.",
      icon: "/icons/icon2.png",
    },
    {
      title: "MECHANICAL CONTRACTOR SERVICES",
      description: "Diverse and specialized mechanical expertise.",
      icon: "/icons/icon3.png",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-blue-100/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group rounded-2xl py-10 px-6 text-gray-800 cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-md hover:bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/20"
          >
            {/* Icon Block */}
            <div className="bg-gray-100 w-20 h-20 flex items-center justify-center rounded-xl mb-5">
              <Image
                src={service.icon}
                alt={service.title}
                width={38}
                height={38}
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-md text-gray-700 leading-8">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
