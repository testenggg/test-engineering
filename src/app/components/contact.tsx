"use client";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Main Heading */}
    

      {/* Introductory Text */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-lg mb-4">Thank you for visiting us!</p>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          We have you found web your own website to be a cash account and email
          them. We are our best friends, and we will get back to you in 5
          working days.
        </p>
      </motion.div>

      {/* Brochure Download Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Download Our Brochure
        </h2>
        <p className="text-gray-700 mb-4">To Know More</p>
        <button className="bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition duration-300">
          Download Brochure
        </button>
        <div className="border-t border-gray-300 my-8"></div>
      </motion.div>

      {/* Contact Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* NIDIA WORKS */}
        <motion.div
          className="border border-gray-200 p-6 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-4">INDIA WORKS</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">
                Newsletter / Sales / Product Support
              </h4>
              <p>+91 4022 741800</p>
              <p>+91 3920 28644</p>
              <p>+91 8203 34414</p>
            </div>
            <div>
              <h4 className="font-bold">Product Support / Sales</h4>
              <p>printal.support@nidia.com</p>
              <p>e-mail@nidia.com</p>
            </div>
            <div>
              <h4 className="font-bold">Power Engineering (Brain) Trends</h4>
              <p>Lamin,</p>
              <p className="ml-4">One Team Industrial Estate, Team,</p>
              <p>Panama, Qiao, India 400512</p>
            </div>
          </div>
        </motion.div>

        {/* UK WORKS */}
        <motion.div
          className="border border-gray-200 p-6 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-xl font-bold mb-4">UK WORKS</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Newsletter</h4>
              <p>(+46) 114 273 8850</p>
            </div>
            <div>
              <h4 className="font-bold">Product Support / Sales</h4>
              <p>e-mail@market.us</p>
              <p>support@market.us</p>
            </div>
            <div>
              <h4 className="font-bold">Power Engineering (Block) Linked</h4>
              <p>Management Media, Virtual Estate,</p>
              <p>Bindhindi, 23 RIO Global Kingdom</p>
            </div>
          </div>
        </motion.div>

        {/* UAE WORKS */}
        <motion.div
          className="border border-gray-200 p-6 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-xl font-bold mb-4">UAE WORKS</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Newsletter</h4>
              <p>(+37) 132 281 5844</p>
            </div>
            <div>
              <h4 className="font-bold">Product Support / Sales</h4>
              <p>printal.support@nidia.com</p>
              <p>e-mail@nidia.com</p>
            </div>
            <div>
              <h4 className="font-bold">Power Engineering (Brain) Trends</h4>
              <p>Lamin,</p>
              <p className="ml-4">Yv+1 242, Shapiti Airport International,</p>
              <p>Free Zone: Shapiti, UAE.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactPage;
