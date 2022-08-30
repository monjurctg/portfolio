import React from "react";

// import "./project.css";

// import ProjectData from "./fakeData";
import ProjectImage from "./ProjectImage";
// console.log(ProjectData)
let ProjectData = [
  {
    title: "hello",
    type: "hello world",
    description: ["dfjkdjfkdjf", "jfdkjfkdjfd", "kjdfkdjfkjd"],
    sideImage: ["dfjkdjfkdjf", "jfdkjfkdjfd", "kjdfkdjfkjd"],
    liveUrl: "jdfjdkfjkdjfd",
    clientCode: "jdkjfkdjfkdjf",
    tools: ["dfjkdjfkdjf", "jfdkjfkdjfd", "kjdfkdjfkjd"],
    serverCode: "djfkjdfkjdkfjdkjdk",
  },
];
const Projects = () => {
  return (
    <div
      className="container projects mb-5"
      id="projects"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 className="heading">
        {" "}
        <span className="text-warning">My</span> Projects{" "}
      </h1>
      <div className="mt-5 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        {ProjectData.map((project) => (
          <ProjectImage project={project}></ProjectImage>
        ))}
      </div>
    </div>
  );
};

export default Projects;
