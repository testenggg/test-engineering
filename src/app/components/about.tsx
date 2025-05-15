"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-6 py-12 gap-10 bg-white">
      {/* Left: Image (1/3 width on lg screens) */}
      <motion.div
        className="lg:w-1/3 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/img/contact1.jpg"
          alt="Factory Image"
          width={600}
          height={400}
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </motion.div>

      {/* Right: Text Content */}
      <div className="lg:w-2/3 w-full space-y-6">
        {/* Logo + Title */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/logo.png"
            alt="35 Years Anniversary"
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
          />
          <div>
            <h2 className="text-3xl font-bold text-black">
              TOUCHING LIVES SINCE
            </h2>
            <p className="text-xl text-black">1989</p>
          </div>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-gray-800 text-md leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Test Engineering was founded with a commitment to delivering
          high-quality engineering solutions across Oman. With our head office
          based in Muscat, we specialize in electrical testing and commissioning
          services, low- and medium-voltage systems, maintenance, and
          diagnostics for residential, commercial, and industrial facilities. As
          a locally recognized EPC contractor (RIYADA), our focus lies in
          providing reliable, precise, and cost-effective solutions—ensuring
          projects are completed on time, within budget, and to the highest
          standards. At Test Engineering, we collaborate closely with clients to
          ensure technical readiness and operational excellence. Our services
          span the full project lifecycle—beginning from planning and site
          preparation, through testing, commissioning, and handover—supported by
          advanced tools, professional methodologies, and ongoing maintenance
          services that ensure long-term performance and safety. Would you like
          a shorter version for a homepage or tagline as well? 4o
        </motion.p>

        {/* Thumbnail images */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {[
            "high-voltage1.jpg",
            "high-voltage2.jpg",
            "high-voltage-3.jpg",
            "man-installing.jpg",
          ].map((img, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={`/services/${img}`}
                alt={`Gallery ${idx + 1}`}
                width={100}
                height={80}
                className="w-24 h-16 rounded-md object-cover border border-gray-200"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          From <span className="font-bold text-black">Humble Beginnings</span>{" "}
          to <span className="font-bold text-black">Global Impact</span>
        </motion.p>
      </div>
    </div>
  );
}
