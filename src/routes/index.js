import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route to="/" exact component={SignIn} />
      <Route to="/register" component={SignUp} />

      <Route to="/home" component={Home} isPrivate />
    </Switch>
  );
}
