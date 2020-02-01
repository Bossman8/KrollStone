import React from "react";
import Parallax from "./Components/Parallax/Parallax";
import Background from "./Components/Background/Background";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
class App extends React.Component {
  render() {
    return (
      <div>
        <Parallax image="https://cdn.pixabay.com/photo/2014/07/10/17/18/shower-389273_1280.jpg" />
        <h1
          className="center"
          style={{ top: "-300px", position: "relative", color: "white" }}
        >
          Kroll Stone LLC
        </h1>
        <Background title="Why Choose Us?" />
        <Parallax
          image="https://cdn.pixabay.com/photo/2017/06/13/13/51/marble-2398946__480.jpg"
          height="200px"
        />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
