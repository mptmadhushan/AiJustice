import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1 className="large-text">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p  style={{ textTransform: 'capitalize' }} className="small-text">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  style={{ textTransform: 'capitalize' }}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Build a graph and predict the decision
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
