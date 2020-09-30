import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Sign from '../pages/Sign';

import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/home" component={Home} isPrivate />
    </Switch>
  );
}
