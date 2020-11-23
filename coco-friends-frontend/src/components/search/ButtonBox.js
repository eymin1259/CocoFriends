import React from 'react';
import styled from 'styled-components';
import SyledButton from '../common/SyledButton';

const StyledButtonBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;

const ButtonBox = () => {
  return (
    <StyledButtonBox>
      <SyledButton>검색</SyledButton>
      <SyledButton>초기화</SyledButton>
    </StyledButtonBox>
  );
};

export default ButtonBox;
