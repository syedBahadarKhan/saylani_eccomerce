import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/Cartcontext"; // ✅ make sure the path matches your file name

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // ✅ use your existing context

  // Fetch product data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const topProducts = data.slice(0, 6);
        setProducts(topProducts);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8"
        >
          🏆 Best Selling <span className="text-blue-600">Products</span>
        </motion.h2>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5 flex flex-col items-center mt-10"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h3 className="text-gray-800 font-semibold text-sm mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-bold text-lg mb-3">
                  ${product.price}
                </p>
                <button
                  onClick={() => addToCart(product)} // ✅ this adds to cart
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BestSelling;
