import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import profilePic from "../../assets/profilePic.jpg";
import { BiDevices } from "react-icons/bi";
import { BiLayer } from "react-icons/bi";
import { BiBulb } from "react-icons/bi";
import { BiSitemap } from "react-icons/bi";
import { BiRocket } from "react-icons/bi";

import "./about.css";

const About = () => {
  return (
    <div className="cards" id="about">
      <div className="about">
        <h1 className="text-center font-details pt-4 pb-3">ABOUT</h1>
        <Container className="pt-4">
          <Row className="pt-3 pb-5 text-center">
            <Col xs={12} md={3} className="p-1">
              <BiLayer
                color={"#00000"}
                size="80px"
                height="90px"
                width="90px"
              />
              <br />
              <strong className="iconTraits">STRUCTURED</strong>
              <br />
              <div className="icon-info">
                Well-structured and effective code
              </div>
            </Col>
            <Col xs={12} md={3} className="p-1">
              <BiDevices
                color={"#00000"}
                size="80px"
                height="90px"
                width="90px"
              />
              <br />
              <strong className="iconTraits">RESPONSIVE</strong>
              <br />
              <div className="icon-info">Works on any device</div>
            </Col>
            <Col xs={12} md={3} className="p-1">
              <BiBulb color={"#00000"} size="80px" height="90px" width="90px" />
              <br />
              <strong className="iconTraits">INTUITIVE</strong>
              <br />
              <div className="icon-info">Easy to use and intuitive UI/UX</div>
            </Col>
            <Col xs={12} md={3} className="p-1">
              <BiRocket
                color={"#00000"}
                size="80px"
                height="90px"
                width="90px"
              />
              <br />
              <strong className="iconTraits">DYNAMIC</strong>
              <br />
              <div className="icon-info">
                Dynamic websites that come to life
              </div>
            </Col>
          </Row>
          <Row className="pt-3 pb-5 align-item-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="pictureContainer justify-content-center">
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
                  Hi! I'm&nbsp;<strong>Eun Hyuk Lee</strong>
                </div>

                <div className="pb-2">
                  I am a full stack developer, UI & UX designer, food explorer,
                  and coffee addict.
                </div>

                <div className="pb-2">
                  Prior to starting my journey to become a software developer, I
                  was a sales operations data analyst at a tech company, where I
                  was responsible for data analysis reports on various product
                  categories. When I realized that my work has been stagnant, I
                  wanted to expand my career to get more technical. I started to
                  look into programming to enhance my data analysis skills, and
                  that was when I realized my passion for programming. I love
                  the excitement, collaboration, creativity, and flexibility that
                  goes into each project, which triggered me to pursue a new
                  career as a software developer.
                </div>
                <div>
                  I have a serious passion for UI and UX designs, and creating
                  intuitive and dynamic user experiences. I am looking forward
                  to working with you and make something special!
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
