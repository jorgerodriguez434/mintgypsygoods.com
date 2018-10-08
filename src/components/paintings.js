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
         <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/13/32/1756483d927a102.jpg" alt="banner"></img>
          <h2> Paintings Page</h2>
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

             <div className="flex-container"> 
              <img className="painting" src="https://images-na.ssl-images-amazon.com/images/I/51OY%2B0T0xBL._SX425_.jpg" alt="starry-night"></img>
              <img className="painting" src="https://5.imimg.com/data5/PP/JQ/MY-42593726/vincent-van-gogh-paintings-on-canvas-500x500.jpg" alt="van gough"></img>
              <img className="painting" src="https://www.christies.com/img/LotImages/2017/NYR/2017_NYR_15004_0028A_000(vincent_van_gogh_laboureur_dans_un_champ).jpg" alt="van gough"></img>
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
