import React, { useEffect, useState } from "react";
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
  const [contactFormWidth, setContactFormWidth] = useState("w-50");

  const reportWindowSize = () => {
    window.innerWidth <= 768
      ? setContactFormWidth("w-100")
      : setContactFormWidth("w-50");
  };

  window.addEventListener("resize", reportWindowSize);

  useEffect(() => {
    window.innerWidth <= 768
      ? setContactFormWidth("w-100")
      : setContactFormWidth("w-50");
    const contactSection = document.getElementById("contact");

    if (window.innerWidth < 768) {
      console.log("@@@@@ contactSection", contactSection);
      contactSection.style.padding = "1rem";
    }
  }, []);

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

        <form class={`${contactFormWidth} container`} onSubmit={sendEmail}>
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
          <Button href="#home" type="button" className="homeButton">
            <BiChevronsUp className="upArrowButton" size={32} />
          </Button>
        </div>

        <div className="text-center pt-5 pb-5">
          <a
            href="https://www.linkedin.com/in/eunhyuklee/"
            target="_blank"
            rel="noreferrer"
            className="icon btn bg-transparent"
          >
            <FaLinkedinIn size={36} />
          </a>

          <a
            href="https://github.com/ehlee9317"
            target="_blank"
            rel="noreferrer"
            className="icon btn bg-transparent"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://ehlee9317.medium.com/"
            target="_blank"
            rel="noreferrer"
            className="icon btn bg-transparent"
          >
            <FaMediumM size={36} />
          </a>
          <a
            href="https://drive.google.com/file/d/1cbWmYTfSRRsyBKzJYUh-QNC--gq8cac9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn bg-transparent"
          >
            <FiFileText size={36} />
          </a>
        </div>
        <div class="text-center pb-4">
          <text>EUN HYUK LEE ©2021</text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
