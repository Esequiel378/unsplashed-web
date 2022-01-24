import { Box, ImageList, ImageListItem } from '@mui/material';
import { Photo } from 'services/unsplashed/types';

interface MasonryImageListProps {
  photos: Photo[];
}

const MasonryImageList = ({ photos }: MasonryImageListProps) => {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={16}>
        {photos.map(photo => (
          <ImageListItem key={photo.id}>
            <img
              src={`${photo.urls.raw}?w=248&fit=crop&auto=format`}
              srcSet={`${photo.urls.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImageList;
