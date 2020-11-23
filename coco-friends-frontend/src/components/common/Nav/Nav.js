import React from 'react';
import styled from 'styled-components';
import NavIconsBox from './NavIconsBox';
import NavSearchBox from './NavSearchBox';
import NavLogoBox from './NavLogoBox';

const StyledNav = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #7acbf9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBlock = styled.div`
  min-width: 950px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Nav = () => {
  return (
    <StyledNav>
      <NavBlock>
        <NavLogoBox />
        <NavSearchBox />
        <NavIconsBox />
      </NavBlock>
    </StyledNav>
  );
};

export default Nav;
