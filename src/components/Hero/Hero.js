import React from "react";
import HeroSectionBGImage from "./HeroSection-bg-image.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <h1 className="hero-header">Joel's Blog</h1>
      <h2 className="hero-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h2>
    </div>
  );
};

export default Hero;
