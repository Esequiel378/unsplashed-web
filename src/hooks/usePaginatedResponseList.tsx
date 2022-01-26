import { useCallback, useState } from 'react';
import { UseInfiniteQueryResult } from 'react-query';

interface PaginatedResponseListProps<PaginatedType> {
  fetchWith: (props: any) => UseInfiniteQueryResult<PaginatedType>;
  config?: Record<any, any>;
}

const usePaginatedResponseList = <ResponseType, PaginatedType extends { results: ResponseType[] }>({
  fetchWith,
  config = {},
}: PaginatedResponseListProps<PaginatedType>) => {
  const [page, setPage] = useState(1);

  const query = fetchWith({
    params: {
      per_page: 30,
    },
    options: {
      refetchOnWindowFocus: false,
      getNextPageParam: () => page,
    },
    ...config,
  });

  const { data, fetchNextPage: _fetchNextPage } = query;

  const fetchNextPage = () => {
    setPage(prev => prev + 1);
    _fetchNextPage({ pageParam: page + 1 });
  };

  const getFlatenData = useCallback(() => {
    const pages = data?.pages || [];

    return pages.reduce<ResponseType[]>((acc, page) => [...acc, ...page.results], []);
  }, [data]);

  return { ...query, data: getFlatenData(), fetchNextPage } as const;
};

export default usePaginatedResponseList;
