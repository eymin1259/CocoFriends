import React from 'react';
import MainTemplete from '../../components/main/MainTemplete';

const mock = [
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
  {
    userid: 9,
    postid: 10,
    imgUrl: 'https://pbs.twimg.com/media/EVr9NmJVAAAovwr.jpg',
  },
];
const MainContainer = () => {
  return <MainTemplete posts={mock} />;
};

export default MainContainer;
