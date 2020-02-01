import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="container "
        style={{
          backgroundImage: 'url("https://i.imgur.com/7eqdV3a.png")',
          padding: "30px"
        }}
      >
        <h3 className="center">Contact Us!</h3>
        <br></br>
        <h5 className="center">Get a free estimate</h5>
        <div className="row">
          <form
            className="col s8 offset-s2"
            action="https://formspree.io/xbjorgwv"
            method="POST"
          >
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" className="validate" name="Name" />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="number"
                  type="text"
                  className="validate"
                  name="Phone Number"
                />
                <label htmlFor="name">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="_replyto"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="details"
                  type="text"
                  className="validate"
                  name="Job Details"
                />
                <label htmlFor="details">Tell us about your tile project</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              value="submit"
              name="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container col s6 offset-s3">
        <div className="elfsight-app-cfd42992-4f7b-4b01-9350-0bfa1c3efa87" />
      </div>
    </div>
  );
};
export default Contact;
