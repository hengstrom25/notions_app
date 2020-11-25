import React, { Component } from 'react';
import Login from './Login/index';
import Dashboard from './Dashboard/index';
import { BrowserRouter as Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        hello
        <div>
          <Login />
        </div>
      </div>
    )
  }
};

export default withRouter(App);
