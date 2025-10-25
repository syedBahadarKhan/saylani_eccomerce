import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/Cartcontext.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition duration-300"
        >
          🛍️ Bahadar <span className="text-gray-800">Store</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-poppins font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Checkout
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            Our Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-1 hover:text-blue-600 transition duration-200 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaShoppingCart size={18} />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full animate-bounce">
                {totalItems}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Cart Icon always visible on mobile */}
        <NavLink
          to="/cart"
          className="md:hidden relative flex items-center gap-1 text-gray-700 hover:text-blue-600 transition duration-200"
        >
          <FaShoppingCart size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full animate-bounce">
              {totalItems}
            </span>
          )}
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transform transition ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-700 transform transition ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner py-4 px-6 space-y-3 text-gray-700 font-poppins font-medium">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 transition"
          >
            Our Products
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            to="/checkout"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600 transition"
          >
            Checkout
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
