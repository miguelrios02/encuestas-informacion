import UseSWR from 'swr';
import { PublicationsResponse } from '../interfaces/publications.interface';
function myPublications(mydata: any) {
  const { data, error, isLoading, mutate } =
    UseSWR<PublicationsResponse>(mydata);
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
export { myPublications };
