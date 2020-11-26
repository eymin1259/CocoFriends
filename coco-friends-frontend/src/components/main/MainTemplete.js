import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostBoxTemplete from '../common/post/PostBoxTemplete';
import PostCard from '../common/post/PostCard';
import RequestMoreDataBar from '../common/RequestMoreDataBar';

const StyledMainTemplete = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const MainTemplete = ({ posts, handleBtn }) => {
  return (
    <StyledMainTemplete>
      <PostBoxTemplete>
        {posts.map((post, idx) => (
          <Link to={`/profile/${post.user}`}>
            <PostCard key={idx} data={post} />
          </Link>
        ))}
        <RequestMoreDataBar handleBtn={handleBtn} />
      </PostBoxTemplete>
    </StyledMainTemplete>
  );
};

export default MainTemplete;
