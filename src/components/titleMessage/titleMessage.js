import React from "react";
import Typewriter from "typewriter-effect";
import ScrollDown from "../scrollDown/scrollDown";
import "./titleMessage.css";

const TitleMessage = () => {
  return (
    <div className="title-message-section" style={{ textAlign: "center" }}>
      <p className="greeting">Hello, I am</p>
      <h1 className="name">Eun Hyuk Lee</h1>
      <div className="typewriter">
        <Typewriter
          options=
          {{
            strings: [
              "Full-Stack Developer",
              "UI UX Designer",
              "Learner",
              "Coffee Lover",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>
      <ScrollDown />
    </div>
  );
};

export default TitleMessage;
