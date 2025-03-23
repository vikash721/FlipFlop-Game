import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Navbar = ({ scrolled, mobileMenuOpen, setMobileMenuOpen, navVariants, handleNavItemClick }) => {
  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Vikash Kumar
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <motion.li key={item} className="relative group" whileHover={{ scale: 1.05 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.toLowerCase());
                }}
              >
                {item}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { icon: FiGithub, href: "https://github.com/vikash721" },
            { icon: FiLinkedin, href: "https://www.linkedin.com/in/vikashkumar721/" },
            { icon: FiTwitter, href: "https://twitter.com/vikash_code" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <FiMenu size={24} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white py-2 transition-colors"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                >
                  {item}
                </motion.a>
              ))}
              <div className="flex gap-6 py-4">
                {[
                  { icon: FiGithub, href: "https://github.com" },
                  { icon: FiLinkedin, href: "https://linkedin.com" },
                  { icon: FiTwitter, href: "https://twitter.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;