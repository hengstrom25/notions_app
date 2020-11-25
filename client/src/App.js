import React, { Component } from 'react';
import ravelryLogo from './img/ravelryLogo.png';
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
      <div className="bg-white">
        <header className="App-header">
          <p>
            Welcome to Notions App
          </p>

          <a href="/session/ravelry">
            Login with Ravelry
          </a>
        </header>
      </div>
    );
  }
}

export default App;

