import UseSWR from 'swr';
import { UserMeResponse } from '../interfaces/userMe.interface';

function meUser() {
  const { data, error, isLoading, mutate } = UseSWR<UserMeResponse>('/auth/me');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
export { meUser };
