import React from 'react';
import styled from 'styled-components';

const STDButton = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid rgb(230, 230, 230);
  background-color: #7acbf9;
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 0 10px 0 0;
  cursor: pointer;
  &:hover {
    background-color: #00a1ff;
  }
`;

const SyledButton = ({ children }) => {
  return <STDButton>{children}</STDButton>;
};

export default SyledButton;
