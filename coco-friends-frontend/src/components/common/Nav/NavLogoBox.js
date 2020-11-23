import React from 'react';
import styled from 'styled-components';

const StyledNavLogoBox = styled.div`
  width: 33%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #00a1ff;
`;

const NavLogoBox = () => {
  return (
    <StyledNavLogoBox>
      <h1>COCO FRIENDS</h1>
    </StyledNavLogoBox>
  );
};

export default NavLogoBox;
