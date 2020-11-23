import React from 'react';
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

const MainTemplete = ({ posts }) => {
  return (
    <StyledMainTemplete>
      <PostBoxTemplete>
        {posts.map((post, idx) => (
          <PostCard key={idx} data={post} />
        ))}
        <RequestMoreDataBar />
      </PostBoxTemplete>
    </StyledMainTemplete>
  );
};

export default MainTemplete;
