import { useInfiniteQuery } from 'react-query';
import http from 'services/unsplashed/http-common';
import { PaginatedPhoto } from 'services/unsplashed/types';

const searchPhotos = async ({
  query,
  pageParam = 1,
  params = {},
}: {
  query: string;
  pageParam?: number;
  params?: Record<any, any>;
}): Promise<PaginatedPhoto> => {
  const { data } = await http.get<PaginatedPhoto>('/search/photos', {
    params: {
      page: pageParam,
      ...params,
      query,
    },
  });

  return data;
};

interface SearchPhotosProps {
  query: string;
  params?: Record<any, any>;
  options?: Record<any, any>;
}

export const useSearchPhotos = ({ query: queryString, params = {}, options = {} }: SearchPhotosProps) => {
  const query = useInfiniteQuery<PaginatedPhoto>(
    ['search', 'photos', queryString, params],
    ({ pageParam = 1 }) => searchPhotos({ pageParam, params, query: queryString }),
    options
  );

  return query;
};
