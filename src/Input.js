import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form onSubmit={this.addSound()}>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Category"/>
        <input type="text" placeholder="URL"/>
        <input type="submit" value="submit"/>
      </form>
    );
  }

  addSound() {

  }
}



export default Input;
