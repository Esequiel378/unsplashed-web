import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { Photo } from 'services/unsplashed/types';
import MasonryImageList from 'src/components/MasonryImageList';

interface PaginatedPhotoListProps {
  photos: Photo[];
  onLoadMore: () => void;
  disableLoadMore: boolean;
}

const PaginatedPhotoList = ({ photos, onLoadMore, disableLoadMore }: PaginatedPhotoListProps) => {
  return (
    <Container>
      <MasonryImageList photos={photos} />

      <Box sx={{ my: '2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          sx={{
            p: '8px',
            width: '100%',
            backgroundColor: 'background.default',
          }}
          disabled={disableLoadMore}
          onClick={onLoadMore}
        >
          Load more
        </Button>
      </Box>
    </Container>
  );
};

export default PaginatedPhotoList;
