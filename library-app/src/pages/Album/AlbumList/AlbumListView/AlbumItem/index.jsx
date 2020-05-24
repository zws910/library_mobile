import React, { Component } from "react";
import Zmage from 'react-zmage'
import "./style.less";

export default class AlbumItem extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <span>twitter</span>
          <span>2019-09-09</span>
        </div>
        <div className="img-wrapper">
          {/* <img src="https://pbs.twimg.com/media/EYoBp2zUEAY4hpO?format=jpg&name=medium" alt=""/> */}
          <Zmage src="https://pbs.twimg.com/media/EYoBp2zUEAY4hpO?format=jpg&name=medium" preset="mobile" />
        </div>
      </div>
    );
  }
}
