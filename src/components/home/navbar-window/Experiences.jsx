"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TabNavigation from "./Experiences-Dep/TabNavigation"
import TimelineContent from "./Experiences-Dep/TimelineContent"

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work")

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Work experience data
  const workExperience = [

    {
        id: 6,
        role: "Frontend Developer & Project Lead",
        company: "SDIET Techies (College Community)",
        location: "SDIET College",
        duration: "2025 - Present",
        description:
          "Leading the development of SDIET Techies, a community platform for college events and student engagement. Designing and implementing key features, ensuring a smooth user experience, and managing project structure.",
        achievements: [
          "Built an event management system with role-based access control",
          "Implemented state management using Zustand for efficient data handling",
          "Designed a modern and responsive UI using Tailwind CSS and Framer Motion",
        ],
        technologies: ["React", "Tailwind CSS", "Zustand", "Spring Boot"],
        color: "blue",
      },
    {
      id: 1,
      role: "Project Showcase Winner",
      company: "SDIET Tech Fest 2025",
      location: "SDIET College",
      duration: "February 2025",
      description:
        "Showcased SDIETTechies at our college tech fest and secured 1st place.",
      achievements: [
        "Presented the platform's features, including event management and student collaboration",
        "Received top ranking for innovation and impact",
        "Engaged with faculty and students to improve platform usability",
      ],
      technologies: ["React", "Tailwind CSS", "Zustand", "Spring Boot"],
      color: "yellow",
    },

    {
        id: 5,
        role: "Tech Fest Organizer",
        company: "SDIET College",
        location: "SDIET College",
        duration: "February 2025",
        description:
          "Organized and managed the SDIET Tech Fest 2025, coordinating various tech events and ensuring smooth execution.",
        achievements: [
          "Managed a team of volunteers and coordinators to execute a successful tech fest",
          "Planned and structured events, including hackathons, coding contests, and guest lectures",
          "Handled event logistics, sponsorships, and participant engagement",
        ],
        technologies: ["Event Management", "Leadership", "Coordination"],
        color: "gree",
      },
      {
        id: 4,
        role: "Hackathon Participant",
        company: "HackWithMAIT 5.0",
        location: "Delhi, India",
        duration: "October 2024",
        description:
          "Developed CertifyMe, a Web3-based certificate generation and verification platform.",
        achievements: [
          "Created a decentralized system for issuing verifiable certificates",
          "Implemented blockchain-based certificate validation",
          "Designed an efficient and secure certificate storage mechanism",
        ],
        technologies: ["React", "Solidity", "IPFS", "Ethereum"],
        color: "purple",
      },
    
    {
      id: 3,
      role: "Hackathon Participant",
      company: "SIH (Smart India Hackathon) 2024",
      location: "India",
      duration: "August 2024",
      description:
        "Built an alumni-student interaction platform to enhance networking and mentorship opportunities.",
      achievements: [
        "Presented at college level and cleared the college round.",
        "Implemented real-time chat and alumni search features",
        "Designed a user-friendly dashboard for students and alumni",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      color: "green",
    },
    
    {
        id: 2,
        role: "Hackathon Participant",
        company: "HackIndia Web3 Hackathon",
        location: "India",
        duration: "July 2024",
        description:
          "Developed a Web3-based decentralized voting system, ensuring security and transparency in elections.",
        achievements: [
          "Implemented smart contracts for secure and tamper-proof voting",
          "Optimized blockchain transactions to minimize gas fees",
          "Designed an intuitive UI for seamless user experience",
        ],
        technologies: ["React", "Solidity", "Ethereum", "Web3.js"],
        color: "purple",
      },
   
    
   
  ];
  
  

  // Education data
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Satyug Darshan Institute of Engineering & Technology (SDIET)",
      location: "Faridabad, Haryana",
      duration: "2023 - 27",
      description: "Pursuing a comprehensive curriculum in computer science, focusing on software development, data structures, and algorithms.",
      achievements: [
        "Active participant in coding competitions and hackathons.",
        "Organized and led workshops on web development and emerging technologies.",
        "Organized and led Tech Fest 2025 at SDIET College. with a team of 11 members.",
        "Showcased SDIETTechies Platfrom at our college Tech Fest and secured 1st place."

      ],
      color: "blue",
    },
    {
      id: 2,
      degree: "Senior Secondary Education (12th)",
      institution: "Sarvodaya Bal Vidyalaya No.1",
      location: "Delhi",
      duration: "2021 - 2023",
      description: "Studied PCM (Physics, Chemistry, Mathematics)",
      achievements: [
        "Secured 81% in board examinations.",
        "Participated in Delhi Government's Student Entrepreneurship Program, where I worked on a startup idea and gained hands-on experience in business development.",
        "Built my first HTML website, sparking my passion for technology and web development."
      ],
      color: "green",
    },

  ];
  

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: "Technical Project Showcase",
      issuer: "Satyug Darshan Institute of Engineering & Technology",
      date: "March 2025",
      color: "blue",
    },
    {
      id: 2,
      name: "Generative AI Study Jams 2023-2024",
      issuer: "Satyug Darshan Institute of Engineering & Technology",
      date: "January 2025",
      color: "red",
    },
    {
      id: 3,
      name: "HackwithMait 5.0",
      issuer: "Maharaja Agrasen Institute Of Technology, Delhi",
      date: "October 2024",
      color: "purple",
    },
    {
      id: 4,
      name: "web3 Hackathon ",
      issuer: "HackIndiaHackIndia",
      date: "September 2024",
      color: "yellow",
    },
    {
      id: 5,
      name: "Logo Making Competition",
      issuer: "Satyug Darshan Institute of Engineering & Technology",
      date: "August 2024",
      color: "green",
    },
    {
      id: 6,
      name: "Web3 Hackathon",
      issuer: "HackIndia",
      date: "August 2024",
      color: "teal",
    },
    
  ];
  

  

  // Get active data based on tab
  const getActiveData = () => {
    switch (activeTab) {
      case "work":
        return workExperience
      case "education":
        return education
      case "certifications":
        return certifications
      default:
        return workExperience
    }
  }

  return (
    <section id="experience" className="py-20 bg-[#0a0a0f] relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-1/3 h-1/3 bg-yellow-500/5 rounded-full blur-3xl"></div>

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
              My Journey
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey, education, and certifications that have shaped my career and expertise in software
            development.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Timeline Content */}
        <TimelineContent
          activeTab={activeTab}
          data={getActiveData()}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
    </section>
  )
}

export default Experience