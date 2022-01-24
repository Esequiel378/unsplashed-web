import { useCallback, useState } from 'react';
import { UseInfiniteQueryResult } from 'react-query';
import { PaginatedPhoto, Photo } from 'services/unsplashed/types';

interface PaginatedPhotoListProps {
  fetchWith: (props: any) => UseInfiniteQueryResult<PaginatedPhoto>;
  config?: Record<any, any>;
}

const usePaginatedPhotoList = ({ fetchWith, config = {} }: PaginatedPhotoListProps) => {
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

  const getPhotos = useCallback(() => {
    const pages = data?.pages || [];

    return pages.reduce<Photo[]>((acc, page) => [...acc, ...page.results], []);
  }, [data]);

  return { ...query, data: getPhotos(), fetchNextPage } as const;
};

export default usePaginatedPhotoList;
