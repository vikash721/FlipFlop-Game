import { motion } from "framer-motion"
import { FiCalendar, FiMapPin, FiChevronRight } from "react-icons/fi"

const TimelineContent = ({ activeTab, data, containerVariants, itemVariants }) => {
  return (
    <motion.div
      key={activeTab} // Add key to ensure re-render on tab switch
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative"
    >
      {/* Timeline Line */}
      {(activeTab === "work" || activeTab === "education") && (
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent transform md:-translate-x-1/2"></div>
      )}

      {/* Timeline Items */}
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className={`relative mb-12 last:mb-0 ${
            activeTab === "certifications"
              ? "md:w-full"
              : index % 2 === 0
                ? "md:ml-auto md:w-1/2 md:pl-12"
                : "md:mr-auto md:w-1/2 md:pr-12"
          }`}
        >
          {/* Timeline Dot */}
          {(activeTab === "work" || activeTab === "education") && (
            <div
              className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-${item.color}-500 border-4 border-gray-900 transform -translate-x-1/2 z-10`}
            ></div>
          )}

          {/* Content Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {activeTab === "work" ? item.role : activeTab === "education" ? item.degree : item.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  {activeTab === "certifications" ? (
                    <a href="https://www.linkedin.com/in/vikashkumar721/details/certifications/" target="_blank" className="text-blue-500 hover:underline font-medium">
                    {item.issuer}
                  </a>
                  
                  ) : (
                    <>
                      <span>{activeTab === "work" ? item.company : item.institution}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                <FiCalendar size={14} />
                <span className="text-sm">{activeTab === "certifications" ? item.date : item.duration}</span>
              </div>
            </div>

            {/* Location (for work and education) */}
            {(activeTab === "work" || activeTab === "education") && (
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <FiMapPin size={14} />
                <span className="text-sm">{item.location}</span>
              </div>
            )}

            {/* Description (for work and education) */}
            {(activeTab === "work" || activeTab === "education") && (
              <p className="text-gray-400 mb-4">{item.description}</p>
            )}

            {/* Achievements (for work and education) */}
            {(activeTab === "work" || activeTab === "education") && item.achievements && (
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <FiChevronRight className="text-blue-400 mt-1 flex-shrink-0" size={14} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies (for work) */}
            {activeTab === "work" && item.technologies && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TimelineContent