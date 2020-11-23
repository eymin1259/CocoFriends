import React from 'react';
import { Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Route path={['/', '/login']} exact={true} component={LoginPage} />
      <Route path="/main" exact={true} component={MainPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/chat" exact={true} component={ChatPage} />
      <Route path="/profile/:profilId" exact={true} component={ProfilePage} />
    </>
  );
}

export default App;
