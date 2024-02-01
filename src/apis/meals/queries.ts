import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import QueryApi from '@apis/react-query/queryApiClass';

import apis from '@constants/apis';
import { IMeals } from './types';

const meals = new QueryApi(apis.meals);

interface IMealsSearchParams {
  c: string;
}

export const useMeals = (category: string[], options = {}) => {
  const searchParams: IMealsSearchParams = { c: category[category.length - 1] };

  return useQuery<IMeals, AxiosError>({
    queryKey: meals.getQueryKey(searchParams),
    queryFn: meals.getQueryFn(searchParams),
    ...options,
  });
};
