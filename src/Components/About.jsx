import React from "react";
// import "./about.css";
// import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
// import img from "../../../profile.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="about"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 className="heading">
        {" "}
        <span className="text-warning">About</span> me{" "}
      </h1>

      <div className="row mt-5">
        <div className="col-sm-12 col-lg-6 mb-4 text-center about-img">
          <img
            src="https://i.ibb.co/xDvYJJ4/monjur.jpg"
            className=" profile p-0 m-0"
            alt=""
          />
        </div>
        <div className="col-sm-12 col-lg-5  ps-5">
          <p className="text-start fs-4">
            Hi! This is Monjur, a fourth-year student of B.Sc in Mathematics. I
            am a MERN stack web developer trying to gain confidence using my
            potential in the field of “Web Development”. I will express my
            innovative creative skills for self and company growth.
          </p>
          <a
            href="https://drive.google.com/file/d/1IVFbNqH56s_dK0E0bUOvXL30ABFxV0TD/view?usp=sharing"
            className="btn gradient-button gradient-button-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
