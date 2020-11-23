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
  console.dir(data.imgUrl);
  return <StyledPostCard imgSrc={data.imgUrl} />;
};

export default PostCard;
