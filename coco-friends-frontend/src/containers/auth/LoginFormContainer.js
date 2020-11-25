import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../components/auth/LoginForm';
import { login } from '../../modules/auth';

const LoginFormContainer = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = () => dispatch(login(id, pw));

  useEffect(() => {
    if (auth.authError) {
      alert('로그인 실패 ! : email 또는 password를 확인하세요');
    }
  }, [auth]);

  return (
    <LoginForm
      handleId={handleId}
      handlePw={handlePw}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginFormContainer;
