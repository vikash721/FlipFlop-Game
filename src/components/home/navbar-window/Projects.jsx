"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiFolder } from "react-icons/fi"
import ProjectCard from "./Projects-dep/ProjectCard"
import ProjectFilters from "./Projects-dep/ProjectFilters"
import FeaturedProjectsSection from "./Projects-dep/FeaturedProjectSection"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "SDIETTechies Evenet Management System",
      description:
        "A community-driven event management platform for SDIET College with role-based access, faculty panel, and a modern UI.",
      tags: ["React.js", "Node.js","Zustand", "Tailwind CSS"],
      image: "https://i.imgur.com/U22XDcZ.png",
      github: null,
      demo: "https://sdiet-techies721.netlify.app/",
      category: "Web App",
      featured: true,
    },
    {
      id: 2,
      title: "ChatRoom App",
      description: "A real-time chat application with user authentication, group messaging, and a sleek UI. Built as my 3rd-semester project.",
      tags: ["React.js", "Firebase", "Tailwind CSS", "Firestore"],
      image: "https://i.imgur.com/O9yQ71z.png",
      github: "https://github.com/vikash721/ChatRoom",
      demo: "https://chatroom-80f1e.web.app/",
      category: "Web App",
      featured: true,
    },
    {
      id: 3,
      title: "Pixev an Image Searching Website",
      description:
        "A fast and intuitive image search website with real-time filtering and a responsive UI for seamless browsing.",
      tags: ["HTML", "CSS", "Javascript", "Unsplash API"],
      image: "https://i.imgur.com/RSfZdho.png",
      github: "https://github.com/vikash721/Pixev",
      demo: "https://pixev.netlify.app/",
      category: "Web App",
    },
    {
      id: 4,
      title: "My Portfolio",
      description:
        "A modern portfolio with a blend of sleek UI components and a terminal-style interactive experience, built using React and Tailwind CSS to showcase my projects, skills, and experience.",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      image: "https://i.imgur.com/Ng8ofDM.png",
      github: null,
      demo: "#",
      category: "UI/UX",
    },
    {
      id: 5,
      title: "FlipFlop Game",
      description:
        "A fun and interactive card-flipping game where you collect diamonds, but flipping a bomb ends the game.",
      tags: ["React.js", "Modular CSS",],
      image: "https://i.imgur.com/2EM8x4h.png",
      github: "https://github.com/vikash721/FlipFlop-Game",
      demo: "#",
      category: "Game",
    },
    {
      id: 6,
      title: "A Simple Travel Website",
      description: "A simple and responsive travel website built using only HTML and CSS, showcasing beautiful destinations and travel guides.",
      tags: ["HTML", "CSS"],
      image: "https://i.imgur.com/dMXG2cU.png",
      github: "https://github.com/vikash721/Pixev",
      demo: "https://travel-website-vikash.netlify.app/",
      category: "UI/UX",
    },
  ]

  const categories = ["All", "Web App", "Game", "UI/UX", "AI"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const featuredProjects = projects.filter((project) => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f] relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400">
              My Work
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in building digital products. Each project
            reflects my ability to solve complex problems and work with different technologies.
          </p>
        </motion.div>

        <FeaturedProjectsSection featuredProjects={featuredProjects} />

        <ProjectFilters categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/vikash721"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all"
          >
            <FiFolder /> View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects