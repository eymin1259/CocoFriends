import React from 'react';
import ProfileTemplete from '../../components/profile/ProfileTemplete';

const postmock = [
  {
    userid: 1,
    postid: 2,
    imgUrl: 'https://pbs.twimg.com/media/EVr9NmJVAAAovwr.jpg',
  },
  {
    userid: 3,
    postid: 4,
    imgUrl: 'https://pbs.twimg.com/media/EVr9NmJVAAAovwr.jpg',
  },
  {
    userid: 5,
    postid: 6,
    imgUrl: 'https://pbs.twimg.com/media/EVr9NmJVAAAovwr.jpg',
  },
  {
    userid: 7,
    postid: 8,
    imgUrl: 'https://pbs.twimg.com/media/EVr9NmJVAAAovwr.jpg',
  },
];

const profilemock = {
  name: '삼색이',
  sex: '수컷',
  age: '6개월',
  city: '서울특별시',
  district: '노원구',
  description:
    '성격이 온화하고 산책을 좋아하는고양이 sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
};
const ProfileContainer = () => {
  return <ProfileTemplete posts={postmock} profile={profilemock} />;
};

export default ProfileContainer;
