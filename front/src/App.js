import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./login";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/">
            <SignIn></SignIn>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
