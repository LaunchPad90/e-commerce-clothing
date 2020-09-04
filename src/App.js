import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import "./App.css";
import { SignInForm } from "./pages/sign-in-page/sign-in-page.component";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sign-in/">
            <SignInForm />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
