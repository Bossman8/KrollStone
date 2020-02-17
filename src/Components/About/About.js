import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <br></br>
      <h3 className="center" style={{ color: "white" }}>
        Our Work!
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container" id="pics">
        <img
          class="materialboxed"
          id="aboutPic"
          src="https://i.imgur.com/1z4oEA6.jpg"
        ></img>
        <img
          class="materialboxed"
          id="aboutPic"
          src="https://i.imgur.com/f3osdc6.jpg"
        ></img>
        <img
          class="materialboxed"
          id="aboutPic"
          src="https://i.imgur.com/1l9Ks9g.jpg"
        ></img>
      </div>
    </div>
  );
};
export default About;
