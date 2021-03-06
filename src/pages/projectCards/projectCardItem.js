import React from "react";

const ProjectCardItem = (props) => {
  return (
    <>
      <li className="cards_item">
        <div className="cards_item_link">
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="cards_item_pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="projects"
              className="cards_item_img"
            ></img>
            <div className="img_description">{props.title}</div>
          </a>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectCardItem;
