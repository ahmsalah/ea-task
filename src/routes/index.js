import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Wee</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
