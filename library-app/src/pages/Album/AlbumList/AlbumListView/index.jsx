import React, { Component } from 'react'
import AlbumItem from './AlbumItem'

export default class AlbumListView extends Component {
  render() {
    return (
      <div>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />

      </div>
    )
  }
}
