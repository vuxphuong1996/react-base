/* eslint-disable func-names */
import axios from 'axios';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const config = {
  baseURL: process.env.REACT_APP_API_URL || '',
  validateStatus(status) {
    return (
      (status >= 200 && status < 300)
      || status === 400
      || status === 404
      || status === 405
      || status === 409
      || status === 429
      || status === 500
    ); // default
  }
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  // eslint-disable-next-line no-shadow
  function(config) {
    if (window.localStorage.access_token) {
      config.headers = {};

      config.headers['x-access-token'] = window.localStorage.access_token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    if (
      error.response
      && (error.response.status === 504
        || error.response.status === 403
        || error.response.status === 401)
    ) {
    // Do something with response
    } else {
      // store.dispatch("common/setStateErrorRequest");
    }
    return Promise.reject(error);
  }
);
export default _axios;
