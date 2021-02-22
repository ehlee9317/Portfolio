import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button"

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 20.6em;
//   top: -10%
  display: flex;
//   width: 100%;
  justify-content: center;
  .turn {
    cursor: pointer;
   //  transform: rotate(90deg);
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div className="turn">
        <Button variant="outlined">View my work</Button>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
