import React from 'react';
import {
  Switch, Route, Redirect
} from 'react-router-dom';
import { AuthRoute } from '../components/RouteWithLayout';
import { NotFound as NotFoundView } from '../views';
import { authenPath } from './paths';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact
        from="/"
        to="/overview" />
      {authenPath.map(atPath => (
        <AuthRoute
          component={atPath.component}
          exact
          layout={atPath.layout}
          path={atPath.path}
          key={atPath.id}
          type={atPath.type}
        />
      ))}
      <Route exact
        path="/not-found"
        component={NotFoundView} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
