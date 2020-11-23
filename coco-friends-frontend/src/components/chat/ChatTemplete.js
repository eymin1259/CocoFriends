import React from 'react';
import styled from 'styled-components';

const StyledChatTemplete = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const ChatTemplete = () => {
  return <StyledChatTemplete>chat</StyledChatTemplete>;
};

export default ChatTemplete;
