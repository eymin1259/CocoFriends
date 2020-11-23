import React from 'react';
import styled from 'styled-components';
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
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArUl8vgtwWjcZPNICGQEtzMuPQSC3ubReaVW6ebp2TiqXR5R6VEBWhtIDFiQa1x2AWXlGOqox4FVqEYY5lVokY_MUG3IE6EY&usqp=CAU&ec=45725304');
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
  const { name, sex, age, city, district, description } = profile;

  return (
    <StyledProfileBox>
      <ProfilePhoto />
      <ProfileSection>
        <Profile>
          <h2>{name}</h2>
          <p>
            {sex} <b>{age}</b>
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
