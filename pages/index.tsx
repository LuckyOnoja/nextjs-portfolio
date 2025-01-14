import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Spline from "@splinetool/react-spline";
import Skills from "@/components/skills";
import Banner from "@/components/banner";
import RollingBallAnimation from "@/components/rollingBallAnimation";
import Projects from "@/components/projects";
import { motion } from "framer-motion"; // Importing framer-motion

const Index = () => {
  // State to track visibility of sections
  const [inViewBanner, setInViewBanner] = useState(false);
  const [inViewSkills, setInViewSkills] = useState(false);
  const [inViewProjects, setInViewProjects] = useState(false);

  // Intersection Observer callback to detect section visibility
  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Set state to true when section is in view
        if (entry.target.id === "banner") setInViewBanner(true);
        if (entry.target.id === "skills") setInViewSkills(true);
        if (entry.target.id === "projects") setInViewProjects(true);
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

    if (bannerElement) observer.observe(bannerElement);
    if (skillsElement) observer.observe(skillsElement);
    if (projectsElement) observer.observe(projectsElement);

    // Cleanup observer on component unmount
    return () => {
      if (bannerElement) observer.unobserve(bannerElement);
      if (skillsElement) observer.unobserve(skillsElement);
      if (projectsElement) observer.unobserve(projectsElement);
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
        initial={{ opacity: 0, y: 100 }} // Start from below and transparent
        animate={{
          opacity: inViewSkills ? 1 : 0,
          y: inViewSkills ? 0 : 100,
        }} // Animate on scroll when section is in view
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
        initial={{ opacity: 0, y: 100 }} // Start from below and transparent
        animate={{
          opacity: inViewProjects ? 1 : 0,
          y: inViewProjects ? 0 : 100,
        }} // Animate on scroll when section is in view
        transition={{ duration: 1.5 }}
      >
        <div className="w-full">
          <RollingBallAnimation />
        </div>
        <Projects />
      </motion.section>
    </div>
  );
};

export default Index;
