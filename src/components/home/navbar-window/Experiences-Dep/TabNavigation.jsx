import { motion } from "framer-motion"
import { FiBriefcase, FiAward, FiBook } from "react-icons/fi"

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "work", label: "Work Experience", icon: <FiBriefcase /> },
    { id: "education", label: "Education", icon: <FiBook /> },
    { id: "certifications", label: "Certifications", icon: <FiAward /> },
  ]

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-gray-800/50 rounded-lg p-1 z-50">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.icon} {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default TabNavigation