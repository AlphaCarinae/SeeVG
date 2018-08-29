import React from 'react';
import Home from './pages/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const Routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </div>
  </Router>
);

export default Routes;
