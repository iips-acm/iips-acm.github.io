import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import About from "./views/About/About"
import Events from "./views/Events/Events"
import Github from "./views/Github/Github"
import CodeOfConduct from "./views/CoC/CodeOfConduct"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route exact path="/" component={Components} />
      <Route path="/about" component={About}/>
      <Route path="/events" component={Events}/>
      <Route path="/github" component={Github}/>
      <Route path="/codeofconduct" component={CodeOfConduct}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
