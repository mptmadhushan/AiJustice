import React from "react";
import myGif from '../images/gif.gif';

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container-fluid">
        <div className="section-title text-center">
          {/* <h2>What our clients say</h2> */}
        </div>
        <div className="row">
          <div className="col-md-3" style={{ border: "solid #F6ECE8 1px", height: '80vh', marginLeft: '30px' }}>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} style={{ backgroundColor: `${d.img}` }}>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <div className="testimonial-meta">{d.name} </div>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
          <div className="col-md-4" style={{ border: "solid #F6ECE8 1px", height: '80vh', marginLeft: '30px' }}>
            <div className="testimonial-meta" style={{ paddingTop: '30px', }}>
              Title and / or reference number of the
              source.
            </div>
            <p>Author of the source</p>
            <p>Date</p>
            <p>Lorem losum dolor sit amet. consectetur adipiscina
              elt. Praesent ac risus nisi. Duis at blandit eros.
              Pellentesque pretium viverra libero, in commodo lec
              varius Id. Nulla dapibus risus massa, eget pellentesque
              erat laoreet oulvinar. Suspendisse varius, arcu id
              faucibus aravida, velit urna accumsan magna, nec
              malesuada diam neque sed du. Integer sed
              consectetur quam. Vivamus quis pharetra justo
              Quisque in posuere enim. eu iaculis nion. Aliquam
              vehicula elit ex. euismod fringilla nisi condimentun
              sed. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. In facilisis
              erat eu eleitend dianissim</p>
            <p>Lorem losum dolor sit amet. consectetur adipiscina
              elt. Praesent ac risus nisi. Duis at blandit eros.
              Pellentesque pretium viverra libero, in commodo lec
              varius Id. Nulla dapibus risus massa, </p>
          </div>
          <div className="col-md-4" style={{ border: "solid #F6ECE8 1px", height: '80vh', marginLeft: '30px' }}>
            <img src={myGif} alt="my-gif" style={{ height: '70%',width:'100%',objectFit:'cover'}} />
            <div >
              <div className="testimonial" style={{ border: "solid #F6ECE8 1px" }}>
                <div className="testimonial-content">
                  <div className="testimonial-meta">i- Prediction</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac risus nisi. Duis al
                    blandit eros. Pellentesque pretiumLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac risus nisi. Duis al
                    blandit eros. Pellentesque pretium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
