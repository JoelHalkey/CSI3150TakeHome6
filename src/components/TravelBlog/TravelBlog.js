import React from "react";
import "./travelblog.css";

const TravelBlog = (props) => {
  return (
    <div className="travelblog-wrapper">
      <h3 className="top-row">{props.placeHeading}</h3>
      <div className="middle-row">
        <div className="place-image-container">
          <img
            className="place-image"
            src={props.placeImg1}
            alt="Place image 1"
          />
        </div>
        <div className="place-image-container">
          <img
            className="place-image"
            src={props.placeImg2}
            alt="Place image 2"
          />
        </div>
        <div className="place-image-container">
          <img
            className="place-image"
            src={props.placeImg3}
            alt="Place image 3"
          />
        </div>
      </div>
      <div className="bottom-row">{props.placeDescription}</div>
    </div>
  );
};

export default TravelBlog;
