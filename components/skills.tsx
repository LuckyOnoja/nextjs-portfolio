import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";
import { SkillCard } from "./skillCard";
import CrazyAnimation from "./crazyAnimation";
import FancyAnimation from "./fancyAnimation";
import MasterpieceAnimation from "./standardAnimation";
import SnakeAnimation from "./snakeLikeAnimation";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Redis", icon: <SiRedis size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "C++", icon: <SiCplusplus size={40} /> },
  ];

  return (
    <div id="skills" className="relative  min-h-screen">
      <div className="absolute min-h-screen inset-0 bg-[radial-gradient(closest-side,_rgba(0,0,0,0.4),_rgba(0,0,0,0.8))]"></div>
      <div className="relative skill text-white z-50 flex  flex-col items-center justify-center ">
        <h2 className=" z-50">Skills</h2>
        <p className=" mb-8 px-8 lg:px-24 z-50 text-zinc-800">
          I’m a Full Stack Developer with a passion for building efficient,
          scalable, and user-friendly applications. With expertise in backend
          development and modern frameworks like React, Next.js, and Node.js, I
          thrive on solving challenges and delivering innovative solutions.
          Here’s a glimpse of the skills I bring to the table:
        </p>
        <div className="relative overflow-hidden w-full h-40 bg-black z-50">
          <motion.div
            className="flex space-x-6 "
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </div>
        <SnakeAnimation />
      </div>
    </div>
  );
};

export default Skills;
