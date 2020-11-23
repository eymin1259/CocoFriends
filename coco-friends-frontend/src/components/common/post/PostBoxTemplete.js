import React from 'react';
import styled from 'styled-components';

const StyledPostBoxTemplete = styled.div`
  width: 960px;
  min-height: 100vh;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;

const PostBoxTemplete = ({ children }) => {
  return <StyledPostBoxTemplete>{children}</StyledPostBoxTemplete>;
};

export default PostBoxTemplete;
