import React from "react";
import Button from "react-bootstrap/Button";

// ICONS
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { BiChevronsUp } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="pt-3 text-center font-details pb-3">CONTACT</h1>

        <form class="w-50 container">
          <div class="pt-3 pb-4 text-center">
            <text>Have a question or want to work together?</text>
          </div>
          <div class="pb-1">
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>

          <div class="pb-1">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div class="text-right pt-1">
            <button type="button" class="btn btn-outline-dark">
              Submit
            </button>
            {/* <Button>SUBMIT</Button> */}
          </div>
        </form>
        <div className="text-center pt-5">
          <Button href="home" class="btn btn-secondary">
            <BiChevronsUp size={32} />
          </Button>
        </div>

        <div className="text-center pt-5 pb-5">
          <FaLinkedinIn size={32} />
          <FaInstagram size={33} />
          <FaGithub size={32} />
          <FaMediumM size={30} />
        </div>
        <div class="text-center">
          <text>EUN HYUK LEE ©2021</text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
