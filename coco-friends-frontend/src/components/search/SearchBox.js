import React from 'react';
import styled from 'styled-components';
import ButtonBox from './ButtonBox';
import SearchConditionBox from './SearchConditionBox';

const StyledSearchBox = styled.div`
  width: 960px;
  height: auto;
  margin: 30px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  background-color: white;
`;

// 이름, 성별, 시, 구
const SearchBox = () => {
  return (
    <StyledSearchBox>
      <SearchConditionBox />
      <ButtonBox />
    </StyledSearchBox>
  );
};

export default SearchBox;
