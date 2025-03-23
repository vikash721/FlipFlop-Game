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
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      description:
        "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
      achievements: [
        "Redesigned the user interface, resulting in a 25% increase in user engagement",
        "Implemented CI/CD pipelines, reducing deployment time by 50%",
        "Led the migration from Angular to React, improving application performance",
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      color: "blue",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "InnovateTech",
      location: "New York, NY",
      duration: "Mar 2020 - Dec 2021",
      description:
        "Developed and maintained multiple web applications for clients in various industries. Collaborated with design and product teams to deliver high-quality solutions.",
      achievements: [
        "Built a custom e-commerce platform that increased client sales by 35%",
        "Optimized database queries, reducing load times by 60%",
        "Implemented responsive designs, improving mobile user experience",
      ],
      technologies: ["Node.js", "React", "MongoDB", "Express"],
      color: "purple",
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Digital Solutions",
      location: "Chicago, IL",
      duration: "Jun 2018 - Feb 2020",
      description:
        "Worked on various client projects, developing responsive websites and web applications. Collaborated with a team of designers and developers to deliver projects on time.",
      achievements: [
        "Developed a custom CMS for a major client, saving them $20K in licensing fees",
        "Implemented SEO best practices, improving client site rankings by 40%",
        "Created reusable component libraries, increasing development efficiency",
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
      color: "green",
    },
  ]

  // Education data
  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.",
      achievements: [
        "Published a research paper on neural networks in the IEEE conference",
        "Developed an AI-powered recommendation system as part of thesis project",
        "Received the Outstanding Graduate Student Award",
      ],
      color: "red",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "MIT",
      location: "Cambridge, MA",
      duration: "2012 - 2016",
      description:
        "Focused on software engineering and computer architecture. Participated in multiple hackathons and coding competitions.",
      achievements: [
        "Dean's List for all semesters",
        "Won first place in the university hackathon",
        "Completed a summer internship at Google",
      ],
      color: "yellow",
    },
  ]

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      color: "orange",
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2021",
      color: "blue",
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2020",
      color: "purple",
    },
    {
      id: 4,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      color: "teal",
    },
  ]

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