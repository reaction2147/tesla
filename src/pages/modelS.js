import React from "react";
import "../styles/helpers.css";
import Hero2 from "../components/hero-modelS";


const ModelS = () => {
  return (
    <>
    <Hero2 />
      <div className="container">
        <div
          className="is-overlay has-text-centered is-single-spaced"
        
        >
          <h1 className="title is-size-2">Model S</h1>
          <h2 className="subtitle is-light is-size-6">
            1% Company Car Tax. <u>Learn More</u>
          </h2>
        </div>
      </div>

      <div className="container style-modelS style-mobile">
        <div className="columns is-mobile is-centered">
          <div className="column is-quater"></div>
          <div className="column ">
            <div className="button is-fullwidth is-dark is-rounded has-text-weight-bold">
              Custom Order
            </div>
          </div>
          

          <div className="column">
            <div className="button is-fullwidth is-light is-rounded has-text-weight-bold">
              Available Inventory
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>

      <div className="container style-desktop-modelS">
        <div className="columns is-multiline">
          <div className="column is-three-fifths is-offset-one-fifth">
            <p className="center has-text-black has-text-weight-bold is-size-6">
              The quickest car in the world, with record setting
              <br /> accerlation , range and performance.
            </p>
          </div>
        </div>
        <div className="columns is-multiline ">
          <div className="column is-one-fifth is-offset-one-sixth"></div>
          <div className="column">
            <p className="title center has-text-white is-size-1">
              <i className="fas fa-tachometer-alt is-size-1"></i> 1.9
              <span className="is-size-5">s</span>
            </p>
            <p className="center subtitle has-text-white has-text-weight-bold">0-60 mph</p>
          </div>
          <div className="column">
            <p className="title has-text-white center is-size-1">360<span className="is-size-5">mi</span></p>
            <p className="center has-text-white subtitle has-text-weight-bold">Range(WPLT)</p>
          </div>
          <div className="column">
            <p className="title has-text-white center is-size-1">AWD</p>

            <p className="center has-text-white subtitle has-text-weight-bold">Dual Motor</p>
          </div>
          <div className="column"></div>
        </div>
        <div className="container footer-desktop is-hidden-touch">
            <div className="has-text-centered">
            <h1  className="has-text-weight-bold has-text-white"><i class="fab fa-react"></i> Code by William Ford</h1>
            </div>
            
        </div>
        
      </div>
     
      
      
    </>
  );
};

export default ModelS;
