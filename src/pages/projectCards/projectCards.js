import React from "react";
import ProjectCardItem from "./projectCardItem";
import "./projectCards.css";
import NAVIHEALTH from "../../assets/projects/navihealth.jpg";
import FOODNATION from "../../assets/projects/foodnation.jpg";
import CELLAR from "../../assets/projects/cellar.jpg";
import COVIDTRACKER from "../../assets/projects/covidTracker.jpg";

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
              url="https://www.youtube.com/watch?v=iLza3nLg9Wc"
              title="NAVIHEALTH"
              github="https://github.com/FSA-CS-Taurus/NaviHealth"
            />
            <ProjectCardItem
              src={CELLAR}
              text="An e-commerce web application, where you can shop various types of wine products!"
              label="CELLAR"
              url="https://thecellar.herokuapp.com/"
              title="THE CELLAR"
              github="https://github.com/Team-Kappa/TheCellar"
            />
            <ProjectCardItem
              src={COVIDTRACKER}
              text="A COVID-19 dashboard with a map and a line graph to track daily and total cases, recovery and deaths."
              label="TRACKER"
              url="https://covid-19-tracker-d217b.web.app/"
              title="COVID-19 TRACKER"
              github="https://github.com/ehlee9317/covid19Tracker"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
