import React from "react";
import hero from "../images/homepage.jpeg";
import "../styles/helpers.css"

const Hero = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-head">
        <img className="center" src={hero} alt="" style={{position:"absolute", top: "-250px"}}/>
      </div>
    </div>
  );
};

export default Hero;
