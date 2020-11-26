import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:active {
    color: rgb(150, 150, 150);
  }
`;

const StyledSearchResultItem = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(230, 230, 230);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
  }
  cursor: pointer;
`;

const StlyedImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
`;

const SearchResultItem = ({ result }) => {
  const { name, profileImg, sex, age, city, disctrict, userId } = result;
  return (
    <StyledLink to={`/profile/${98}`}>
      <StyledSearchResultItem>
        <StlyedImg imgSrc={profileImg} />
        <p>
          <b>{name}</b>
        </p>
        <p>{sex}</p>
        <p>{age}</p>
        <p>{city}</p>
        <p>{disctrict}</p>
      </StyledSearchResultItem>
    </StyledLink>
  );
};

export default SearchResultItem;
