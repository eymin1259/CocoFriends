import React from 'react';
import styled from 'styled-components';

const StyledPostCard = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 10px 20px 10px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
`;

const PostCard = ({ data }) => {
  return <StyledPostCard imgSrc={data.img} />;
};

export default PostCard;
