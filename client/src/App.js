import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dbResponse: ""};
  }

  callApi() {
    fetch("http://localhost:9000/users")
      .then(res => res.text())
      .then(res => this.setState({ dbResponse: res}))
      .catch(err => err)
  }

  componentDidMount() {
    this.callApi()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Notions App
          </p>
          <p>
            {this.state.dbResponse}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
