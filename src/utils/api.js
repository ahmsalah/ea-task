import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASEURL;

const api = axios.create({
  baseURL,
});

/* axios interceptors */

api.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
      source: 'mweb',
    },
  };
});

export default api;
