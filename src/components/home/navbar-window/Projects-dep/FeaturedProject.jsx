"use client"

import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const FeaturedProject = ({ project, index }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 mb-20 last:mb-0`}
    >
      {/* Project Image */}
      <motion.div
        className="md:w-1/2 relative overflow-hidden rounded-xl group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Project Info */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="inline-block mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default FeaturedProject