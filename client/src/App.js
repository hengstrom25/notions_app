import React, { Component } from 'react';
import Login from './Login/index';
import Dashboard from './Dashboard/index';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
          </Switch>
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    )
  }
};

export default withRouter(App);
