import { Theme as MUITheme, ThemeOptions as MUIThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme extends MUITheme {
    accent: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends MUIThemeOptions {
    accent?: {
      main?: string;
    };
  }
  export function createTheme(options?: ThemeOptions): Theme;
}
