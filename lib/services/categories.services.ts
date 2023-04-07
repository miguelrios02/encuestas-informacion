import useSWR from 'swr';
import { ICategoriesResponse } from '../interfaces/categories.interface';
function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<ICategoriesResponse>(
    '/publications-types'
  );
  return {
    data: data,
    error,
    isLoading,
    mutate,
  };
}

export { useCategories };
