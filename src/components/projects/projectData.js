import React from "react";

//Tech Icons
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

//Project Pictures
import FOODNATION from "../../assets/projects/foodnation.jpg";
import CELLAR from "../../assets/projects/cellar.jpg";
import NAVIHEALTH from "../../assets/projects/navihealth.jpg";

export const projectLists = [
  {
    title: "NAVIHEALTH",
    image: NAVIHEALTH,
    caption: "Mobile Application for Health",
    description:
      "NaviHealth is an iOS based mobile application designed to help you track and meet your fitness goals while on the go.",
    tech: [
      {
        link: "https://reactnative.dev/",
        imgAltText: "React Native",
        imgSrc: L_REACT_NATIVE,
        skillName: "React Native",
      },
      {
        link: "https://firebase.google.com/",
        imgAltText: "Firebase",
        imgSrc: L_FIREBASE,
        skillName: "Firebase",
      },
      {
        link: "https://formidable.com/open-source/victory/",
        imgAltText: "Victory",
        imgSrc: L_VICTORY,
        skillName: "Victory",
      },
      {
        link: "https://material-ui.com/",
        imgAltText: "Material-UI",
        imgSrc: L_MATERIALUI,
        skillName: "Material-UI",
      },
      {
        link: "https://docs.expo.io/",
        imgAltText: "Expo",
        imgSrc: L_EXPO,
        skillName: "Expo",
      },
    ],
  },
  {
    title: "THE CELLAR",
    image: CELLAR,
    caption: "E-Commerce App for Wines",
    description:
      "An e-commerce web application, where you can shop various types of wine products.",
    type: [
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      {
        link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
        imgAltText: "Sequelize",
        imgSrc: L_SEQUELIZE,
        skillName: "Sequelize",
      },
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link:
          "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS,
        skillName: "CSS3",
      },
    ],
  },
  {
    title: "FOOD NATION",
    image: FOODNATION,
    caption: "Food Recipe Platform",
    description:
      "A one stop mobile application, where you can search for different food recipes",
    type: [
      {
        link: "https://reactnative.dev/",
        imgAltText: "React Native",
        imgSrc: L_REACT_NATIVE,
        skillName: "React Native",
      },
      {
        link: "https://firebase.google.com/",
        imgAltText: "Firebase",
        imgSrc: L_FIREBASE,
        skillName: "Firebase",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      {
        link: "https://docs.expo.io/",
        imgAltText: "Expo",
        imgSrc: L_EXPO,
        skillName: "Expo",
      },
    ],
  },
];
