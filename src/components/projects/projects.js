import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { projectLists } from "./projectData";

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

import "./projects.css";

const Projects = () => {
  const displayProjects = (projects) => {
    return projects.map((project) => {
      return (
        <div>
          <CardDeck className="justify-content-center">
            <Row className="justify-content-center">
              <Col md={6} className="pb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  rounded
                  className="imageCard text-center mt-2 mb-2"
                ></Image>{" "}
              </Col>

              <Col md={6} className="pb-4">
                <Card className="mt-2 mb-2 text-center">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {project.title}
                      <h5>{project.caption}</h5>
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      <h4 className="infoText">{project.description}</h4>
                    </Card.Text>
                  </Card.Body>
                  <button
                    // as={Card.Header}
                    className="p-2 text-center modal-main"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    PROJECT DETAILS
                  </button>
                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
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
                </Card>
              </Col>
            </Row>
          </CardDeck>
        </div>
      );
    });
  };

  return (
    <div id="projects">
      <h1 className="text-center font-details-b pt-4 pb-4">PROJECTS</h1>
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>{displayProjects(projectLists)}</div>
      </div>
    </div>
  );
};

export default Projects;
