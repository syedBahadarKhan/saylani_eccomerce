import React from "react";
import aboutImage from "../assets/aboutus.png"; // replace with your image name
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-blue-600">Story</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Welcome to <span className="font-semibold text-gray-800">Mini E-Store</span> — your one-stop destination 
            for stylish, affordable, and high-quality products. We started our journey with a simple mission: 
            to bring joy and convenience to your shopping experience.  
            <br /><br />
            Every product is carefully curated to ensure top quality and unbeatable value, 
            because we believe everyone deserves the best — without breaking the bank.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            Explore Our Products
          </button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
            src={aboutImage}
            alt="About Mini E-Store"
            className="w-full md:w-4/5 lg:w-[450px] rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
