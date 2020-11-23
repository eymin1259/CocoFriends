import React from 'react';
import styled from 'styled-components';

const StyledTextInputSearch = styled.div`
  margin: 0 10px;
  p {
    padding: 0 10px;
    margin-bottom: 10px;
  }
  input {
    width: 200px;
    height: 35px;
    background-color: rgb(250, 250, 250);
    border-radius: 5px;
    border: 1px solid rgb(230, 230, 230);
    padding: 0 10px;
    &:focus {
      outline: none;
    }
  }
`;

const TextInputSearch = () => {
  return (
    <StyledTextInputSearch>
      <p>이름</p>
      <input type="text"></input>
    </StyledTextInputSearch>
  );
};

export default TextInputSearch;
