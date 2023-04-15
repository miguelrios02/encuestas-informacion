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

function myVotes(ids: any) {
  const { data, error, isLoading, mutate } = UseSWR<UserMeResponse>(
    `/users/${ids}/votes`
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}
export { meUser, myVotes };
