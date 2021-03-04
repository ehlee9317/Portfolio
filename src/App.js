import React from "react";
import "./App.css";

//component
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel";
import TitleMessage from "./components/titleMessage";
import Projects from "./components/projects/projects.js";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import ProjectCards from "./pages/projectCards/projectCards"

//Effect
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container>
              <Fade duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <Container>
        <hr />
        <ProjectCards />
      </Container>

      {/* <Container>
        <hr />
        <Projects />
      </Container> */}

      <Container>
        <Slide bottom duration={1000}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container>
        <Fade duration={1000}>
          <hr />
          <Contact />
        </Fade>
      </Container>
    </div>
  );
};

export default App;
