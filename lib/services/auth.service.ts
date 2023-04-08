import axios from '../helpers/axios.helper';

import { User } from '../interfaces/user.interface';

function createUser(user: User) {
  return axios.post(`/auth/sign-up`, user);
}
function login(data: { email: string; password: string }) {
  return axios.post(`/auth/login`, data);
}

export { createUser, login };
