import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../../components/common/Nav/Nav';

const NavContainer = () => {
  const photo = useSelector((state) => state.auth.authPhoto);

  return <Nav photo={photo} />;
};

export default React.memo(NavContainer);
