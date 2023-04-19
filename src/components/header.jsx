import React from "react";
import axios from 'axios';
const options = ["facts of the case", "judicial reasoning"];

export const Header = (props) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selected, setSelected] = React.useState(options[0]);
  const [response, setResponse] = React.useState({
    "violationData": {
        "Court": "the Supreme Court",
        "DocumentShouldBring": "medical evidence Documents",
        "Lawyers": "Shantha Jayawardena with Niranjan Arulpragasam , Upul Kumarapperuma , Ms. Nayomi Wickramasekera",
        "Suggetion": "Considering all these things, we hold that the Petitioners have not presented their  case to the satisfaction of this Court. We therefore can’t rely on the complaint of both  Petitioners. For the above reasons, we dismiss the Petition of the Petitioner."
    },
    "violationType": "article 11. of the constitution"
});
  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const resp = await axios({
        method: "post",
        url: "http://ec2-13-229-183-94.ap-southeast-1.compute.amazonaws.com:5006/summary",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("🚀 ~ file: header.jsx:16 ~ handleSubmit ~ response:", resp)
      setResponse(resp)
    } catch(error) {
      console.log(error)
    }
  }
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
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
              <div className="col-md-2">
                
                <input type="file" onChange={handleFileSelect}/>
                </div><div className="col-md-2">
                
                <select  value={selected} 
       onChange={e => setSelected(e.target.value)}>
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      
                </div>
             
                <div className="col-md-12">
      <button
              type="submit"
              form="myForm"
              className="btn btn-custom btn-lg page-scroll"
              alt="submit Checkout"
              style={{marginBlock:'20px'}}
              onClick={handleSubmit}
            >
              submit
            </button></div>
                {/* <a
                  href="#features"
                  style={{ textTransform: 'capitalize' }}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Build a graph and predict the decision
                </a>{" "} */}
              </div>
            </div>
            {response&&<div style={{ backgroundColor: "#F6ECE8" }}>
              <div className="testimonial">
                <div className="testimonial-content">
                  <div>
                <div className="col-md-3">
      <button
              type="submit"
              form="myForm"
              className="btn btn-custom btn-lg page-scroll"
              alt="submit Checkout"
              onClick={handleSubmit}
            >
              save
            </button></div> <div className="col-md-3">
      <button
              type="submit"
              form="myForm"
              className="btn btn-custom btn-lg page-scroll"
              alt="submit Checkout"
              onClick={handleSubmit}
            >
              print
            </button></div> <div className="col-md-6">
      <button
              type="submit"
              form="myForm"
              className="btn btn-custom btn-lg page-scroll"
              alt="submit Checkout"
              onClick={handleSubmit}
            >
              share
            </button></div></div>
                  <div className="testimonial-meta" style={{marginTop:'20px',color:'black'}}>Court: {response?.violationData.Court}</div>
                  <p style={{marginTop:'10px',color:'black'}}> DocumentShouldBring: {response?.violationData.DocumentShouldBring}</p>
                  <p style={{marginTop:'10px',color:'black'}}> Lawyers: {response?.violationData.Lawyers}</p>
                  <p style={{marginTop:'10px',color:'black'}}> Suggetion: {response?.violationData.Suggetion}</p>
                  <p style={{marginTop:'10px',color:'black'}}> violationType: {response?.violationType}</p>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </header>
  );
};
