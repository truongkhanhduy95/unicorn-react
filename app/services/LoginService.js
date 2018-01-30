import axios from 'axios';
import * as config from './config';

export default function login({ username, password }) {
  return axios({
    url: `${config.API_URL}api/${config.API_VERSION}/accounts/token`,
    timeout: config.TIMEOUT,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username,
      password,
      grantType: 'password',
    },
  });
}
