import React, { useEffect } from 'react';
import NavContainer from '../containers/common/NavContainer';
import ProfileContainer from '../containers/profile/ProfileContainer';

const ProfilePage = ({ match }) => {
  const userId = match.params.profilId;
  return (
    <>
      <NavContainer />
      <ProfileContainer userId={userId} />
    </>
  );
};

export default ProfilePage;
