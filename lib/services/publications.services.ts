import useSWR from 'swr';
import axios from '../helpers/axios.helper';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR('/publications');
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function createPublications(data: any) {
  return axios.post('/publications', data);
}

function getPublications() {
  return axios.get(
    'https://paracuando-academlo-api.academlo.tech/api/v1/publications'
  );
}

export { usePublications };
