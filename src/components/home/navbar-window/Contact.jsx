"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin} from "react-icons/fi"
import { FaXTwitter  } from "react-icons/fa6"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  
  



  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://formspree.io/f/mvgkavbd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    }
  
    setIsSubmitting(false);
  };

  // Contact info data
  const contactInfo = [
    {
      icon: <FiMail className="text-blue-400" />,
      title: "Email",
      value: "vikashkumar355555@gmail.com",
      link: "mailto:vikashkumar355555@gmail.com",
    },
    {
      icon: <FiPhone className="text-green-400" />,
      title: "Phone",
      value: "+91 9958749688",
      link: "tel:+15551234567",
    },
    {
      icon: <FiMapPin className="text-red-400" />,
      title: "Location",
      value: "Delhi, India",
      link: "https://maps.google.com/?q=Delhi,+India",
    },
  ]

  // Social media data
  const socialMedia = [
    {
      icon: <FiGithub />,
      name: "GitHub",
      link: "https://github.com/vikash721",
      color: "hover:text-white",
    },
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vikashkumar721/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaXTwitter  />,
      name: "Twitter",
      link: "https://twitter.com/vikash_code",
      color: "hover:text-blue-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f] relative">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl"></div>

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
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open
            to new ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                 <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          placeholder="Project Inquiry"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-blue-700 hover:to-purple-700"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FiSend /> Send Message
          </>
        )}
      </motion.button>

      {submitStatus === "success" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
          Your message has been sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
          Oops! Something went wrong. Please try again later.
        </motion.div>
      )}
              </form>


            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex items-start gap-4"
                >
                  <div className="p-3 bg-gray-800 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                  >
                    <div className={`text-gray-400 ${social.color} text-2xl mb-2`}>{social.icon}</div>
                    <span className="text-sm text-gray-400">{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Prefer email? Reach out directly at{" "}
                  <a href="mailto:vikashkumar355555@gmail.com" className="text-blue-400 hover:underline">
                  vikashkumar355555@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

