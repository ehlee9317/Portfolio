import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
        <Button variant="dark" href="#about">
          View My Work
        </Button>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
