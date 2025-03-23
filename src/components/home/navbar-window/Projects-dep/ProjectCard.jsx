"use client"

import { motion } from "framer-motion"
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi"

const ProjectCard = ({ project, index }) => {
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      key={project.id}
      variants={projectVariants}
      whileHover="hover"
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/5 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <FiExternalLink size={18} />
            </a>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <FiStar size={16} />
            <span className="text-xs text-gray-400">Featured</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard