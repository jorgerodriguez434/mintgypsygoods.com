import React from "react";
import { Link } from "react-router-dom";
export default class Links extends React.Component {

    render() {
        return (
          <div className="link-group">
          <Link className="link" to="/">Home</Link>
            <Link className="link" to="/jewerly">Jewerly</Link>
            <Link className="link" to="/paintings">Paintings</Link>
            <Link className="link" to="/blog">Blog</Link>
          </div>
        );
      }

}//jewerly