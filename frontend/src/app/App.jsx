import React from 'react';
import './App.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from '../routes';

function App() {
  return (
    <div className="">
    <Router>
    <Header></Header>
      <Switch>
        { ROUTES.map((route, index) => <Route key={ index } { ...route }></Route>) }
      </Switch>
    </Router>
  </div>
  )
}

export default App;
