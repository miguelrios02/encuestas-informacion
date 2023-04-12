import axios from '../helpers/axios.helper';

function votePublications(id: string) {
  return axios.post(`/publications/${id}/vote`);
}

export { votePublications };
