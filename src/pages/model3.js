import React from "react";
import "../styles/helpers.css";

const Model3 = () => {
  return (
    <>
      <div className="container" style={{marginTop: "25px"}}>
        <div
          className="is-overlay has-text-centered is-single-spaced"
        
        >
          <h1 className="title is-size-2">Model 3</h1>
          <h2 className="subtitle is-light is-size-6">
            1% Company Car Tax. <u>Learn More</u>
          </h2>
        </div>
      </div>

      <div className="container style-desktop style-mobile">
        <div className="columns is-centered">
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
        <div className="columns is-multiline">
          <div className="column is-three-fifths is-offset-one-fifth">
            <p className="center has-text-black is-size-6">
              The quickest car in the world, with record setting
              <br /> accerlation , range and performance.
            </p>
          </div>
        </div>
        <div className="columns is-multiline ">
          <div className="column is-one-fifth is-offset-one-sixth"></div>
          <div className="column">
            <p className="title center is-size-1">
              <i className="fas fa-tachometer-alt is-size-1"></i> 1.9
              <span className="is-size-5">s</span>
            </p>
            <p className="center subtitle has-text-weight-bold">0-60 mph</p>
          </div>
          <div className="column">
            <p className="title center is-size-1">360<span className="is-size-5">mi</span></p>
            <p className="center subtitle has-text-weight-bold">Range(WPLT)</p>
          </div>
          <div className="column">
            <p className="title center is-size-1">AWD</p>

            <p className="center subtitle has-text-weight-bold">Dual Motor</p>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};

export default Model3;
