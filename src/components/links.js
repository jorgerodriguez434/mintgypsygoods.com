import React from "react";
import { Link } from "react-router-dom";
export default class Links extends React.Component {

    render() {
        return (
          <div className="link-group">
          <Link className="link cursive" to="/">Home</Link>
            <Link className="link cursive" to="/jewerly">Jewelry</Link>
            <Link className="link cursive" to="/paintings">Paintings</Link>
            <Link className="link cursive" to="/blog">Blog</Link>
          </div>
        );
      }

}//jewerly