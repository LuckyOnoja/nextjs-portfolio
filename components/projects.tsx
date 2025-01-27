import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "Web3-python-api",
    description: "A Web 3 API!",
    image: "/projects/1.jpg",
    link: "https://github.com/LuckyOnoja/web3-python-api",
  },
  {
    name: "Realtime-Chat-App-Api",
    description: "A Realtime Chat App , built with nodejs.",
    image: "/projects/2.jpg",
    link: "https://github.com/LuckyOnoja/Realtime-Chat-App-Api",
  },
  {
    name: "Hospital_dm_server",
    description: "This is a Data Management system for hospitals.",
    image: "/projects/3.jpg",
    link: "https://github.com/LuckyOnoja/hospital_dm_server",
  },
  {
    name: "Social_app_server ",
    description: "Server for a social app.",
    image: "/projects/4.jpg",
    link: "https://github.com/LuckyOnoja/social_app_server",
  },
  {
    name: "Ccp-server",
    description: "SERVER SIDE FOR COURSE CAREER PATH.",
    image: "/projects/5.jpg",
    link: "https://github.com/LuckyOnoja/ccp-server",
  },
  {
    name: "Aora",
    description: "A React Native app for watching AI videos.",
    image: "/projects/6.jpg",
    link: "https://github.com/LuckyOnoja/aora_luckyLk_project",
  },
  {
    name: "MONEYMIND-CLIENT",
    description: "A Finanace guide built with react native.",
    image: "/projects/7.jpg",
    link: "https://github.com/LuckyOnoja/MONEYMIND-CLIENT",
  },
  {
    name: "AAFXINVESTMENT",
    description: "an investment platform.",
    image: "/projects/8.jpg",
    link: "https://github.com/LuckyOnoja/AAFXINVESTMENT",
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
                <Link href={`${project.link}`}>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out flex justify-center items-center w-full h-full">
                    <div className="text-white text-center px-6 py-4">
                      <h3 className="text-2xl font-semibold">{project.name}</h3>
                      <p className="text-sm mt-2">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            disabled={currentSlide === 0}
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            disabled={currentSlide + numOfProjects >= projects.length}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
