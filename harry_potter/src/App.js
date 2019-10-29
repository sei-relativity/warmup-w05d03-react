import React, { Component } from 'react';
import houses from './DB'
import House from './House'
import Character from './Character'
import './App.css';

class App extends Component {

  state = {
    currentIndex: 0,
    char: ""
  }

  showCharacter() {
    this.setState({
      char: < Character char={houses[this.state.currentIndex].notableCharacter} houseName={houses[this.state.currentIndex].houseName} />
    })
  }

  nextHouse() {

    if (houses[this.state.currentIndex + 1]) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        char: ""
      })
    } else {
      this.setState({
        currentIndex: 0,
        char: ""
      })
    }
  }

  render() {

    return (
      <div>
        <button onClick={() => this.nextHouse()}>Next House</button>
        <button onClick={() => this.showCharacter()}>Notable Character</button>
        <House house={houses[this.state.currentIndex]} />
        {this.state.char}
      </div>
    );
  }
}

export default App;