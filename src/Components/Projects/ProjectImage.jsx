import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
// import { Button} from 'react-bootstrap';

const ProjectImage = ({ project }) => {
  const [show, setShow] = useState(false);
  const { title, type, imageUrl, description, liveUrl, github, tools } =
    project;

  console.log(project);
  return (
    <div className="col">
      <div className="project project-hover ">
        <img src="https://i.ibb.co/wCD9FWB/travle-home.png" alt="1" />

        <button
          className="overlay2  text-white fs-3 "
          onClick={() => setShow(true)}
        >
          <span className="">Details</span>
        </button>
        <ProjectDetails
          project={project}
          setShow={setShow}
          show={show}
        ></ProjectDetails>
      </div>
    </div>
  );
};

export default ProjectImage;
