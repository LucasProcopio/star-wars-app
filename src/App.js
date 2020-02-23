import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";

import { history } from "./services/history";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyle />
  </Router>
);

render(<App />, document.getElementById("root"));
