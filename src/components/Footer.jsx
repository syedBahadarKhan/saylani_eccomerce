import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MiniStore</h2>
          <p className="text-sm leading-relaxed">
            Discover amazing products at unbeatable prices. 
            Shop smart, shop easy, and enjoy seamless checkout.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/cart" className="hover:text-white transition">Cart</a></li>
            <li><a href="/checkout" className="hover:text-white transition">Checkout</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Men’s Fashion</a></li>
            <li><a href="#" className="hover:text-white transition">Women’s Fashion</a></li>
            <li><a href="#" className="hover:text-white transition">Electronics</a></li>
            <li><a href="#" className="hover:text-white transition">Accessories</a></li>
          </ul>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">Follow us on social media for updates & deals!</p>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/share/1BZiViP75E/" className="hover:text-blue-500 transition"><FaFacebook size={20} /></a>
            <a href="/" className="hover:text-pink-500 transition"><FaInstagram size={20} /></a>
            <a href="https://github.com/syedBahadarKhan" className="hover:text-sky-400 transition"><FaTwitter size={20} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition"><FaGithub size={20} /></a>
          </div>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />
      <div className="text-center text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">MiniStore</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
