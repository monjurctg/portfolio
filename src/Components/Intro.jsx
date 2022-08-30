import React from "react";

import Typical from "react-typical";
// import ScrollAnimation from 'react-animate-on-scroll';

const Intro = () => {
  return (
    <div
      id="intro"
      className="intro"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <small>Hello I'm</small>
      <h1 className="fw-bold">Md Monjurul Alam</h1>
      <Typical
        steps={[
          "Web App Developer",
          1000,
          "MERN stack Developer ",
          1000,
          "Quick Learner",
          1000,
        ]}
        loop={Infinity}
        wrapper="p"
      />
      <div className="linkIcon">
        <a href="https://github.com/monjurctg5" target="_blank">
          <i class="fab fa-github-alt"></i>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100028386409260"
          target="_blank"
        >
          <i class="fab fa-facebook "></i>
        </a>
        <a
          href="https://www.linkedin.com/in/md-monjur-712a841b2/"
          target="_blank"
        >
          <i class="fab  fa-linkedin-in"></i>
        </a>
      </div>
      <a
        className="btn text-white gradient-button-2 gradient-button"
        href="https://drive.google.com/file/d/1IVFbNqH56s_dK0E0bUOvXL30ABFxV0TD/view?usp=sharing"
      >
        Download CV
      </a>
    </div>
  );
};

export default Intro;
