import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-12">
          <h2 className="small-text">By analysing:</h2>
        </div>
        <div className="row" style={{display:'flex',justifyContent:'center'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} style={{marginInline:'30px', marginTop:'10px'}} className="col-xs-3 col-md-1">
                  {" "}
                  <i className={d.icon}></i>
                  <p>{d.title}</p>
                  {/* <p>{d.text}</p> */}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
