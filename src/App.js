import React from "react";
import "./App.css";

//component
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel"
import TitleMessage from "./components/titleMessage"
import About from "./pages/about/about"


const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <About />
    </div>
  );
};

export default App;
