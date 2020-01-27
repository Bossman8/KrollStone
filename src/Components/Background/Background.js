import React from "react";
import "./Background.css";

const Background = props => {
  return (
    <div className="background center">
      <br></br>
      <h3>{props.title}</h3>
      <br></br>
      <br></br>
      <div className="row">
        <h4 className="col s4">SandMan</h4>
        <h4 className="col s4">Potter</h4>
        <h4 className="col s4">Tileguy</h4>
      </div>
      <div className="row">
        <p className="col s4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum
          aliquet est ac cursus. Sed vulputate arcu in massa faucibus venenatis.
          Cras varius neque quis efficitur rhoncus. Pellentesque a nulla at ante
          pellentesque consectetur. Praesent vitae nisl vitae tortor fermentum
          dictum sit amet at ante.
        </p>
        <p className="col s4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum
          aliquet est ac cursus. Sed vulputate arcu in massa faucibus venenatis.
          Cras varius neque quis efficitur rhoncus. Pellentesque a nulla at ante
          pellentesque consectetur. Praesent vitae nisl vitae tortor fermentum
          dictum sit amet at ante.
        </p>
        <p className="col s4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum
          aliquet est ac cursus. Sed vulputate arcu in massa faucibus venenatis.
          Cras varius neque quis efficitur rhoncus. Pellentesque a nulla at ante
          pellentesque consectetur. Praesent vitae nisl vitae tortor fermentum
          dictum sit amet at ante.
        </p>
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
              <img src="https://image.shutterstock.com/image-photo/hands-tiler-laying-ceramic-tile-260nw-710379154.jpg" />{" "}
              {/* random image */}
              <div className="caption center-align">
                <h3>Flooring</h3>
                <h5 className="light grey-text text-lighten-3"></h5>
              </div>
            </li>
            <li>
              <img src="https://image.shutterstock.com/image-photo/modern-clean-interior-kitchen-cooking-260nw-1160689231.jpg" />{" "}
              {/* random image */}
              <div className="caption left-align">
                <h3>Backsplash</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://image.shutterstock.com/image-photo/warm-clean-bathroom-boasts-grey-260nw-790343287.jpg" />{" "}
              {/* random image */}
              <div className="caption right-align">
                <h3>Showers</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://media-public.canva.com/MADauGtQ29E/1/thumbnail_large-1.jpg" />{" "}
              {/* random image */}
              <div className="caption center-align">
                <h3>Tile Removal</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <h3>Our Work</h3>
    </div>
  );
};
export default Background;
