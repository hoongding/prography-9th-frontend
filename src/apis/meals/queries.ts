import QueryApi from '@apis/react-query/queryApiClass';
import apis from '@constants/apis';
import { useQuery } from '@tanstack/react-query';
import { IMeals } from './types';
import { AxiosError } from 'axios';

const meals = new QueryApi(apis.meals);

interface IMealsSearchParams {
  c: string;
}

export const useMeals = (category: string[]) => {
  const searchParams: IMealsSearchParams = { c: category.join(',') };

  return useQuery<IMeals, AxiosError>({
    queryKey: meals.getQueryKey(searchParams),
    queryFn: meals.getQueryFn(searchParams),
  });
};
