import UseSWR from 'swr';
import axios from '../helpers/axios.helper';
import { NewPublication } from '../interfaces/newPublication';
import { TypePublicationResponse } from '../interfaces/typesPublications';

function typePublications() {
  const { data, error, isLoading, mutate } = UseSWR<TypePublicationResponse>(
    '/publications-types/'
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
function tagsPublications() {
  const { data, error, isLoading, mutate } =
    UseSWR<TypePublicationResponse>('/tags/');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
function createPublicationfirst(date: NewPublication) {
  return axios.post(`/publications/`, date);
}
function createPublication(date1: any, date2: any) {
  return axios.post(`/publications/${date1}/add-image`, date2);
}

export {
  typePublications,
  tagsPublications,
  createPublication,
  createPublicationfirst,
};
