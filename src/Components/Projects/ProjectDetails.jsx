import React from "react";
import { Modal } from "react-bootstrap";
import { Carousel } from "3d-react-carousal";
const ProjectDetails = ({ project, setShow, show }) => {
  console.log(project);

  const {
    title,
    type,
    description,
    sideImage,
    liveUrl,
    clientCode,
    tools,
    serverCode,
  } = project;

  //   console.log(sideImage);

  return (
    <>
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center pb-3">More Image</h3>

          <Carousel
            slides={sideImage?.map((img) => (
              <div className="slider ">
                <img className="w-100" src={img} />
              </div>
            ))}
            interval={1000}
          />

          <div className="project-details mt-4">
            <h4 className="text-center">{title} </h4>
            <p className="text-center">{type}</p>
            <div className="text-center">
              <button className="   fs-3 mx-4">
                <a href={liveUrl} target="_blank">
                  <span>Live Site</span>
                </a>
              </button>
              <button className="   fs-3 mx-4">
                <a href={clientCode} target="_blank">
                  <span>Client Site</span>
                </a>
              </button>
              {serverCode ? (
                <button className="   fs-3 mx-4">
                  <a href={serverCode} target="_blank">
                    <span>Server Site</span>
                  </a>
                </button>
              ) : (
                <></>
              )}
            </div>
            <h3 className="text-center mt-5">Overview</h3>
            {description.map((bpoint) => (
              <li className="bpoint">
                <p>
                  <i class="fas fa-check text-success"></i> {bpoint}
                </p>
              </li>
            ))}
          </div>

          <div className="skills-container">
            <h1 className="text-center pt-5">Tools</h1>
            <div className="skils  mb-5">
              {tools.map((tool) => (
                <div className="skil">{tool}</div>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectDetails;
