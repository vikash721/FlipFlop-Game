

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import {
  FiTerminal,
  FiMaximize2,
  FiMinimize2,
  FiX,
  FiBookOpen,
  FiMenu,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi"
import TerminalComponent from "../components/Terminal"
import DocumentComponent from "../components/Document"

// Animated background grid component
const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 top-1/2 -z-10 h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px]"></div>
    </div>
  )
}

export default function HomePage() {
  const [showTerminal, setShowTerminal] = useState(false)
  const [isTerminalFullscreen, setIsTerminalFullscreen] = useState(false)
  const [showDocs, setShowDocs] = useState(false)
  const [isDocsFullscreen, setIsDocsFullscreen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTerminalClick = () => {
    setShowTerminal(true)
  }

  const handleDocsClick = () => {
    setShowDocs(true)
  }

  // Variants for animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const windowVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundGrid />

      {/* Navbar */}
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
              { icon: FiLinkedin, href: "hhttps://www.linkedin.com/in/vikashkumar721/" },
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
                    onClick={() => setMobileMenuOpen(false)}
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

      {/* Hero Section */}
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

      {/* Terminal Window */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            key="terminal"
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.1}
            className={`${
              isTerminalFullscreen
                ? "fixed inset-4 md:inset-10 w-auto h-auto z-50"
                : "fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[300px] md:h-[400px] z-50"
            } bg-[#1a1a1f] rounded-lg border border-gray-800 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm`}
          >
            {/* Terminal Header with Controls */}
            <div className="flex justify-between items-center bg-[#252530] p-3 rounded-t-md border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm ml-2 font-mono">~/vikash-terminal</span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsTerminalFullscreen(!isTerminalFullscreen)}
                  className="p-1 rounded-md hover:bg-gray-700/50 transition-colors"
                >
                  {isTerminalFullscreen ? (
                    <FiMinimize2 className="text-gray-400" />
                  ) : (
                    <FiMaximize2 className="text-gray-400" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowTerminal(false)}
                  className="p-1 rounded-md hover:bg-red-500/20 transition-colors"
                >
                  <FiX className="text-gray-400 hover:text-white" />
                </motion.button>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1  overflow-y-auto overflow-x-hidden font-mono text-sm scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <TerminalComponent />
            </div>

            {/* Terminal Status Bar */}
            <div className="bg-[#252530] py-1 px-3 text-xs text-gray-500 border-t border-gray-800 flex justify-between">
              <span>bash</span>
              <span>UTF-8</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Documentation Window */}
      <AnimatePresence>
        {showDocs && (
          <motion.div
            key="docs"
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.1}
            className={`${
              isDocsFullscreen
                ? "fixed inset-4 md:inset-10 w-auto h-auto z-50"
                : "fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[300px] md:h-[400px] z-50"
            } bg-white dark:bg-[#1a1a1f] rounded-lg border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm`}
          >
            {/* Documentation Header with Controls */}
            <div className="flex justify-between items-center bg-gray-100 dark:bg-[#252530] p-3 rounded-t-md border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Documentation</span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsDocsFullscreen(!isDocsFullscreen)}
                  className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors"
                >
                  {isDocsFullscreen ? (
                    <FiMinimize2 className="text-gray-600 dark:text-gray-400" />
                  ) : (
                    <FiMaximize2 className="text-gray-600 dark:text-gray-400" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowDocs(false)}
                  className="p-1 rounded-md hover:bg-red-500/20 transition-colors"
                >
                  <FiX className="text-gray-600 dark:text-gray-400 hover:text-red-500" />
                </motion.button>
              </div>
            </div>

            {/* Documentation Content */}
            <div className="flex-1  overflow-y-auto overflow-x-hidden text-gray-800 dark:text-gray-200 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
              <DocumentComponent />
            </div>

            {/* Documentation Status Bar */}
            <div className="bg-gray-100 dark:bg-[#252530] py-1 px-3 text-xs text-gray-500 border-t border-gray-200 dark:border-gray-800 flex justify-between">
              <span>Markdown</span>
              <span>100%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when windows are open */}
      <AnimatePresence>
        {(showTerminal || showDocs) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => {
              setShowTerminal(false)
              setShowDocs(false)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

