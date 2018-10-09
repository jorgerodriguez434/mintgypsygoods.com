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
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
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
