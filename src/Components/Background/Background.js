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
              <img src="https://www.thespruce.com/thmb/vunnJZOdh2oYea0c0aS9so1gjuw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tile-install-GettyImages-183066355-588a1cb15f9b5874eed0a1ba.jpg" />{" "}
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
