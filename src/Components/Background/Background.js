import React from "react";
import "./Background.css";

const Background = props => {
  return (
    <div className="background center">
      <br></br>
      <h3>{props.title}</h3>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <h5 className="col s4">Time Efficient</h5>
          <h5 className="col s4">Detail Oriented</h5>
          <h5 className="col s4">Customer Satisfaction</h5>
        </div>
        <div className="row">
          <p className="col s4">
            Shows up and finishes the job in a timely manner.
          </p>
          <p className="col s4">
            Attention to detail is key while working with tile and grouting
            materials. We take pride in the work that we do and always strive to
            put in the extra effort, even when it comes down to the small
            details.
          </p>
          <p className="col s4">
            Open communication with the customer to make sure they job is
            getting done how the customer wants.
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <h3>
        <strong>Our Skills</strong>
      </h3>
      <div className="container">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src="data:image/jpeg;base64,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" />{" "}
              {/* random image */}
              <div className="caption center-align">
                <h3>Flooring</h3>
                <h5 className="light grey-text text-lighten-3"></h5>
              </div>
            </li>
            <li>
              <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/5/14/0/IO_Lindye-Galloway_Newport-Beach-Eclectic_4.jpg.rend.hgtvcom.966.644.suffix/1526315043247.jpeg" />{" "}
              {/* random image */}
              <div className="caption center-align">
                <h3>Backsplash</h3>
                <h5 className="light grey-text text-lighten-3"></h5>
              </div>
            </li>
            <li>
              <img src="https://images.unsplash.com/photo-1576678433413-202829a1ab98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />{" "}
              {/* random image */}
              <div className="caption left-align">
                <h3>Showers</h3>
                <h5 className="light grey-text text-lighten-3"></h5>
              </div>
            </li>
            <li>
              <img src="https://media-public.canva.com/MADauGtQ29E/1/thumbnail_large-1.jpg" />{" "}
              {/* random image */}
              <div className="caption center-align">
                <h3>Tile Removal</h3>
                <h5 className="light grey-text text-lighten-3"></h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Background;
