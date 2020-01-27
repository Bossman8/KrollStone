import React from "react";
import "./Parallax.css";

const Parallax = props => {
  return (
    <div className="parallax-container" style={{ height: props.height }}>
      <div className="parallax" style={{ height: props.height }}>
        <img src={props.image}></img>
      </div>
    </div>
  );
};
export default Parallax;
