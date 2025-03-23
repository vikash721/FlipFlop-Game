"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const ProjectFilters = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex justify-center mb-10 space-x-2 flex-wrap ">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
            activeFilter === category
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}

export default ProjectFilters