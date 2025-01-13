import React from "react";
import Navbar from "@/components/navbar";
import Spline from "@splinetool/react-spline";
import Skills from "@/components/skills";
import Banner from "@/components/banner";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black scroll-smooth">
      <Navbar />
      <section id="banner">
        <Banner />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default Index;
