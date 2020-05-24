import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../pages/Home";
import Album from "../pages/Album";
import Game from '../pages/Game';
import UserCenter from '../pages/UserCenter'
import NotFound from "../pages/NotFound";

export default class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/album" component={Album}></Route>
          <Route path="/game" component={Game}></Route>
          <Route path="/user-center" component={UserCenter}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </HashRouter>
    );
  }
}
