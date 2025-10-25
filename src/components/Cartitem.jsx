import { motion } from "framer-motion";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item, onRemove, onChangeQty }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-col sm:flex-row items-center gap-4 border border-gray-200 bg-white shadow-md rounded-2xl p-4 mb-3 transition-all duration-300 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-contain rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 text-center sm:text-left">
        <h4 className="font-semibold text-gray-800 text-base line-clamp-2 mb-1">
          {item.title}
        </h4>
        <div className="text-blue-600 font-bold">${item.price}</div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChangeQty(item.id, -1)}
          className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition"
        >
          <FaMinus size={12} />
        </button>
        <div className="font-semibold text-gray-800">{item.qty}</div>
        <button
          onClick={() => onChangeQty(item.id, +1)}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
        >
          <FaPlus size={12} />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition ml-2"
        title="Remove Item"
      >
        <FaTrashAlt size={18} />
      </button>
    </motion.div>
  );
};

export default CartItem;
