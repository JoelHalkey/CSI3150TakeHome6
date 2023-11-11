import React from "react";
import "./travelblog.css";

// Using props to be able to input data and pictures into 
// card/travelblog div
const TravelBlog = (props) => {
  return (
    <div className="travelblog-wrapper">
      <h3 className="top-row">{props.placeHeading}</h3>
      <div className="middle-row">
        <div className="place-image-container">
          <img
            className="place-image"
            src={props.placeImg1}
            alt="Place 1"
          />
        </div>
        <div className="place-image-container">
          <img
            className="place-image"
            src={props.placeImg2}
            alt="Place 2"
          />
        </div>
        <div className="place-image-container">
          <img
            className="place-image"
            src={props.placeImg3}
            alt="Place 3"
          />
        </div>
      </div>
      <div className="bottom-row">{props.placeDescription}</div>
    </div>
  );
};

export default TravelBlog;
