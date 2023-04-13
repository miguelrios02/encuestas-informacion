import useSWR from 'swr';
import axios from '../helpers/axios.helper';
import { PublicationsResponse } from '../interfaces/publications.interface';

function usePublications() {
  const { data, error, isLoading, mutate } =
    useSWR<PublicationsResponse>('/publications');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
function Publications(dat: any) {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    `/publications/${dat}`
  );
  return {
    data: data?.results,
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

export { usePublications, getPublications, createPublications, Publications };
