import { dehydrate, QueryClient, useQuery } from "react-query";
import http from "services/unsplashed/http-common";
import { PaginatedPhoto } from "services/unsplashed/types";

const photosList = async (): Promise<PaginatedPhoto> => {
  const { data } = await http.get<PaginatedPhoto>('/photos');

  return data;
};

export const photosPrefetchList = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('photos', photosList);

  return {
    dehydratedState: dehydrate(queryClient),
  } as const;
};

export const usePhotosList = () => {
  const query = useQuery<PaginatedPhoto>(['photos'], photosList);

  return query;
};

