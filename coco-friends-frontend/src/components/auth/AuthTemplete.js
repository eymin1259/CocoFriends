import React from 'react';
import styled from 'styled-components';

const AuthTempleteBlock = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthTemplete = ({ children }) => {
  return <AuthTempleteBlock>{children}</AuthTempleteBlock>;
};

export default AuthTemplete;
