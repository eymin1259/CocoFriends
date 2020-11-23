import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavSearchBox = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchLink = styled(Link)`
  width: 50%;
  height: 60%;
  background-color: #7acbf9;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #00a1ff;
    border: 1px solid #00a1ff;
  }
`;

const NavSearchBox = () => {
  return (
    <StyledNavSearchBox>
      <SearchLink to="/search">코코 친구 찾기 !</SearchLink>
    </StyledNavSearchBox>
  );
};

export default NavSearchBox;
