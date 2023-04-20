import React from "react";
import image from '../images/image.png'
import { Link } from "react-router-dom";

export const About = (props) => {
  return (
    <div id="about">
      <div className="">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            {" "}
            <img src={image} style={{ width: '100vw', objectFit: 'contain' }} alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-7" style={{ paddingInline: '5vw' }}>
            <div>
              <h2>Intelligent Support Services</h2>
              <p style={{color:'#BBBBBB'}}>In Which Intelligent Support Services Are We provide?</p>
              <p style={{fontWeight:'initial'}}>Bringing Al to the courtroom in order to make Sri Lanka a more just nation by increasing the availability
                of justice for the general public by allowing judges and lawyers to handle more cases with comparability
                reduced effort and time</p>
            </div>
          </div>
          
          <div className="col-xs-12 col-md-5">
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/support" className="page-scroll">
            
              <div style={{ marginTop: '10px', width: '180px', textAlign: 'center' }} className="col-xs-3 col-md-4">
                <p style={{ textAlign: 'center' }}>Q and A <br />Support</p>
                <i style={{ textAlign: 'center' }} className="fa fa-group"></i>

              </div> 
              </Link>
          <Link to="/Summarizing" className="page-scroll">

              <div style={{ marginTop: '10px', width: '180px', textAlign: 'center' }} className="col-xs-3 col-md-4">
                <p style={{ textAlign: 'center' }}>Content Summarizing Support</p>
                <i className="fa fa-book"></i>

              </div>
</Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
