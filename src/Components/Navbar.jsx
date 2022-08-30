import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Md Monjur
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  smooth={true}
                  duration={1000}
                  className="nav-link active"
                  aria-current="page"
                  to="contact"
                >
                  contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  duration={1000}
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  duration={1000}
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  to="skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  duration={1000}
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  to="blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  duration={1000}
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  to="projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
