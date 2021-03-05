import React from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import "./contact.css";

// ICONS
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { BiChevronsUp } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        e.target,
        "user_GQdPlz2xFeMYCHwqLQcob"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="cards" id="contact">
      <div className="contact">
        <h1 className="pt-4 text-center font-details pb-4">CONTACT</h1>

        <form class="w-50 container" onSubmit={sendEmail}>
          <div class="pt-3 pb-4 text-center">
            <text>Have a question or want to work together?</text>
          </div>
          <div class="pb-1">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              name="name"
            />
          </div>

          <div class="pb-1">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email Address"
              name="email"
            />
          </div>

          <div class="pb-1">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Subject"
              name="subject"
            />
          </div>

          <div>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div class="text-right pt-1">
            <input
              type="submit"
              class="btn btn-outline-dark"
              value="Submit"
            ></input>
          </div>
        </form>

        <div className="text-center pt-5">
          <Button href="home" type="button" class="btn btn-secondary">
            <BiChevronsUp size={32} />
          </Button>
        </div>

        <div className="text-center pt-5 pb-5">
          <button
            className="icon btn bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/eunhyuklee/";
            }}
          >
            <FaLinkedinIn size={36} />
          </button>

          <button
            className="icon btn bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/ehlee9317";
            }}
          >
            <FaGithub size={36} />
          </button>
          <button
            className="icon btn bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://ehlee9317.medium.com/";
            }}
          >
            <FaMediumM size={36} />
          </button>
          <button
            className="btn bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/file/d/1ac1kmvGuNOfW7c2rgZN_WfkYOLrlV6M-/view?usp=sharing";
            }}
          >
            <FiFileText size={36} />
          </button>
        </div>
        <div class="text-center pb-4">
          <text>EUN HYUK LEE ©2021</text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
