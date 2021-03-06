import React from 'react';
import styled from 'styled-components';

const StyledRequestMoreDataBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #7acbf9;
  border-radius: 10px;
  border: 1px solid rgb(230, 230, 230);
  text-align: center;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  &:hover {
    background-color: #00a1ff;
  }
  cursor: pointer;
`;

const RequestMoreDataBar = ({ handleBtn }) => {
  return (
    <StyledRequestMoreDataBar onClick={handleBtn}>
      <p>더보기</p>
    </StyledRequestMoreDataBar>
  );
};

export default RequestMoreDataBar;
