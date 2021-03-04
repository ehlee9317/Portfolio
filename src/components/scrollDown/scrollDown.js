import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkDown } from "react-icons/gr";

import "./scrollDown.css";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 20.6em;
  display: flex;
  justify-content: center;
  .turn {
    cursor: pointer;
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div className="turn">
        <Button variant="outline-info" href="#about" className="button">
          <span>View My Work</span>
        </Button>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;