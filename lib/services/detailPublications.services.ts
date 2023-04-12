import UseSWR from 'swr';
import { Results } from '../interfaces/publications.interface';

function idPublications(tid: any) {
  const { data, error, isLoading, mutate } = UseSWR<Results>(
    `/publications/${tid}`
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { idPublications };
