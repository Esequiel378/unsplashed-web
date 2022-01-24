import { useCallback, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { photosPrefetchList, usePhotosList } from 'services/unsplashed/photos';
import { Photo } from 'services/unsplashed/types';
import MasonryImageList from 'src/components/MasonryImageList';

const SearchContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(1),
  height: '30rem',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
}));

const SearchSection = () => {
  return (
    <SearchContainer>
      <Box sx={{ width: '30%' }}>
        <Box>
          <Typography variant="h3" color="common.white" sx={{ fontWeight: 'bold' }}>
            Unsplashed
          </Typography>
          <Typography paragraph color="common.white">
            Powered by creators everywhere.
          </Typography>
        </Box>
        <Paper
          component="form"
          elevation={0}
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search free high-resolution photos"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
      </Box>
    </SearchContainer>
  );
};

const ImageList = () => {
  const [page, setPage] = useState(1);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = usePhotosList({
    params: {
      per_page: 30,
    },
    options: {
      refetchOnWindowFocus: false,
      getNextPageParam: () => page,
    },
  });

  const getPhotos = useCallback(() => {
    return data?.pages?.reduce<Photo[]>((acc, page) => [...acc, ...page.results], []) || [];
  }, [data]);

  return (
    <Container>
      <MasonryImageList photos={getPhotos()} />

      <Box sx={{ my: '2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          sx={{
            p: '8px',
            width: '100%',
            backgroundColor: 'background.default',
          }}
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => {
            setPage(prev => prev + 1);
            fetchNextPage({ pageParam: page + 1 });
          }}
        >
          Load more
        </Button>
      </Box>
    </Container>
  );
};

const Home = () => {
  return (
    <Box>
      <SearchSection />
      <ImageList />
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
