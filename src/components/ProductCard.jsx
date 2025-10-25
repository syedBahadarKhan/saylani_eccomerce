import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product, onAdd }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white p-5 flex flex-col"
    >
      {/* Favorite Heart */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
      >
        {liked ? (
          <FaHeart className="text-red-500" size={20} />
        ) : (
          <FaRegHeart size={20} />
        )}
      </button>

      {/* Product Image */}
      <div className="h-52 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-48 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-gray-800 text-base font-semibold mb-2 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-gray-500 text-sm mb-3 line-clamp-3">
        {product.description?.slice(0, 60)}...
      </p>

      {/* Price and Button */}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-bold text-blue-600">${product.price}</span>
        <button
          onClick={() => onAdd(product)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 shadow-md transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
