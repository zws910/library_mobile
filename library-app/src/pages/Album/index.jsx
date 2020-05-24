import React, { Component } from "react";
import FootNav from "../../components/FootNav";
import AlbumList from './AlbumList'

export default class Album extends Component {
  render() {
    return (
      <div>
        <AlbumList />
        <FootNav />
      </div>
    );
  }
}
