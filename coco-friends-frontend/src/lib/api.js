import axios from 'axios';

export const getMainPosts = (offset) =>
  axios.get(`http://localhost:8002/posts/all?offset=${offset}`);

export const login = ({ id, pw }) =>
  axios.post('http://localhost:8002/auth/login', { id, pw });

export const getUserInfo = (id) =>
  axios.get(`http://localhost:8002/user/${id}`);

export const getUserPosts = (id) =>
  axios.get(`http://localhost:8002/posts/ofUser?uid=${id}`);
