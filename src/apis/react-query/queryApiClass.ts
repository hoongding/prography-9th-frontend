import { http } from '@apis/axios/axios-config';

const axiosGetForQuery = async (url: string, params?: object) => {
  const { data } = await http.get(url, { ...params });

  console.log('%cQUERY KEY', 'color: blue', [url, params]);
  console.log('%cQUERY DATA', 'color: blue', data);
  return data;
};

class QueryApi {
  api: () => string;

  constructor(api: () => string) {
    this.api = api;
  }

  getQueryKey(searchParams = {}) {
    const api = this.api;

    return !searchParams ? [api()] : [api(), searchParams];
  }

  getQueryFn(searchParams = {}) {
    const api = this.api;

    return !Object.keys(searchParams) ? () => axiosGetForQuery(api()) : () => axiosGetForQuery(api(), searchParams);
  }
}

export default QueryApi;
