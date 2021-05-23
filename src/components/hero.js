import React from "react";
import hero from "../images/homepage.jpeg";
import "../styles/helpers.css"

const Hero = () => {
  return (
    <div className="container is-fullhd">
        <img className="center" src={hero} alt="" style={{position:"absolute", top: "-300px"}}/>
      </div>
  );
};

export default Hero;
