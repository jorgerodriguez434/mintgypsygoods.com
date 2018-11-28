import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Jewerly from "./components/jewelry";
import Paintings from "./components/paintings";
import Links from "./components/links"
import Blog from "./components/blog";

const App = () => {
  return (
    
    <BrowserRouter>
    <div>
      <Links/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jewerly" component={Jewerly} />
        <Route exact path="/paintings" component={Paintings} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  </BrowserRouter>
   
  );
};

ReactDOM.render(<App />, document.getElementById("root"));