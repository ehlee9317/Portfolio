import React from "react";
import "./App.css";

//component
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel"

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      My Portfolio
    </div>
  );
};

export default App;
