import React, { useEffect, useState } from 'react';
import MainTemplete from '../../components/main/MainTemplete';
import { getMainPosts } from '../../lib/api';

const MainContainer = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);

  const requestMoreData = () => {
    setOffset(offset + 15);
    getMainPosts(offset).then((res) => {
      setPosts(posts.concat(res.data.mainPosts));
    });
  };

  useEffect(() => {
    getMainPosts(offset).then((res) => {
      setPosts(posts.concat(res.data.mainPosts));
    });
  }, []);

  return <MainTemplete posts={posts} handleBtn={requestMoreData} />;
};

export default MainContainer;
