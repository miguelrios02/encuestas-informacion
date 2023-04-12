import UseSWR from 'swr';
import { InfoCard } from '../interfaces/card.interface';

function idPublications(tid: any) {
  const { data, error, isLoading, mutate } = UseSWR<InfoCard>(
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
