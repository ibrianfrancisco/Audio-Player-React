import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Input from './Input';
const catalog = [
  {category: "Animal", title: "Bison", url: "http://www.noiseaddicts.com/samples_1w72b820/280.mp3"},
  {category: "Animal", title: "Chimpanzee", url: "http://www.noiseaddicts.com/samples_1w72b820/287.mp3"},
  {category: "Animal", title: "Raven", url: "http://www.noiseaddicts.com/samples_1w72b820/329.mp3"},
  {category: "Movie Quote", title: "An Offer He Can't Refuse", url: "http://www.noiseaddicts.com/samples_1w72b820/47.mp3"},
  {category: "Movie Quote", title: "Hal 9000: I'm Sorry Dave", url: "http://www.noiseaddicts.com/samples_1w72b820/55.mp3"},
  {category: "Sound Effect", title: "Darth Vader Breathing", url: "http://www.noiseaddicts.com/samples_1w72b820/3726.mp3"},
  {category: "Sound Effect", title: "Doorbell", url: "http://www.noiseaddicts.com/samples_1w72b820/3721.mp3"},
  {category: "Sound Effect", title: "Siren", url: "http://www.noiseaddicts.com/samples_1w72b820/3712.mp3"}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: catalog,
      player: new Audio(),
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Audio Player</h1>
        </div>
        <Input />
        <div>
          <Catalog catalog={this.state.catalog} player={this.state.player}/>
        </div>
      </div>
    );
  }
}


export default App;
