import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import BackgroundGrid from "../components/home/BackgroundGrid";
import HeroSection from "../components/home/HeroSection";
import TerminalWindow from "../components/home/TerminalWindow";
import DocumentationWindow from "../components/home/DocumentationWindow";
import AboutWindow from "../components/home/AboutWindow";
import ProjectsWindow from "../components/home/ProjectsWindow";
import ExperienceWindow from "../components/home/ExperienceWindow";
import ContactWindow from "../components/home/ContactWindow";

export default function HomePage() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isTerminalFullscreen, setIsTerminalFullscreen] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [isDocsFullscreen, setIsDocsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showAbout, setShowAbout] = useState(false);
  const [isAboutFullscreen, setIsAboutFullscreen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isProjectsFullscreen, setIsProjectsFullscreen] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [isExperienceFullscreen, setIsExperienceFullscreen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isContactFullscreen, setIsContactFullscreen] = useState(false);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTerminalClick = () => {
    setShowTerminal(true);
    setShowDocs(false);
    setShowAbout(false);
    setShowProjects(false);
    setShowExperience(false);
    setShowContact(false);
  };

  const handleDocsClick = () => {
    setShowDocs(true);
    setShowTerminal(false);
    setShowAbout(false);
    setShowProjects(false);
    setShowExperience(false);
    setShowContact(false);
  };

  const handleNavItemClick = (section) => {
    setShowTerminal(false);
    setShowDocs(false);
    setShowAbout(section === "about");
    setShowProjects(section === "projects");
    setShowExperience(section === "experience");
    setShowContact(section === "contact");
  };

  // Variants for animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const heroVariants = {
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
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundGrid />

      {/* Navbar */}
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navVariants={navVariants}
        handleNavItemClick={handleNavItemClick}
      />

      {/* Hero Section */}
      <HeroSection
        handleTerminalClick={handleTerminalClick}
        handleDocsClick={handleDocsClick}
        heroVariants={heroVariants}
        itemVariants={itemVariants}
      />

      {/* Terminal Window */}
      <TerminalWindow
        showTerminal={showTerminal}
        isTerminalFullscreen={isTerminalFullscreen}
        setIsTerminalFullscreen={setIsTerminalFullscreen}
        setShowTerminal={setShowTerminal}
        windowVariants={windowVariants}
      />

      {/* Documentation Window */}
      <DocumentationWindow
        showDocs={showDocs}
        isDocsFullscreen={isDocsFullscreen}
        setIsDocsFullscreen={setIsDocsFullscreen}
        setShowDocs={setShowDocs}
        windowVariants={windowVariants}
      />

      {/* About Window */}
      <AboutWindow
        showAbout={showAbout}
        isAboutFullscreen={isAboutFullscreen}
        setIsAboutFullscreen={setIsAboutFullscreen}
        setShowAbout={setShowAbout}
        windowVariants={windowVariants}
      />

      {/* Projects Window */}
      <ProjectsWindow
        showProjects={showProjects}
        isProjectsFullscreen={isProjectsFullscreen}
        setIsProjectsFullscreen={setIsProjectsFullscreen}
        setShowProjects={setShowProjects}
        windowVariants={windowVariants}
      />

      {/* Experience Window */}
      <ExperienceWindow
        showExperience={showExperience}
        isExperienceFullscreen={isExperienceFullscreen}
        setIsExperienceFullscreen={setIsExperienceFullscreen}
        setShowExperience={setShowExperience}
        windowVariants={windowVariants}
      />

      {/* Contact Window */}
      <ContactWindow
        showContact={showContact}
        isContactFullscreen={isContactFullscreen}
        setIsContactFullscreen={setIsContactFullscreen}
        setShowContact={setShowContact}
        windowVariants={windowVariants}
      />

      {/* Overlay when windows are open */}
      <AnimatePresence>
        {(showTerminal || showDocs || showAbout || showProjects || showExperience || showContact) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => {
              setShowTerminal(false);
              setShowDocs(false);
              setShowAbout(false);
              setShowProjects(false);
              setShowExperience(false);
              setShowContact(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}