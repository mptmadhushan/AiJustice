import React, { useState } from "react";
import myGif from "../images/gif.gif";
import axios from "axios";
import BarLoader from "react-spinners/ClipLoader";
import { Navigation } from "../components/navigation";

export const Testimonials = (props) => {
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = React.useState(true);
 
  const [response, setResponse] = useState({
    "answer": "-",
    "reference": "-"
});

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsLoading(false)
    console.log(commentText);
    axios
      .post(
        "http://ec2-13-229-183-94.ap-southeast-1.compute.amazonaws.com:5006/qna",
        {
          question:
          commentText,
        }
      )
      .then((response) => {
        console.log(
          "🚀 ~ file: testimonials.jsx:15 ~ .then ~ response:",
          response
        );
        setIsLoading(true)
        setResponse(response.data);
      });
  };

  return (<div><Navigation />
    <div id="testimonials" style={{marginTop:'20vh'}}>
      <div className="container-fluid">
        <div className="section-title text-center">
          {/* <h2>What our clients say</h2> */}
        </div>
          
          <div
            className="col-md-12"
            style={{
              border: "solid #F6ECE8 1px",
              height: "80vh",
              marginLeft: "30px",
            }}
          >
            <textarea
              name="commentTextArea"
              type="text"
              style={{width:'90vw',height:'60%'}}
              id="CommentsOrAdditionalInformation"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              type="submit"
              form="myForm"
              className="btn btn-custom btn-lg page-scroll"
              alt="submit Checkout"
              style={{marginBlock:'20px'}}
              onClick={handleOnSubmit}
            >
              submit
            </button>
      <BarLoader loading={!isLoading} height={1} width={1} color="#36d7b7" />

            {response&&<div style={{ backgroundColor: "#F6ECE8" }}>
              <div className="testimonial">
                <div className="testimonial-content">
                  <div className="testimonial-meta">Answer: {response?.answer}</div>
                  <p style={{marginTop:'10px'}}> Reference: {response?.reference}</p>
                </div>
              </div>
            </div>}
          </div>
          {/* <div
            className="col-md-4"
            style={{
              border: "solid #F6ECE8 1px",
              height: "80vh",
              marginLeft: "30px",
            }}
          >
            <img
              src={myGif}
              alt="my-gif"
              style={{ height: "70%", width: "100%", objectFit: "cover" }}
            />
            <div>
              <div
                className="testimonial"
                style={{ border: "solid #F6ECE8 1px" }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-meta">i- Prediction</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ac risus nisi. Duis al blandit eros. Pellentesque
                    pretiumLorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent ac risus nisi. Duis al blandit eros.
                    Pellentesque pretium
                  </p>
                </div>
              </div> */}
            {/* </div> */}
          {/* </div> */}
      </div>
      </div>
    </div>
  );
};
