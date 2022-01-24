import { Box } from '@mui/system';
import { photosPrefetchList, usePhotosList } from 'services/unsplashed/photos';
import PaginatedPhotoList from 'src/components/PaginatedPhotoList';
import usePaginatedPhotoList from 'src/components/PaginatedPhotoList/hooks';
import SearchSection from 'src/components/SearchSection';

const Home = () => {
  const {
    data: photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePaginatedPhotoList({ fetchWith: usePhotosList });

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

export async function getStaticProps() {
  const dehydratedState = await photosPrefetchList();

  return {
    props: {
      ...dehydratedState,
    },
  };
}
