import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./login";
import axios from "axios";
import ButtonAppBar from "./navbar";
export default function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <ButtonAppBar></ButtonAppBar>
          </Route>
          <Route path="/">
            <SignIn></SignIn>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
