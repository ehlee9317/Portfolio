import React from "react";
import "./App.css";

//component
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel"
import TitleMessage from "./components/titleMessage"
import About from "./pages/about/about"
import Skills from "./pages/skills/skills"
import Contact from "./pages/contact/contact"


const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
