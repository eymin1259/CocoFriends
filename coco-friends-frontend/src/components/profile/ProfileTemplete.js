import React from 'react';
import styled from 'styled-components';
import ProfileBox from './ProfileBox';
import PostBoxTemplete from '../common/post/PostBoxTemplete';
import PostCard from '../common/post/PostCard';

const StyledProfileTemplete = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const ProfileTemplete = ({ posts, profile }) => {
  return (
    <StyledProfileTemplete className="ProfileTemplete">
      <ProfileBox profile={profile} />
      <PostBoxTemplete>
        {posts.map((post, idx) => (
          <PostCard key={idx} data={post} />
        ))}
      </PostBoxTemplete>
    </StyledProfileTemplete>
  );
};

export default ProfileTemplete;
