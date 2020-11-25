import React, { useEffect, useState } from 'react';
import MainTemplete from '../../components/main/MainTemplete';
import { getMainPosts } from '../../lib/api';

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getMainPosts().then((res) => {
      setPosts(res.data.mainPosts);
    });
  }, []);

  return <MainTemplete posts={posts} />;
};

export default MainContainer;
