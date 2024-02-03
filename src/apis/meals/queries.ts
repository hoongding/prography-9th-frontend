import { useQueries, useQuery } from '@tanstack/react-query';
import { Axios, AxiosError } from 'axios';

import QueryApi from '@apis/react-query/queryApiClass';

import apis from '@constants/apis';
import { IMeal, IMeals } from './types';
import { FILTER_ACTION_TYPES, useFilterDispatchContext } from '@context/filterContext';
import { useEffect } from 'react';

const meals = new QueryApi(apis.meals);

interface IMealsSearchParams {
  c: string;
}

export const useMeals = (category: string[], onSuccess: (data: IMeal[]) => void) => {
  const searchParams = (index: number) => {
    return { c: category[index] };
  };

  const queryResults = useQueries({
    queries: category.map((_, index) => {
      return {
        queryKey: meals.getQueryKey(searchParams(index)),
        queryFn: meals.getQueryFn(searchParams(index)),
      };
    }),
  });

  const allQueriesSuccess = queryResults.every(query => query.isSuccess);

  useEffect(() => {
    if (allQueriesSuccess) {
      const data = queryResults
        .map(query => query.data.meals)
        .flat()
        .reduce((acc, cur) => {
          if (acc.map((meal: IMeal) => meal.idMeal).includes(cur.idMeal)) {
            return acc;
          }
          return [...acc, cur];
        }, [] as IMeal[]);

      onSuccess(data);
    }
  }, [allQueriesSuccess, category.length]);
};
