import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query';
import http from 'services/unsplashed/http-common';
import { PaginatedPhoto } from 'services/unsplashed/types';

const photosList = async ({
  pageParam = 1,
  params = {},
}: {
  pageParam?: number;
  params?: Record<any, any>;
}): Promise<PaginatedPhoto> => {
  const { data } = await http.get<PaginatedPhoto>('/photos', {
    params: {
      page: pageParam,
      ...params,
    },
  });

  return data;
};

export const photosPrefetchList = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('photos', photosList);

  return {
    dehydratedState: dehydrate(queryClient),
  } as const;
};

interface PhotoListProps {
  params?: Record<any, any>;
  options?: Record<any, any>;
}

export const usePhotosList = ({ params = {}, options = {} }: PhotoListProps) => {
  const query = useInfiniteQuery<PaginatedPhoto>(
    ['photos'],
    ({ pageParam = 1 }) => photosList({ pageParam, params }),
    options
  );

  return query;
};
