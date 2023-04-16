import axios from '../helpers/axios.helper';

import { User } from '../interfaces/user.interface';

function createUser(user: User) {
  return axios.post(`/auth/sign-up`, user);
}
function login(data: { email: string; password: string }) {
  return axios.post(`/auth/login`, data);
}
function forgetPassword(data: { email: string }) {
  console.log(data.email);
  return axios.post(`/auth/forget-password`, data);
}
function changePassword(data: { password1: string; password2: string }) {
  return axios.post(`/auth/change-password`, data.password2);
}

export { createUser, login, forgetPassword, changePassword };
