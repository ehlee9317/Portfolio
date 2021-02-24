import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

// ICONS
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiChevronsUp } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="pt-3 text-center font-details pb-3">CONTACT</h1>
        <h4 className="pt-3 text-center pb-3">
          Have a question or want to work together?
        </h4>

        <form class="w-50 ">
          <div class="form-group">
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Email"
            />
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
        </form>
        <div className="text-right">
          <Button class="btn btn-outline-dark">SUBMIT</Button>
        </div>
        <div className="text-center pt-5">
          <Button href="home">
            <BiChevronsUp size={32} />
          </Button>
        </div>

        <div className="text-center pt-5 pb-5">
          <FaLinkedinIn size={32} />
          <FaFacebookF size={30} />
          <FaInstagram size={33} />
          <FaGithub size={32} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
