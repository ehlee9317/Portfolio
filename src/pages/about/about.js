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
    <div className="cards" id="about">
      <div className="about">
        <h1 className="text-center font-details pt-4 pb-3">ABOUT</h1>
        <Container className="pt-4">
          <Row className="pt-3 pb-5 text-center">
            <Col xs={12} md={3} className="p-1">
              <SpeedometerOutline color={"#00000"} height="90px" width="90px" />
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
              <Row className="justify-content-center pt-4 pb-4">
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
              <Row className="align-items-start my-details rounded">
                <div className="greetings pb-3">
                  Hi there! I'm<strong>&nbsp;Eun Hyuk Lee</strong>
                </div>

                <div className="pb-2">
                  I am a Full Stack web developer with React.js, Redux,
                  Express.js, Node and much more.
                </div>

                <div className="pb-2">
                  Prior to starting my journey to become a software developer, I was a sales operations data analyst at a tech company, where I was responsible for data analysis reports on various product categories such as TV, AV, Tablet, and more. When I realized I reached the ceiling in my current role, I wanted to expand my career to get more technical. I started to look into programming to expand my data analysis skills, and that was when I realized my passion for programming. I love the excitement, collaboration, creativity and flexibility that goes into each project, which triggered me to pursue a new career as a software developer.
                </div>
                <div>
                  I have a serious passion for UI and UX designs, and creating intuitive and dynamic user experiences. I am looking forward to working with you and make something special!
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
