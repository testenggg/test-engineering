"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesOverview() {
  const services = [
    {
      title: "ELECTRICAL CONTRACTOR SERVICES",
      description:
        "We are fully equipped to provide the electrical contracting, installation and maintenance services for your project or operations.",
      icon: "/services/grid-icon.png",
    },
    {
      title: "EMERGING TECHNOLOGIES",
      description:
        "Capitalize on the growing need for renewable energy. Our team can help you develop and install infrastructure and address the technological demands of transitioning to new energy sources.",
      icon: "/services/energt-icon.png",
    },
    {
      title: "MECHANICAL CONTRACTOR SERVICES",
      description: "Diverse and specialized mechanical expertise.",
      icon: "/services/grid-icon.png",
    },
  ];

  return (
    <section className="py-20 px-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="flex gap-6">
              <div className="h-16 w-16 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-start space-y-2">
                <h3 className="text-md font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
                <div className="w-8  border-[1px]"></div>

                <p className="text-gray-600 max-w-xs text-sm text-start tracking-wide leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
