import QueryApi from '@apis/react-query/queryApiClass';
import apis from '@constants/apis';
import { IAllCategories } from './types';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

const allCategories = new QueryApi(apis.categories);

export const useAllCategories = () => {
  return useQuery<IAllCategories, AxiosError>({
    queryKey: allCategories.getQueryKey(),
    queryFn: allCategories.getQueryFn(),
  });
};
