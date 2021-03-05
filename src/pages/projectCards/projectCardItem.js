import React from "react";

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
