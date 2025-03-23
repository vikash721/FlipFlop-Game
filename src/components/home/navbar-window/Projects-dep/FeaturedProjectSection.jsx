"use client"

import { motion } from "framer-motion"
import FeaturedProject from "./FeaturedProject"

const FeaturedProjectsSection = ({ featuredProjects }) => {
  return (
    <div className="mb-20">
      {featuredProjects.map((project, index) => (
        <FeaturedProject key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

export default FeaturedProjectsSection