import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={ HomePage } />
      <Redirect to='/' />
    </Switch>
  );
}
