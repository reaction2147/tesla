import React from "react";
import hero from "../images/homepage.jpeg";

const Hero = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-head">
        <img className="center bg-img" src={hero} alt="" style={{position:"absolute", top: "-230px"}}/>
      </div>
    </div>
  );
};

export default Hero;
