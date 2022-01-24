import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  accent: {
    main: '#D9C5B2',
  },
  palette: {
    primary: {
      main: '#040403',
    },
    common: {
      black: '#040403',
      white: '#F3F3F4',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#41D3BD',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F3F3F4',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;
