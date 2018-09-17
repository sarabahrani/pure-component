import React, { Component } from 'react';
import './App.css';
import ShowPosts from './compnent/ShowPosts';

class App extends Component {
  constructor() {
    super();
    this.state =
      { name: [] }
  }
  onChangeHandler = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.onChangeHandler} />
        <ShowPosts text={this.state.name} />
      </div>
    );
  }
}

export default App;
