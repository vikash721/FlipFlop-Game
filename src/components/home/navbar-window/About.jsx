import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase } from "react-icons/fi";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Skills data
  const skills = [
    {
      category: "Frontend",
      icon: <FiLayout className="text-blue-400" size={24} />,
      items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-purple-500",
    },
    {
      category: "Backend",
      icon: <FiServer className="text-green-400" size={24} />,
      items: ["Node.js", "Express", "Python", "Django", "GraphQL"],
      color: "from-green-500 to-teal-500",
    },
    {
      category: "Database",
      icon: <FiDatabase className="text-yellow-400" size={24} />,
      items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      category: "DevOps",
      icon: <FiCode className="text-red-400" size={24} />,
      items: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-12"
        >
          {/* Left column - About me text */}
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400">
                About Me
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Passionate about creating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                exceptional digital experiences
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-400">
              <p>
                I'm a full-stack developer with over 5 years of experience building modern web applications. 
                My journey in tech started when I built my first website at 15, and I've been hooked ever since.
              </p>
              
              <p>
                I specialize in creating fast, responsive, and user-friendly applications using cutting-edge technologies. 
                My approach combines technical expertise with a keen eye for design and user experience.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all inline-block"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right column - Skills */}
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                  </div>
                  
                  <div className="mt-2">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 mb-2">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                        <span className="text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
