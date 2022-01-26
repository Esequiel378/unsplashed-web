import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useSearchPhotos } from 'services/unsplashed/search';
import { PaginatedPhoto, Photo } from 'services/unsplashed/types';
import PaginatedPhotoList from 'src/components/PaginatedPhotoList';
import SearchSection from 'src/components/SearchSection';
import usePaginatedResponseList from 'src/hooks/usePaginatedResponseList';

const SerachPhotos = () => {
  const router = useRouter();
  const { query } = router.query as { query: string };

  const {
    data: photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePaginatedResponseList<Photo, PaginatedPhoto>({
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
