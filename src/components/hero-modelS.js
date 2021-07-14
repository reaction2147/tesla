import React, {useState} from "react";
import hero from "../images/model3-desktop.jpeg";
import mobile from "../images/mobile.jpeg"
import "../styles/helpers.css"




const Hero2 = () => {
  const [width] = useState(window.innerWidth)
  
  return (
    <div className="container is-fullhd">
      {width >= 768 ? <img className="center" src={hero} alt="" style={{position:"absolute", top: "-90px"}}/> :
      <img className="center" src={mobile} alt="" style={{position:"absolute", top:"-400px"}} />}
        </div>
  );
};

export default Hero2;