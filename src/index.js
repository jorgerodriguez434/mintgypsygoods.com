import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Jewerly from "./components/jewerly";
import Paintings from "./components/paintings";
const App = () => {
  return (
    <BrowserRouter>
      <div>
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/remove" component={SetRemove} />
            <Route exact path="/update" component={SetUpdate} />
            <Route exact path="/add-case" component={AddCase} />
            <Route exact path="/cases" component={ShowCases} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
 */
