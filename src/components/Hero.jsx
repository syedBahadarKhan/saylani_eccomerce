import React from "react";
import sideimage from "../assets/hero.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-5"
        >
          <h3 className="text-4xl md:text-7xl font-extrabold text-gray-800 leading-tight">
            Discover the <span className="text-blue-600">Best Products</span>
            <br /> For Your Lifestyle 🛒
          </h3>

          <p className="text-gray-700 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Here are the products you’ve been searching for! Explore our latest collection and find amazing deals today.
          </p>

          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Find Products
          </Link>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.img
            src={sideimage}
            alt="Hero"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-[80%] md:w-[450px] lg:w-[500px] object-contain rounded-2xl drop-shadow-2xl bg-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
