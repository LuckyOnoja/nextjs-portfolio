import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircularProgress from "./circularProgress";

const skillsGrading = [
  { name: "Html", percentage: 80 },
  { name: "Css", percentage: 90 },
  { name: "JavaScript", percentage: 95 },
  { name: "TypeScript", percentage: 85 },
  { name: "React.js", percentage: 95 },
  { name: "Next.js", percentage: 95 },
  { name: "Node.js", percentage: 98 },
  { name: "MongoDB", percentage: 98 },
  { name: "PostgreSQL", percentage: 95 },
  { name: "Redis", percentage: 85 },
  { name: "Python", percentage: 85 },
  { name: "C++", percentage: 75 },
];

const SkillsGrading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Dynamically adjust the number of visible items based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3); // Show 3 items on large screens
      } else if (width >= 640) {
        setItemsPerPage(2); // Show 2 items on medium screens
      } else {
        setItemsPerPage(1); // Show 1 item on small screens
      }
    };

    updateItemsPerPage(); // Set items initially
    window.addEventListener("resize", updateItemsPerPage);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % skillsGrading.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? skillsGrading.length - itemsPerPage : prev - itemsPerPage
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-zinc-900 text-white rounded-xl">
      <div className="relative flex items-center justify-center w-full">
        <button
          className="absolute left-0 z-10 w-8 h-8  text-white bg-blue-600 rounded-full hover:bg-blue-700"
          onClick={handlePrev}
        >
          &lt;
        </button>

        <div className="relative w-full  flex items-center justify-evenly overflow-x-auto ">
          <AnimatePresence mode="wait">
            {skillsGrading
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="" // Adjust the width based on the screen size
                >
                  <CircularProgress
                    percentage={skill.percentage}
                    label={skill.name}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <button
          className="absolute right-0 z-10  w-8 h-8 text-white bg-blue-600 rounded-full hover:bg-blue-700"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SkillsGrading;
