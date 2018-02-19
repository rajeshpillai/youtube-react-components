import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTag from './components/InputTag';
import Modal from './components/Modal/Modal';


class App extends Component {
  state = {
    show: false
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="App">
        <InputTag placeholder="press enter/space to + tag" />

        <input type="button"
          onClick={this.showModal}
          value="Show Modal" />

        <Modal 
            onClose={this.showModal}
            show={this.state.show}>
            This message is from Modal!
        </Modal>

      </div>
    );
  }
}

export default App;
