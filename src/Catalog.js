import React, { Component } from 'react';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( <CatalogList sounds={this.props.catalog} player={this.props.player}/> );
  }
}



class CatalogList extends Component {
  constructor() {
    super();
    this.state = {
      soundPlaying: false
    }
  }

  render() {
    return (
      <ul>
        {this.props.sounds.map(sound => (
          <Sound key={sound.url} sound={sound} player={this.props.player} />
         ))}
      </ul>
    )
  }
}

class Sound extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false
    }
    this.playSound = this.playSound.bind(this);
  }

  playSound(url) {
    this.props.player.src=url;
    this.props.player.play();
    this.setState({
      isPlaying: true
    });
  }

  pauseSound(url) {
    this.props.player.src=url;
    this.props.player.pause();
    this.setState({
      isPlaying: false
    });
  }

  render() {
    return (
      <li className="list-item">
        {this.state.isPlaying ? <button onClick={() => this.pauseSound(this.props.sound.url)}>Pause</button> : <button onClick={() => this.playSound(this.props.sound.url)}>Play</button>}
        {this.props.sound.title} &nbsp; |  &nbsp;{this.props.sound.category}
      </li>
    );
  }

}


export default Catalog;
