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
                <Card className="mt-2 mb-2 imageCard">
                  {/* <Card.Body > */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    rounded
                    className="imageCard"

                  ></Image>{" "}


                  {/* </Card.Body> */}

                </Card>
              </Col>
              {/* <Col md={3} className="pb-4 imageCard">
                <Card className="mt-2 mb-2 ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    rounded
                  ></Image>{" "}
                </Card>
              </Col> */}
              <Col md={6} className="pb-4">
                <Card className="mt-2 mb-2">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {project.title}
                      <h4>{project.caption}</h4>
                    </Card.Title>
                    <hr />
                    <Card.Text>
                      <h4 className="infoText">{project.description}</h4>
                    </Card.Text>
                  </Card.Body>
                  <Button
                    // as={Card.Header}
                    eventKey="1"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Button>
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
