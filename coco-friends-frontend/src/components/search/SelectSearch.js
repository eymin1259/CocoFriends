import React from 'react';
import styled from 'styled-components';

const StyledSelectSearch = styled.div`
  margin: 0 10px;
  p {
    padding: 0 10px;
    margin-bottom: 10px;
  }
  select {
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

const SelectSearch = ({ category, options }) => {
  return (
    <StyledSelectSearch>
      <p>{category}</p>
      <select>
        <option value="" selected disabled hidden />
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
    </StyledSelectSearch>
  );
};

export default SelectSearch;
