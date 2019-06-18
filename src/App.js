import React, { Component } from 'react';

import Greeting from './Greeting/Greeting';
import './App.css';

class App extends Component {
  state = {
    greeting: 'No greeting for you'
  };

  render() {
    return (
      <>
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <Greeting msg={this.state.greeting} />
      </>
    );
  }

  greet = () => {
    this.setState({greeting: "Hello Web XVIIII"});
  };

  bye = () => {
    this.setState({greeting: "Bye Web XVIIII"});
  };
}



export default App;
