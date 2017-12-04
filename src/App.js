import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import GameGrid from './components/GameGrid';
import PlayerTurn from './components/PlayerTurn';

const player = true
const tiles = "123456789"
.split('')
.map(a=>({id:a, clicked: false}))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-intro">
          <PlayerTurn player={player} />
          <GameGrid tiles={tiles} />
        </div>
      </div>
    );
  }
}

export default App;
