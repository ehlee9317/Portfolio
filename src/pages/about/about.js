import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import profilePic from "../../assets/profilePic.jpg";
import { SpeedometerOutline } from "react-ionicons";
import { DesktopOutline } from "react-ionicons";
import { BulbOutline } from "react-ionicons";
import { RocketOutline } from "react-ionicons";

import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT</h1>
        <Container>
          <Row className="pt-3 pb-5 text-center">
            <Col xs={12} md={3} className="p-1">
              <SpeedometerOutline
                color={"#00000"}
                height="90px"
                width="90px"
              />
              <br />
              <strong>FAST</strong>
              <br />
              Fast load time and lag free interactions
            </Col>
            <Col xs={12} md={3} className="p-1">
              <DesktopOutline color={"#00000"} height="90px" width="90px" />
              <br />
              <strong>RESPONSIVE</strong>
              <br />
              Works on any device
            </Col>
            <Col xs={12} md={3} className="p-1">
              <BulbOutline color={"#00000"} height="90px" width="90px" />
              <br />
              <strong>INTUITIVE</strong>
              <br />
              Easy to use and intuitive UI/UX
            </Col>
            <Col xs={12} md={3} className="p-1">
              <RocketOutline color={"#00000"} height="90px" width="90px" />
              <br />
              <strong>DYNAMIC</strong>
              <br />
              Dyanmic websites that come to life
            </Col>
          </Row>
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
            <Col xs={12} md={6}>
              <Row className="align-items-start p-2 my-details rounded">
                Hi there! My name is <strong>&nbsp;Eun Hyuk Lee</strong>
                <br />
                I am a Full Stack web developer with React.js, Redux,
                Express.js, Node and much more.
                <br />
                <br />I have a serious passion for UI and UX designs, and
                creating intuitive and dynamic user experiences. I am looking
                forward to working with you and make something special!
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
