import { dehydrate, QueryClient } from 'react-query';
import { Box } from '@mui/system';
import { photosPrefetchList, usePhotosList } from 'services/unsplashed/photos';
import { topicsPrefetchList } from 'services/unsplashed/topics';
import { PaginatedPhoto, Photo } from 'services/unsplashed/types';
import PaginatedPhotoList from 'src/components/PaginatedPhotoList';
import SearchSection from 'src/components/SearchSection';
import usePaginatedResponseList from 'src/hooks/usePaginatedResponseList';

const Home = () => {
  const {
    data: photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePaginatedResponseList<Photo, PaginatedPhoto>({ fetchWith: usePhotosList });

  return (
    <Box>
      <SearchSection />
      <PaginatedPhotoList
        photos={photos}
        disableLoadMore={!hasNextPage || isFetchingNextPage}
        onLoadMore={fetchNextPage}
      />
    </Box>
  );
};

export default Home;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await photosPrefetchList(queryClient);
  await topicsPrefetchList(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
