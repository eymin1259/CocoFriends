import React from 'react';
import styled, { css } from 'styled-components';
import SyledButton from '../common/SyledButton';

const StyledProfileBox = styled.div`
  width: 960px;
  height: 300px;
  margin-top: 30px;
  border-bottom: 1px solid rgb(230, 230, 230);
  display: flex;
  justify-content: space-between;
`;

const ProfilePhoto = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  ${(props) =>
    props.img &&
    css`
      background-image: url(${props.img});
    `}

  background-size: 250px 250px;
`;

const ProfileSection = styled.section`
  width: 610px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Profile = styled.div`
  width: 610px;
  min-height: 200px;
  height: auto;
  max-height: 250px;
  margin-bottom: 10px;
  overflow: hidden;

  p {
    margin: 0 0 10px 0;
  }
`;

const ProfileBox = ({ profile }) => {
  const { name, photo, sex, age, city, district, description } = profile;

  return (
    <StyledProfileBox>
      <ProfilePhoto img={photo} />
      <ProfileSection>
        <Profile>
          <h2>{name}</h2>
          <p>
            {sex === 1 ? '수컷' : '암컷'} <b>{age}살</b>
          </p>
          <p>
            {city} {district}
          </p>
          <p>{description}</p>
        </Profile>
        <SyledButton>메세지 보내기</SyledButton>
      </ProfileSection>
    </StyledProfileBox>
  );
};

export default ProfileBox;
