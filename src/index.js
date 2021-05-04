import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./home";
import Profile from "./profile";

function App() {
  return (
    <React.StrictMode>
      <Router basename="/demo-react-with-router">
        <Switch>
          <Route path="/profile/:login">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="*"></Route> */}
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
