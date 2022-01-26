import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useTopicsPhotos } from 'services/unsplashed/topics';
import { PaginatedPhoto, Photo } from 'services/unsplashed/types';
import PaginatedPhotoList from 'src/components/PaginatedPhotoList';
import SearchSection from 'src/components/SearchSection';
import usePaginatedResponseList from 'src/hooks/usePaginatedResponseList';

const Topic = () => {
  const router = useRouter();
  const { topic } = router.query as { topic: string };

  const {
    data: photos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePaginatedResponseList<Photo, PaginatedPhoto>({
    fetchWith: useTopicsPhotos,
    config: {
      slug: topic,
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

export default Topic;
