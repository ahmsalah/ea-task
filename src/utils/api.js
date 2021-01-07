import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASEURL;

const api = axios.create({
  baseURL,
});

/**
 * axios interceptors
 */
// api.interceptors.request.use(config => {
// const token = store.getState()?.auth?.currentUser?.token;
// eslint-disable-next-line no-param-reassign
// config.headers.Authorization = token || '';
// return config;
// });

export default api;
