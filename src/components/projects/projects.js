import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { projectLists } from "./projectData";

//icons
import L_HTML5 from "../../assets/skills/html-5.svg";
import L_CSS from "../../assets/skills/css.png";
import L_REACT from "../../assets/skills/react.svg";
import L_REACT_NATIVE from "../../assets/skills/react-native.png";
import L_REDUX from "../../assets/skills/redux.svg";
import L_MATERIALUI from "../../assets/skills/material-ui-1.svg";
import L_SEQUELIZE from "../../assets/skills/sequelize.png";
import L_JAVASCRIPT from "../../assets/skills/javascript.svg";
import L_FIREBASE from "../../assets/skills/firebase.png";
import L_EXPO from "../../assets/skills/expo.png";
import L_VICTORY from "../../assets/skills/victory.png";

const Projects = () => {
  // const displayProjects = (projects) => {
  //   return projects.map((project) => {
  //     return (
  //       <div>
  //         <h2>{project.title}</h2>
  //         <h4>{project.caption}</h4>
  //         <h4>{project.description}</h4>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          {/* {displayProjects(projectLists)} */}

          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Accordion>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> This is a Todo App created with
                  React and Material UI that keeps a track of your Todos
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li>Keeps track of your Todos</li>
                    <li>Powered by React and Material UI</li>
                    <li>Respoisive Design</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_HTML5}
                          alt="HTML 5"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_CSS}
                          alt="CSS 3"
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        CSS3
                      </span>
                    </li>
                    {/* <li>
                      <span className="p-2">
                        <Image
                          src={L_REACT}
                          alt="React"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        React
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_MATERIALUI}
                          alt="Material-UI"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Material-UI
                      </span>
                    </li> */}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Projects;
