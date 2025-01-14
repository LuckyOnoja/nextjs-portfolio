import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Project One",
    description: "A brief description of Project One.",
    image: "/projects/1.jpg",
  },
  {
    name: "Project Two",
    description: "A brief description of Project Two.",
    image: "/projects/2.jpg",
  },
  {
    name: "Project Three",
    description: "A brief description of Project Three.",
    image: "/projects/3.jpg",
  },
  {
    name: "Project Four",
    description: "A brief description of Project Four.",
    image: "/projects/4.jpg",
  },
  {
    name: "Project Five",
    description: "A brief description of Project Five.",
    image: "/projects/5.jpg",
  },
  {
    name: "Project Six",
    description: "A brief description of Project Six.",
    image: "/projects/6.jpg",
  },
  {
    name: "Project Seven",
    description: "A brief description of Project Seven.",
    image: "/projects/7.jpg",
  },
  {
    name: "Project Eight",
    description: "A brief description of Project Eight.",
    image: "/projects/8.jpg",
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBrowser, setIsBrowser] = useState(false);
  const [numOfProjects, setNumOfProjects] = useState(4);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    if (isBrowser) {
      const updateNumOfProjects = () => {
        if (window.innerWidth >= 1024) {
          setNumOfProjects(4); // Show 4 projects on large screens
        } else if (window.innerWidth >= 768) {
          setNumOfProjects(3); // Show 3 projects on medium screens
        } else {
          setNumOfProjects(2); // Show 2 projects on small screens
        }
      };

      // Update number of projects on initial load
      updateNumOfProjects();

      // Update number of projects when resizing the window
      window.addEventListener("resize", updateNumOfProjects);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", updateNumOfProjects);
      };
    }
  }, [isBrowser]);

  const nextSlide = () => {
    if (currentSlide + numOfProjects < projects.length) {
      setCurrentSlide(currentSlide + numOfProjects);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - numOfProjects);
    }
  };

  const displayedProjects = projects.slice(
    currentSlide,
    currentSlide + numOfProjects
  );

  return (
    <section className="py-4 px-4 shadow shadow-gray-900 rounded-sm text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title and Description */}
        <div className="text-center mb-8 skill">
          <h2>Projects</h2>
          <p className=" text-gray-400">
            Here are some of the projects I have worked on. Explore and enjoy!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group h-[250px] rounded-3xl shadow-lg shadow-zinc-900 overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div
                className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Hover Effect and Text */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-lg group-hover:bg-blue-900/10 transition-all ease-in-out duration-500">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out flex justify-center items-center w-full h-full">
                  <div className="text-white text-center px-6 py-4">
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <p className="text-sm mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="bg-blue-600 w-8 h-8 rounded-full text-white hover:bg-blue-700 disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            className="bg-blue-600 w-8 h-8 rounded-full text-white hover:bg-blue-700 disabled:opacity-50"
            disabled={currentSlide + numOfProjects >= projects.length}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
