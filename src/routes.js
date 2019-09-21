import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App.jsx";
import MainPage from "./containers/MainPage";

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
    </Route>
  </div>
);
