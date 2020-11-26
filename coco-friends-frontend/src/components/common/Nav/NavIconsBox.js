import React from 'react';
import styled, { css } from 'styled-components';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMessage,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledNavIconsBox = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #08a0fb;
  ${(props) =>
    props.photo &&
    css`
      background-image: url(${props.photo});
    `}
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

const NavIconsBox = ({ photo, goToMyPage }) => {
  const userId = useSelector((state) => state.auth.authId);
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
      <StyledLink to={`/profile/${userId}`}>
        <ProfileIcon photo={photo} onClick={goToMyPage} />
      </StyledLink>
    </StyledNavIconsBox>
  );
};

export default NavIconsBox;
