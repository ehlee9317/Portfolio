import React from "react";
import slide2 from "../../assets/slide2.jpg";
import ScrollDown from "../scrollDown/scrollDown"
import "./myHome.css";

const MyHome = () => {
  return (
    <div id="home">
        <div>
          <img className="d-block w-100 custom-img" src={slide2} alt="background" />
        </div>
      <ScrollDown />
    </div>
  );
};

export default MyHome;
