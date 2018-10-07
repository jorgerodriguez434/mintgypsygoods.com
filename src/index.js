import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Jewerly from "./components/jewerly";
import Paintings from "./components/paintings";
import Links from "./components/links"

const App = () => {
  return (
    
    <BrowserRouter>
    <div>
      <Links/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jewerly" component={Jewerly} />
        <Route exact path="/paintings" component={Paintings} />
      </Switch>
    </div>
  </BrowserRouter>
   
  );
};

ReactDOM.render(<App />, document.getElementById("root"));