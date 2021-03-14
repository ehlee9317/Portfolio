import React from "react";
import ProjectCardItem from "./projectCardItem";
import "./projectCards.css";
import NAVIHEALTH from "../../assets/projects/navihealth.jpg";
import FOODNATION from "../../assets/projects/foodnation.jpg";
import CELLAR from "../../assets/projects/cellar.jpg";

const ProjectCards = () => {
  return (
    <div className="cards" id="projects">
      <h1 className="font-details-b pt-4 pb-4">PROJECTS</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <ProjectCardItem
              src={NAVIHEALTH}
              text="NaviHealth is an iOS based mobile application that helps you track and meet your fitness goals on the go!"
              label="NAVIHEALTH"
              url="https://github.com/ehlee9317/NaviHealth"
              title="NAVIHEALTH"
            />
            <ProjectCardItem
              src={CELLAR}
              text="An e-commerce web application, where you can shop various types of wine products!"
              label="CELLAR"
              url="https://github.com/ehlee9317/TheCellar"
              title="THE CELLAR"
            />
            <ProjectCardItem
              src={FOODNATION}
              text="A one stop mobile application, where you can search for different food recipes!"
              label="FOODNATION"
              url="https://github.com/ehlee9317/Food-Nation"
              title="FOOD NATION"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
