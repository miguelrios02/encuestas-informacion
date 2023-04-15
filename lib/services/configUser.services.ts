import axios from '../helpers/axios.helper';
function configUser(date1: any, date2: any) {
  return axios.post(`/users/${date1}/add-image`, date2);
}
function configUserNames(date1: any, date2: any) {
  return axios.put(`/users/${date1}/`, date2);
}
export { configUser, configUserNames };
