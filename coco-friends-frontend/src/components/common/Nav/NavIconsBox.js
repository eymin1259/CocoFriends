import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMessage,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StyledNavIconsBox = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=eJfynleCkQkAX9d9_kH&oh=220016408e562b842d95bbddebf32364&oe=5FE54B0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2');
  background-size: cover;
`;

const StyledLink = styled(Link)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  color: #00a1ff;
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: #00a1ff;
  }
  &:active {
    text-decoration: none;
    color: #7acbf9;
  }
`;

const NavIconsBox = () => {
  return (
    <StyledNavIconsBox>
      <StyledLink to="/main">
        <AiOutlineHome style={{ width: 30, height: 30 }} />
      </StyledLink>
      <StyledLink to="/search">
        <AiOutlineSearch style={{ width: 30, height: 30 }} />
      </StyledLink>
      <StyledLink to="/chat">
        <AiOutlineMessage style={{ width: 30, height: 30 }} />
      </StyledLink>
      <StyledLink to="/profile/777">
        <ProfileIcon />
      </StyledLink>
    </StyledNavIconsBox>
  );
};

export default NavIconsBox;
