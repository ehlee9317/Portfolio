import React from "react";
import "./App.css";

//component
import MyNavbar from "./components/myNavbar/myNavbar";
import MyHome from "./components/myHome/myHome";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import ProjectCards from "./pages/projectCards/projectCards";

//Effect
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import Reveal from "react-reveal/Reveal";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar />
      <MyHome />

      <div>
        <div>
          <Container>
            <Fade duration={1000}>
              <About />
            </Fade>
          </Container>
        </div>
      </div>

      <Container>
        <Slide bottom  duration={1000}>
          <hr />
          <ProjectCards />
        </Slide>
      </Container>

      <Container>
        <Slide bottom duration={900}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container>
        <Reveal duration={1000}>
          <hr />
          <Contact />
        </Reveal>
      </Container>
    </div>
  );
};

export default App;
