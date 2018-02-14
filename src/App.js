import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTag from './components/InputTag';


class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTag placeholder="press enter/space to + tag" />

      </div>
    );
  }
}

export default App;
