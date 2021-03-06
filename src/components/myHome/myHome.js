import React from "react";
import homeBanner3 from "../../assets/homebanner3.jpg";
import ScrollDown from "../scrollDown/scrollDown"
import "./myHome.css";

const MyHome = () => {
  return (
    <div id="home">
        <div>
          <img className="d-block w-100 custom-img" src={homeBanner3} alt="background" />
        </div>
      <ScrollDown />
    </div>
  );
};

export default MyHome;
