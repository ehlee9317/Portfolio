import React from "react";
import Button from "react-bootstrap/Button";

const ProjectCardItem = (props) => {
  return (
    <>
      <li className="cards_item">

        <div className="cards_item_link">
          <div
            className="cards_item_pic-wrap"
            data-category={props.label}
            onClick={(e) => {
               e.preventDefault();
               window.location.href = `${props.url}`
             }}
          >
            <img
              src={props.src}
              alt="projects"
              className="cards_item_img"
            ></img>
            <div className="img_description">
              {props.title}
              {/* <Button

              onClick="location.href ='google.com';"
              >{props.button1}</Button> */}
              {/* <a
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "www.linkedin.com";
                }}
                class="btn btn-info"
                role="button"
              >
                Button
              </a> */}
              {/* <button
            className="btn bg-transparent"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/eunhyuklee/"
            }}
          >
            butttoonn
          </button> */}
            </div>
          </div>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectCardItem;
