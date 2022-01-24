import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useSearchPhotos } from 'services/unsplashed/search';
import PaginatedPhotoList from 'src/components/PaginatedPhotoList';
import usePaginatedPhotoList from 'src/components/PaginatedPhotoList/hooks';
import SearchSection from 'src/components/SearchSection';

const SerachPhotos = () => {
  const router = useRouter();
  const { query } = router.query as { query: string };

  const {
    data: photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePaginatedPhotoList({
    fetchWith: useSearchPhotos,
    config: {
      query,
    },
  });

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

export default SerachPhotos;
