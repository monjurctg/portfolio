import React from "react";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects/Project";
import Skills from "../Components/Projects/Skils";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <About />
      <Blogs />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
