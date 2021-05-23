import React, {useState} from "react";
import hero from "../images/homepage.jpeg";
import mobile from "../images/mobile.jpeg"
import "../styles/helpers.css"



const Hero = () => {
  const [width] = useState(window.innerWidth)
  
  return (
    <div className="container is-fullhd">
      {width >= 768 ? <img className="center" src={hero} alt="" style={{position:"absolute", top: "-300px"}}/> :
      <img className="center" src={mobile} alt="" style={{position:"absolute", top:"-400px"}} />}
        </div>
  );
};

export default Hero;
