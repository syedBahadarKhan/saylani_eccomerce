import React from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaLaptop, FaGem, FaCouch, FaHeartbeat } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Fashion",
    icon: <FaTshirt size={40} />,
    description: "Trendy clothing and accessories for every season.",
    color: "from-pink-500 to-rose-400",
  },
  {
    id: 2,
    name: "Electronics",
    icon: <FaLaptop size={40} />,
    description: "High-quality gadgets and devices for tech lovers.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    name: "Jewelry",
    icon: <FaGem size={40} />,
    description: "Elegant designs to make every moment sparkle.",
    color: "from-yellow-500 to-amber-400",
  },
  {
    id: 4,
    name: "Home & Furniture",
    icon: <FaCouch size={40} />,
    description: "Beautiful and comfortable furniture for your home.",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 5,
    name: "Health & Beauty",
    icon: <FaHeartbeat size={40} />,
    description: "Self-care products for a healthier, happier you.",
    color: "from-purple-500 to-indigo-400",
  },
];

const Categories = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        >
          Our <span className="text-blue-600">Categories</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
        >
          Discover products you’ll love across a wide range of categories.  
          Shop smart, stylish, and with confidence — all in one place!
        </motion.p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-r ${cat.color} text-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center justify-center`}
            >
              <div className="bg-white/20 p-4 rounded-full mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <p className="text-white/90 text-sm">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
