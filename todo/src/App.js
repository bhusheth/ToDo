import React, { Component } from 'react';
import MainView from './component/MainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App</h1>
        </header>
        <MainView />
      </div>
    );
  }
}

export default App;
