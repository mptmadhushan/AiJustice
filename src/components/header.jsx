import React ,{CSSProperties}from "react";
import axios from 'axios';
import BarLoader from "react-spinners/ClipLoader";
import { Navigation } from "../components/navigation";

import image from '../images/image.png'

const options = ["facts of the case", "judicial reasoning"];
const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Header = (props) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
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
    setIsLoading(false)
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
      setIsLoading(true)
    } catch(error) {
      console.log(error)
    }
  }
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  return (
    <div><Navigation />
    <header id="header" style={{marginTop:'20vh'}}>
         <img src={image} style={{ width: '100vw', objectFit: 'contain',height:'30vh' }} alt="" />{" "}
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <h1 className="large-text">
                Case Summarizing Support For A Better Decision To Get Started, Upload The Case File
                  <span></span>
                </h1>

                <p  style={{ textTransform: 'capitalize' }} className="small-text">To Get Started, Upload A Case File</p>
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
            </button>
      <BarLoader loading={!isLoading} height={1} width={1} color="#36d7b7" />

            </div>
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
                  <div className="testimonial-meta" style={{marginTop:'20px',color:'black'}}>Court: {response?.violationData?.Court}</div>
                  <p style={{marginTop:'10px',color:'black'}}> DocumentShouldBring: {response?.violationData?.DocumentShouldBring}</p>
                  <p style={{marginTop:'10px',color:'black'}}> Lawyers: {response?.violationData?.Lawyers}</p>
                  <p style={{marginTop:'10px',color:'black'}}> Suggetion: {response?.violationData?.Suggetion}</p>
                  <p style={{marginTop:'10px',color:'black'}}> violationType: {response?.violationType}</p>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};
