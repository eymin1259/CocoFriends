import axios from 'axios';

export const getMainPosts = () => axios.get('http://localhost:8002/posts/all');

export const login = ({ id, pw }) =>
  axios.post('http://localhost:8002/auth/login', { id, pw });
