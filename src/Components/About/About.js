import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about center">
      <br></br>
      <h3 style={{ color: "white" }}>Our Work!</h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col s4 offset-s6" style={{ color: "white" }}>
          Hello there!
        </div>
      </div>
      <div className="container">
        <img
          classname="materialboxed"
          id="aboutPic"
          src="https://i.imgur.com/1z4oEA6.jpg"
        />
        <img
          classname="materialboxed"
          src="https://i.imgur.com/f3osdc6.jpg"
          id="aboutPic"
        />
        <img
          classname="materialboxed"
          src="https://i.imgur.com/1l9Ks9g.jpg"
          id="aboutPic"
        />
      </div>
    </div>
  );
};
export default About;
