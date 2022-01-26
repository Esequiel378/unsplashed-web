import { QueryClient, useInfiniteQuery } from 'react-query';
import http from 'services/unsplashed/http-common';
import { PaginatedPhoto, PaginatedTopics } from 'services/unsplashed/types';

const topicsList = async ({
  pageParam = 1,
  params = {},
}: {
  pageParam?: number;
  params?: Record<any, any>;
}): Promise<PaginatedTopics> => {
  const { data } = await http.get<PaginatedTopics>('/topics', {
    params: {
      page: pageParam,
      ...params,
    },
  });

  return data;
};

export const topicsPrefetchList = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery('topics', topicsList);
};

interface TopicsListProps {
  params?: Record<any, any>;
  options?: Record<any, any>;
}

export const useTopicsList = ({ params = {}, options = {} }: TopicsListProps) => {
  const query = useInfiniteQuery<PaginatedTopics>(
    ['topics', params],
    ({ pageParam = 1 }) => topicsList({ pageParam, params }),
    options
  );

  return query;
};

const topicsPhotos = async ({
  slug,
  pageParam = 1,
  params = {},
}: {
  slug: string;
  pageParam?: number;
  params?: Record<any, any>;
}): Promise<PaginatedPhoto> => {
  const { data } = await http.get<PaginatedPhoto>(`/topics/${slug}/photos`, {
    params: {
      page: pageParam,
      ...params,
    },
  });

  return data;
};

interface TopicsPhotosProps extends TopicsListProps {
  slug: string;
}

export const useTopicsPhotos = ({ slug, params = {}, options = {} }: TopicsPhotosProps) => {
  const query = useInfiniteQuery<PaginatedPhoto>(
    ['topics', 'photos', slug, params],
    ({ pageParam = 1 }) => topicsPhotos({ slug, pageParam, params }),
    options
  );

  return query;
};
