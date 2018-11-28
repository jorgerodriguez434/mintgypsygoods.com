import React from "react";
import { Redirect } from "react-router-dom";

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  goBack = () => {
 
    this.setState({
      display: "home"
    });
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
        <div className="align-content">
        <section className="content margin-top">
         <img src="https://envisionitagency.com/uploads/2016/06/blog-header-copy-writing-evolution-750x350.jpg" alt="banner"></img>
          <h2> Blog Page</h2>
          <div className="lorem-content">
          <hr/>
            <p>
              {" "}
             My name is Aubrey and this is my blog!
            </p>
          </div>
          <button onClick={this.goBack}> HOME </button>
        </section>
        </div>
      );
    }
    if (this.state.display === "home") {
      return <Redirect to="/" />;
    }
  }; //render
}
