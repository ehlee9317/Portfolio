import React from 'react'
// import { Link } from 'react-router-dom'

const ProjectCardItem = (props) => {
   return (
      <>
         <li className="cards_item">
            <div className="cards_item_link"> {/* container */}
               <div className="cards_item_pic-wrap" data-category={props.label}>
                  <img src={props.src} alt="projects" className="cards_item_img">
                  </img>
                  <div className="img_description">
                     Open GitHub
                  </div>
               </div>
               <div className="cards_item_info">
                  <h5 className="cards_item_text">
                     {props.text}
                  </h5>
               </div>
            </div>
         </li>

      </>
   )
}

export default ProjectCardItem

