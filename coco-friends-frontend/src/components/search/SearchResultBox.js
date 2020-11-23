import React from 'react';
import styled from 'styled-components';

const StyledSearchResultBox = styled.div`
  width: 960px;
  border-top: 1px solid rgb(230, 230, 230);
  padding: 30px 0 0 0;
  height: auto;
`;

const SearchResultBox = ({ children }) => {
  return <StyledSearchResultBox>{children}</StyledSearchResultBox>;
};

export default SearchResultBox;
