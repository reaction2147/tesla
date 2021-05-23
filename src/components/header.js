import React from "react";
import "../styles/helpers.css";
import Logo from "../images/Tesla.svg";

const Header = () => {
  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img alt="" src={Logo} style={{width:"6.25rem", height:"1rem"}}/>
        </a>
        <p
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </p>
      </div>
      <div className="navbar-menu center is-hidden-touch">
        <p className="navbar-item is-size-6 has-text-black"><strong>Model S</strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong>Model X</strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong>Model 3</strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong>Roadstar</strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong>Energy</strong></p>
      </div>
      <div class="navbar-end is-hidden-touch">
        <p class="navbar-item is-size-6 has-text-black">Shop</p>
        <div className="buttons">
        <p class="button is-light is-size-6 has-text-black">Sign In</p>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
