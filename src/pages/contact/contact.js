import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Box from "@material-ui/core/Box";

// ICONS
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BiChevronsUp } from "react-icons/bi";

const boxStyle = {
  //   bgColor: "background.paper",
  m: 1,
  style: { width: "2rem", height: "2rem" },
};

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="pt-3 text-center font-details pb-3">CONTACT</h1>
        <h4 className="pt-3 text-center pb-3">
          Have a question or want to work together?
        </h4>
        <Box display="flex">
          <Box border={1} {...boxStyle}>
            <BiChevronsUp height="100px"/>
          </Box>
        </Box>
        <Container>
          <Row>
            <Col xs={12} md={4} className="align-item-center">
              <SiLinkedin height="100px" width="100px" />
              LinkedIn
            </Col>
            <Col xs={12} md={4} className="align-item-center">
              <SiGmail height="100px" width="100px" />
              Email
            </Col>
            <Col xs={12} md={4} className="align-item-center">
              <SiGithub height="100px" width="100px" />
              GitHub
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
