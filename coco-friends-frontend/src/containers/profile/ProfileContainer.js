import React, { useEffect, useState } from 'react';
import ProfileTemplete from '../../components/profile/ProfileTemplete';
import * as api from '../../lib/api';

const ProfileContainer = ({ userId }) => {
  const [profile, setProfile] = useState({
    name: undefined,
    sex: undefined,
    age: undefined,
    city: undefined,
    district: undefined,
    description: undefined,
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getUserInfo(userId).then((res) => {
      setProfile({
        name: res.data.userInfo.name,
        photo: res.data.userInfo.photo,
        sex: res.data.userInfo.sex,
        age: res.data.userInfo.age,
        city: res.data.userCity.name,
        district: res.data.userDistrict.name,
        description: res.data.userInfo.description,
      });
    });

    api.getUserPosts(userId).then((res) => {
      setPosts(res.data.userPosts);
    });
  }, [userId]);

  return <ProfileTemplete posts={posts} profile={profile} />;
};

export default ProfileContainer;
