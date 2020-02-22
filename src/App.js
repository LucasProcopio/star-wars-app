import React from "react";
import { render } from "react-dom";

import Home from "./pages/Home";

import GlobalStyle from "./styles/global";

const App = () => (
  <>
    <Home />
    <GlobalStyle />
  </>
);

render(<App />, document.getElementById("root"));
