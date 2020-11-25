import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ path, component }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.authPhoto !== null) {
    return <Redirect to="/main" />;
  }

  return <Route path={path} exact={true} component={component} />;
};

export default AuthRoute;
