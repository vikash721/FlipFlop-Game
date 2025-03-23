import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2, FiMinimize2, FiX } from "react-icons/fi";
import Experience from "./navbar-window/Experiences";

const ExperienceWindow = ({ showExperience, isExperienceFullscreen, setIsExperienceFullscreen, setShowExperience, windowVariants }) => {
  return (
    <AnimatePresence>
      {showExperience && (
        <motion.div
          key="experience"
          variants={windowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.1}
          className={`${
            isExperienceFullscreen
              ? "fixed inset-4 md:inset-10 w-auto h-auto z-50"
              : "fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[300px] md:h-[400px] z-50"
          } bg-[#1a1a1f] rounded-lg border border-gray-800 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm`}
        >
          {/* Experience Header with Controls */}
          <div className="flex justify-between items-center bg-gray-100 dark:bg-[#252530] p-3 rounded-t-md border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">Experience</span>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsExperienceFullscreen(!isExperienceFullscreen)}
                className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors"
              >
                {isExperienceFullscreen ? (
                  <FiMinimize2 className="text-gray-600 dark:text-gray-400" />
                ) : (
                  <FiMaximize2 className="text-gray-600 dark:text-gray-400" />
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowExperience(false)}
                className="p-1 rounded-md hover:bg-red-500/20 transition-colors"
              >
                <FiX className="text-gray-600 dark:text-gray-400 hover:text-red-500" />
              </motion.button>
            </div>
          </div>

          {/* Experience Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden text-gray-800 dark:text-gray-200 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            
            <Experience/>
          </div>

          {/* Experience Status Bar */}
          <div className="bg-gray-100 dark:bg-[#252530] py-1 px-3 text-xs text-gray-500 border-t border-gray-200 dark:border-gray-800 flex justify-between">
            <span>Experience</span>
            <span>v1.0.0</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceWindow;