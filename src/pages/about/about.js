import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profilePic from "../../assets/profilePic.jpg";

import "./about.css"

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT</h1>
        <div className="horizontal">
          <hr />
        </div>
        <Container>
          <Row className="pt-3 pb-5 align-item-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={profilePic}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
