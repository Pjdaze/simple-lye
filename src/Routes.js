import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import ScrollToTopRoute from './History';

import Home from './components/pages/Home';

const Routes = props => (
  <Switch>
    <ScrollToTopRoute path="/" exact component={Home} />
    <ScrollToTopRoute path="/Home" component={Home} />
  </Switch>
);

export default Routes;
