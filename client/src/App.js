import React from 'react';
import Login from './Login/index';
import Dashboard from './Dashboard/index';
import Project from './Project/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/projects/:id" component={Project}/>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

