import React from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiBookOpen } from "react-icons/fi";

const HeroSection = ({ handleTerminalClick, handleDocsClick, heroVariants, itemVariants }) => {
  return (
    <motion.div
      className="z-10 text-center max-w-4xl px-6 py-20 mt-16"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <motion.div variants={itemVariants} className="mb-2 inline-block">
        <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400">
          Full Stack Developer
        </span>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400">
          Building futuristic
        </span>
        <br />
        <span className="text-white">digital experiences</span>
      </motion.h2>

      <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
        I create innovative web applications with cutting-edge technologies, focusing on performance, accessibility,
        and exceptional user experiences.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleTerminalClick}
          className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
        >
          <FiTerminal /> Open Terminal
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleDocsClick}
          className="px-6 py-3.5 bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-lg text-lg font-medium transition-all flex items-center justify-center gap-2"
        >
          <FiBookOpen /> Documentation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;