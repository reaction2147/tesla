import React from "react";
import "../styles/helpers.css";
import Logo from "../images/Tesla.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Link to="/"><img alt="" src={Logo} style={{width:"6.25rem", height:"1rem"}}/></Link>
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
        <p className="navbar-item is-size-6 has-text-black"><strong><Link to="/ModelS">Model S</Link></strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong><Link to="/ModelX">Model X</Link></strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong><Link to="/Model3">Model 3</Link></strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong><Link to="/Roadster">Roadster</Link></strong></p>
        <p className="navbar-item is-size-6 has-text-black"><strong><Link to="/ModelS">Energy</Link></strong></p>
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
