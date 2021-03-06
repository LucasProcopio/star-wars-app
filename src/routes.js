import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/character/details" component={CharacterDetail} />
    </Switch>
  );
}
