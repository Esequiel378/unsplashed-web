// eslint-disable-next-line unused-imports/no-unused-imports
import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
}
