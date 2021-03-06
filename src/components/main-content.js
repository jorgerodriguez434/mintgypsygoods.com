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
            <div className="jewerly-container lorem-content">
              <div className="jewerly _hover circle" onClick={this.jewerly}>
                <Link className="link" to="/jewerly">
                  {" "}
                  Jewelry
                </Link>
              </div>

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
            </div>
            <div className="home-painting-container lorem-content">
            <hr/>
              <div
                className="home-painting _hover circle"
                onClick={this.paintings}
              >
                <Link className="link" to="/paintings">
                  {" "}
                  Paintings
                </Link>
              </div>

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
            </div>
            <hr/>
             <section className="content bio-container">
            {/* <img
              src="https://pixelarity.com/items/demos/future-imperfect/light/images/pic01.jpg"
              alt="banner"
            /> */}
            
            <div className="aubrey"> 
        <img
          src="https://preview.ibb.co/hoaJF0/aubrey.jpg"
          alt="me"
          className="circle"
        />
      </div>
            <section className="lorem-content bio">
            <h1> About Me </h1>
              <p>
                {" "}
              This site is a reflection of the art I create. I have a passion for painting and jewelry. This is my place to display it. My site is updated all the time with original items. I'm working my tail off to provide you with spectacular pieces.
                Love you and thank you so much for coming here! -Aubrey 
              </p>
              
            </section>
           
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
