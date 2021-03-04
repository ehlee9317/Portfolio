import React from "react";
import ProjectCardItem from "./projectCardItem";
import "./projectCards.css";
import NAVIHEALTH from "../../assets/projects/navihealth.jpg";
import FOODNATION from "../../assets/projects/foodnation.jpg";
import CELLAR from "../../assets/projects/cellar.jpg";

const ProjectCards = () => {
  return (
    <div className="cards">
      <h1>PROJECTS</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <ProjectCardItem
              src={NAVIHEALTH}
              text="NaviHealth is an iOS based mobile application that help you track and meet your fitness goals"
              label="NAVIHEALTH"
              path="/navihealth"
            />
            <ProjectCardItem
              src={CELLAR}
              text="An e-commerce web application, where you can shop various types of wine products."
              label="CELLAR"
              path="/cellar"
            />
            <ProjectCardItem
              src={FOODNATION}
              text="A one stop mobile application, where you can search for different food recipes"
              label="FOODNATION"
              path="/foodnation"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
