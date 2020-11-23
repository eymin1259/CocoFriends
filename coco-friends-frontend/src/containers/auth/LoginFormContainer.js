import React, { useState } from 'react';

import LoginForm from '../../components/auth/LoginForm';

const LoginFormContainer = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return <LoginForm />;
};

export default LoginFormContainer;
