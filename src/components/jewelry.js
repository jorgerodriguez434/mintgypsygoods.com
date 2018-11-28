import React from "react";
import { Redirect } from "react-router-dom";

export default class Jewerly extends React.Component {
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
        <section className="content margin-top ">
        <div className="jewelry-banner">

        </div>
        {/* <img src="https://tappers.com/user_area/content_media/Pre%20Owned%20and%20Estate%20Banner%20Sm.jpg" alt="banner"></img> */}
          <h1 className="jewelry-heading"> Jewelry</h1>
          <div className="lorem-content ">
          <hr/>
            <p>
              {" "}
        
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

/**
 * import React from "react";

export default class Jewerly extends React.Component {

    render = () => {
        return (
            <div> 
                <h1> Jewerly Page</h1>
            </div>
        );
    }

}
 */
