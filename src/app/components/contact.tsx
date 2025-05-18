"use client";

import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

      {/* Introductory Text */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-lg mb-4">Thank you for visiting us!</p>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          We&apos;d love to hear from you. Please fill out the form below, and
          our team will get back to you within 5 working days.
        </p>
      </motion.div>

      {/* Form + Map Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#233B7C] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Google Map */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6617449653704!2d58.1853566!3d23.6164611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de392117155df%3A0xe95a6878685ba25!2s8HOURS!5e0!3m2!1sen!2sin!4v1747501432522!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ minHeight: "350px", border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
