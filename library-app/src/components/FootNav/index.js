import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.less"

export default class FootNav extends Component {
  render() {
    return (
      <div className="nav-footer">
        <ul className="clear-fix">
          <li>
            <NavLink exact to="/">
              <i className="iconfont icon-home" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/album">
              <i className="iconfont icon-image" />
              Album
            </NavLink>
          </li>
          <li>
            <NavLink to="/game">
              <i className="iconfont icon-linechart" />
              Game
            </NavLink>
          </li><li>
            <NavLink to="/user-center">
              <i className="iconfont icon-crown" />
              My
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
