import React from 'react';
import { Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import SearchPage from './pages/SearchPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Route path={['/', 'login']} exact={true} component={LoginPage} />
      <Route path="/signup" exact={true} component={SignupPage} />
      <Route path="/main" exact={true} component={MainPage} />
      <Route path="/post/:postId" exact={true} component={PostPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/chat" exact={true} component={ChatPage} />
    </>
  );
}

export default App;
