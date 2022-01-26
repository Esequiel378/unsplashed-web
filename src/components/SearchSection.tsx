import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

import Topics from './Topics';

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
  const router = useRouter();
  const { query } = router.query;

  return (
    <Box>
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
            onSubmit={(event: any) => {
              event.preventDefault();

              const data = new FormData(event.target);
              const query = data.get('query');

              if (!query) return;

              router.push(`/search/photos/${query}`);
            }}
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
              inputProps={{ 'aria-label': 'search free high-resolution photos' }}
              name="query"
              defaultValue={query}
            />
          </Paper>
        </Box>
      </SearchContainer>

      <Box sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Topics />
      </Box>
    </Box>
  );
};

export default SearchSection;
