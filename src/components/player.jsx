import React, { Component } from 'react'
import ReactMediaVisualizer from 'react-media-visualizer'
export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: [],
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: 'soundcloud'
    }
    this.receiveStateUpdates = this.receiveStateUpdates.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <div className="content">
          Wrap the content of your webpage in here
        </div>
        <ReactMediaVisualizer
          playlist={this.state.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.state.playlistIsPlaying}
          theme={this.state.theme}
          currentSongIndex={this.state.currentSongIndex} />
      </React.Fragment>
    )
  }

  // receiveStateUpdates(payload) {
  //   if (payload.theme) {
  //     switch (payload.theme) {
  //       case 'spotify':
  //         root.style.setProperty('--content-height', '82px')
  //         break
  //       case 'youtube':
  //         root.style.setProperty('--content-height', '72px')
  //         break
  //       case 'soundcloud':
  //         root.style.setProperty('--content-height', '48px')
  //         break
  //       default:
  //         break
  //     }
  //   }
  //   this.setState(payload)
  // }
}
