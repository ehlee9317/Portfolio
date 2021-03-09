import React from "react";
import TitleMessage from "../titleMessage/titleMessage";
import homeBanner3 from "../../assets/homebanner3.jpg";
import "./myHome.css";

const MyHome = () => {
  return (
    <div id="home">
      <div>
        <img
          className="d-block w-100 custom-img"
          src={homeBanner3}
          alt="background"
        />
      </div>
      <TitleMessage />
    </div>
  );
};

export default MyHome;
