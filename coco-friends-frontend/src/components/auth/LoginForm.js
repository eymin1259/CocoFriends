import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LoginImg = styled.img`
  width: 250px;
  height: 250px;
`;
const StyledInput = styled.input`
  width: 350px;
  height: 40px;
  margin-top: 15px;
  padding: 0 10px;
  font-weight: bold;
  font-size: 1.3rem;
  border: 2px solid #7acbf9;
  border-radius: 10px;

  &:focus {
    outline: none;
    border: 3px solid #00a1ff;
  }
`;

const StyledBtn = styled.button`
  width: 360px;
  height: 50px;
  background-color: #7acbf9;
  border: 1px solid #7acbf9;
  border-radius: 10px;
  margin-top: 15px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #00a1ff;
    border: 1px solid #00a1ff;
  }
`;

const LoginForm = ({ handleId, handlePw, handleSubmit }) => {
  return (
    <StyledLoginForm>
      <h1 style={{ color: '#00a1ff' }}>COCO FRIENDS</h1>
      <LoginImg src="https://image2.lotteimall.com/goods/17/10/53/1393531017_L.jpg" />
      <StyledInput onChange={(e) => handleId(e)} />
      <StyledInput type="password" onChange={(e) => handlePw(e)} />
      <StyledBtn onClick={handleSubmit}>로그인하기</StyledBtn>
    </StyledLoginForm>
  );
};

export default LoginForm;
