import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Spline from "@splinetool/react-spline";
import Skills from "@/components/skills";
import Banner from "@/components/banner";
import RollingBallAnimation from "@/components/rollingBallAnimation";
import Projects from "@/components/projects";
import { motion } from "framer-motion"; // Importing framer-motion
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";

const Index = () => {
  // State to track visibility of sections
  const [inViewBanner, setInViewBanner] = useState(false);
  const [inViewSkills, setInViewSkills] = useState(false);
  const [inViewProjects, setInViewProjects] = useState(false);
  const [inViewContact, setInViewContact] = useState(false);

  // Intersection Observer callback to detect section visibility
  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Set state to true when section is in view
        if (entry.target.id === "banner") setInViewBanner(true);
        if (entry.target.id === "skills") setInViewSkills(true);
        if (entry.target.id === "projects") setInViewProjects(true);
        if (entry.target.id === "contact") setInViewContact(true);
      }
    });
  };

  useEffect(() => {
    // Create Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // Trigger animation when 20% of the section is in view
    });

    // Observe sections
    const bannerElement = document.getElementById("banner");
    const skillsElement = document.getElementById("skills");
    const projectsElement = document.getElementById("projects");
    const contactElement = document.getElementById("contact");

    if (bannerElement) observer.observe(bannerElement);
    if (skillsElement) observer.observe(skillsElement);
    if (projectsElement) observer.observe(projectsElement);
    if (contactElement) observer.observe(contactElement);

    // Cleanup observer on component unmount
    return () => {
      if (bannerElement) observer.unobserve(bannerElement);
      if (skillsElement) observer.unobserve(skillsElement);
      if (projectsElement) observer.unobserve(projectsElement);
      if (contactElement) observer.unobserve(contactElement);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black scroll-smooth">
      <Navbar />

      {/* Banner Section with Scroll Animation */}
      <motion.section
        id="banner"
        initial={{ opacity: 0, y: -100 }} // Start from above and transparent
        animate={{
          opacity: inViewBanner ? 1 : 0,
          y: inViewBanner ? 0 : -100,
        }} // Animate on scroll when section is in view
        transition={{ duration: 1.5 }}
      >
        <Banner />
      </motion.section>

      {/* Skills Section with Scroll Animation */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: inViewSkills ? 1 : 0,
          y: inViewSkills ? 0 : 100,
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full">
          <RollingBallAnimation />
        </div>
        <Skills />
      </motion.section>

      {/* Projects Section with Scroll Animation */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: inViewProjects ? 1 : 0,
          y: inViewProjects ? 0 : 100,
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full">
          <RollingBallAnimation />
        </div>
        <Projects />
      </motion.section>

      {/* Contact Section with Scroll Animation */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: inViewProjects ? 1 : 0,
          y: inViewProjects ? 0 : 100,
        }}
        transition={{ duration: 1.5 }}
      >
        <ContactForm />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
