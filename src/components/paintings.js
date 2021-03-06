import React from "react";
import { Redirect } from "react-router-dom";

export default class Paintings extends React.Component {
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
         {/* <img src="https://www.thoughtco.com/thmb/LDmMi_8kGdmh0gzEUDYnUL2pZJI=/3000x1957/filters:no_upscale():max_bytes(150000):strip_icc()/Fort-McHenry-colorlitho-3000-3x2-56a4891c3df78cf77282ddc1.jpg" alt="banner"></img> */}
         <div className="paintings-banner">

         </div>
          <h2> Paintings</h2>
          <div className="lorem-content">
          <hr/>
            <p>
              {" "}
              I love making art and I thank you very much for visiting my site. One million dollars for an earring, TWO MILLION for a pair.

            </p>

             <div className="flex-container"> 
              <img className="painting" src="https://i.ibb.co/q5NWhXV/IMG-1566-1.jpg" alt="starry-night"></img>
              <img className="painting" src="https://i.ibb.co/JBjpfcm/IMG-1571-1.jpg" alt="van gough"></img>
              <img className="painting" src="https://i.ibb.co/tm0gHcq/IMG-1573-1.jpg" alt="van gough"></img>
          </div>

            <div className="flex-container"> 
              <img className="painting" src="https://i.ibb.co/KKWBSJq/IMG-1580-1.jpg" alt="starry-night"></img>
              <img className="painting" src="https://i.ibb.co/cw4KHmx/IMG-1604-1.jpg" alt="van gough"></img>
              <img className="painting" src="https://i.ibb.co/PFKnq7C/IMG-1612-1.jpg" alt="van gough"></img>
          </div>

            <div className="flex-container"> 
              <img className="painting" src="https://i.ibb.co/MS3vtNV/IMG-1622-1.jpg" alt="starry-night"></img>
              <img className="painting" src="https://i.ibb.co/q5NWhXV/IMG-1566-1.jpg" alt="van gough"></img>
              <img className="painting" src="https://i.ibb.co/JBjpfcm/IMG-1571-1.jpg" alt="van gough"></img>
          </div>
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
