import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import SearchResultBox from './SearchResultBox';
import SearchResultItem from './SearchResultItem';
import RequestMoreDataBar from '../common/RequestMoreDataBar';

const StyledSearchTemplete = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
`;

const SearchTemplete = ({ results }) => {
  return (
    <StyledSearchTemplete>
      <SearchBox />
      <SearchResultBox>
        {results.map((result, idx) => (
          <SearchResultItem key={idx} result={result} />
        ))}
        <RequestMoreDataBar />
      </SearchResultBox>
    </StyledSearchTemplete>
  );
};

export default SearchTemplete;
