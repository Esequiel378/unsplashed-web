import { useQuery } from 'react-query';
import http from 'services/unsplashed/http-common';
import { PaginatedPhoto } from 'services/unsplashed/types';

const searchPhotos = async (query: string): Promise<PaginatedPhoto> => {
  const { data } = await http.get<PaginatedPhoto>('/search/photos', {
    params: {
      query,
    },
  });

  return data;
};

interface SearchPhotosProps {
  query: string;
}

export const useSearchPhotos = ({ query: queryString }: SearchPhotosProps) => {
  const query = useQuery<PaginatedPhoto>(['search', 'photos', queryString], () => searchPhotos(queryString));

  return query;
};
