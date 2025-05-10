'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-6 py-12 gap-10 bg-white">
      {/* Left: Image (1/3 width on lg screens) */}
      <motion.div
        className="lg:w-1/3 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/img/about.jpg"
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
            <h2 className="text-3xl font-bold text-blue-700">TOUCHING LIVES SINCE</h2>
            <p className="text-xl text-blue-700">1989</p>
          </div>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-gray-800 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Starting with minor engineering works from a garage in the backyard of the Pai Kane Family Residence, 
          we have grown into a global powerhouse in power solutions, and our journey is far from over. Innovation 
          is at the heart of everything we do. We have expanded our reach to more than 60 countries, powering 
          diverse sectors such as power, water, and infrastructure. At Pai Kane Group, we don't just provide answers; 
          we craft an ecosystem where alternatives, possibilities, and solutions are embraced and implemented with excellence.
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
          {['about2.jpg', 'about3.jpg', 'about4.jpg', 'about1.jpg'].map((img, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={`/img/${img}`}
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
          From <span className="font-bold text-blue-700">Humble Beginnings</span> to <span className="font-bold text-blue-700">Global Impact</span>
        </motion.p>
      </div>
    </section>
  );
}
