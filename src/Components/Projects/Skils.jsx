import React, { useState } from "react";
// import "./Skills.css";
import ProgressBar from "react-animated-progress-bar";
let img =
  "https://cdn.business2community.com/wp-content/uploads/2015/10/digital-skills2.jpg.jpg";
const Skills = () => {
  const [onHtmlHover, setOnHtmlHover] = useState(false);
  const [onCSSHover, setOnCSSHover] = useState(false);
  const [onBootstrapHover, setOnBootstrapHover] = useState(false);
  const [onReactHover, setReactHover] = useState(false);
  const [onJsHover, setOnJsHover] = useState(false);
  const [onAPiHover, setOnApiHover] = useState(false);
  const [onFirebaseHover, setOnFirebaseHover] = useState(false);
  const [onNetlifyHover, setOnNetlifyHover] = useState(false);
  const [onHerokuHover, setOnHerokuHover] = useState(false);
  const [progressOff, setProgressof] = useState(false);

  const progressof = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(true);
  };

  const handleHtmlProgress = () => {
    setOnHtmlHover(true);
    setOnCSSHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleCSSProgress = () => {
    setOnCSSHover(true);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleBootstrapProgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(true);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleJsgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(true);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleReactProgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(true);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleApiProgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(true);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleFirebaseProgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(true);
    setOnNetlifyHover(false);
    setOnHerokuHover(false);
  };
  const handleNetlifyProgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(true);
    setOnHerokuHover(false);
  };
  const handleHerokuProgress = () => {
    setOnCSSHover(false);
    setOnHtmlHover(false);
    setOnBootstrapHover(false);
    setOnJsHover(false);
    setReactHover(false);
    setOnApiHover(false);
    setOnFirebaseHover(false);
    setOnNetlifyHover(false);
    setOnHerokuHover(true);
  };

  return (
    <div
      className="container text-white"
      id="skills"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 className="heading text-warning"> Skills </h1>

      <div className="row mb-5  mt-5">
        <div className="col-sm-12 col-lg-5 offset-md-1">
          <div className="skils">
            <div className="skil" onMouseOver={handleHtmlProgress}>
              {onHtmlHover ? (
                <ProgressBar width="150" trackWidth="13" percentage="80" />
              ) : (
                "HTML"
              )}
            </div>
            <div className="skil" onMouseOver={handleCSSProgress}>
              {onCSSHover ? (
                <ProgressBar width="155" trackWidth="13" percentage="80" />
              ) : (
                "CSS"
              )}
            </div>
            <div className="skil" onMouseOver={handleBootstrapProgress}>
              {onBootstrapHover ? (
                <ProgressBar width="120" trackWidth="13" percentage="70" />
              ) : (
                "Bootstrap"
              )}
            </div>
            <div className="skil" onMouseOver={handleJsgress}>
              {onJsHover ? (
                <ProgressBar width="120" trackWidth="13" percentage="70" />
              ) : (
                "Javasripit"
              )}
            </div>
            <div className="skil" onMouseOver={handleReactProgress}>
              {onReactHover ? (
                <ProgressBar width="155" trackWidth="13" percentage="75" />
              ) : (
                "React"
              )}
            </div>
            <div className="skil" onMouseOver={handleFirebaseProgress}>
              {onFirebaseHover ? (
                <ProgressBar width="155" trackWidth="13" percentage="60" />
              ) : (
                "Firebase"
              )}
            </div>

            <div className="skil" onMouseOver={handleApiProgress}>
              {onAPiHover ? (
                <ProgressBar width="155" trackWidth="13" percentage="60" />
              ) : (
                "Api"
              )}
            </div>

            <div className="skil" onMouseOver={handleNetlifyProgress}>
              {onNetlifyHover ? (
                <ProgressBar width="155" trackWidth="13" percentage="80" />
              ) : (
                "Netlify"
              )}
            </div>
            <div className="skil" onMouseOver={handleHerokuProgress}>
              {onHerokuHover ? (
                <ProgressBar width="155" trackWidth="13" percentage="80" />
              ) : (
                "Heroku"
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5  mt-5">
          <img src={img} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
