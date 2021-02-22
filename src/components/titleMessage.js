import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
//   z-index: 1;
  margin-top: -5%;
  text-align: center;

  strong {
     font-size: 70px;
  }

  div{
   //   color: ${(props) => props.theme.textColor}

   //   text-shadow: 0px, 2px, 5px, rgba(0, 0, 0, 0.4)
   //   font-weight: 100;
   //   letter-spacing: 7px

     .main{
        font-size: 40px
     }

     .sub{
        font-size: 30px;
        letter-spacing: 2px;
     }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-4">
          Hello, I am
          <br />
          <span>
            <strong>Eun Hyuk Lee</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Full-Stack Developer", "UI UX Designer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
