import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[100vh]">
        <div className="absolute w-full h-[100vh] ">
          <img
            className="inset-0 object-cover w-full h-full"
            src="/2975527.jpg"
          />
          <div className="absolute h-[100vh] inset-0 bg-[radial-gradient(closest-side,_rgba(0,0,0,0.4),_rgba(0,0,0,1))]"></div>
        </div>
        <div className="absolute lg:w-[60vw]  h-screen px-8 py-24  banner">
          <img
            src="/luckyb&w.jpg"
            alt="Lucky B&W"
            className="w-52 h-52 object-cover rounded-full shadow-2xl mx-8 "
            style={{
              boxShadow: "0 0 20px 10px rgba(43, 43, 46, 0.9)",
            }}
          />

          <h1
            className="mt-12 text"
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.4)",
            }}
          >
            Lucky LK The Backend Guy
          </h1>
          <p>
            I'm Lucky Onoja, but you can call me Lucky LK The Backend Guy. I
            specialize in crafting websites, mobile apps, and integrating AI
            models while managing databases. With expertise in HTML, CSS,
            JavaScript, TypeScript, React JS, Node JS, Python, Redis,
            PostgreSQL, and C++.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
