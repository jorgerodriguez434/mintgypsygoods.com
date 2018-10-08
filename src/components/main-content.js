import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default class MainContent extends React.Component {
  /**
   * The <section> tag defines sections in a document, such as chapters, headers,
   *  footers, or any other sections of the document. whereas: The <div> tag
   * defines a division or a section in an HTML document. The <div> tag is used
   * to group block-elements to format them with CSS.
   *
   */

  constructor() {
    super();
    this.state = {
      display: "landing"
    };
  }

  jewerly = () => {
    window.scrollTo(0, 0);
    this.setState({
      display: "jewerly"
    });
  };

  paintings = () => {
    window.scrollTo(0, 0);
    this.setState({
      display: "paintings"
    });
  };

  render = () => {
    if (this.state.display === "landing") {
      return (
        <main>
          <section className="content">
            <img
              src="https://pixelarity.com/items/demos/future-imperfect/light/images/pic01.jpg"
              alt="banner"
            />
            <h2> About me </h2>
            <section className="lorem-content">
              <h3> Hi, my name is Aubrey </h3>
              <hr/>
              <p>
                {" "}
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>

              <div className="flex-container">

                <div
                  className="add-border width-50 pointer add-padding _hover main-background-color circle"
                  onClick={this.jewerly}
                >
                  <Link className="link" to="/jewerly">
                    {" "}
                    Jewerly
                  </Link>
                </div>

                <div
                  className="add-border pointer add-padding width-50 _hover main-background-color circle"
                  onClick={this.paintings}
                >
                  <Link className="link" to="/paintings">
                    {" "}
                    Paintings
                  </Link>
                </div>
                
              </div>
            </section>
          </section>
        </main>
      );
    }

    if (this.state.display === "jewerly") {
      return <Redirect to="/jewerly" />;
    }

    if (this.state.display === "paintings") {
      return <Redirect to="/paintings" />;
    }
  }; //render
}

//return <Redirect to="/login" />;
