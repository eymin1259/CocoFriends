import React from 'react';

import AuthTemplete from '../components/auth/AuthTemplete';
import LoginFormContainer from '../containers/auth/LoginFormContainer';

const LoginPage = () => {
  return (
    <AuthTemplete>
      <LoginFormContainer />
    </AuthTemplete>
  );
};

export default LoginPage;
