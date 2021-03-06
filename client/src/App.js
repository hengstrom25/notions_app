import React from 'react';
import Login from './Login/index';
import Dashboard from './Dashboard/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

