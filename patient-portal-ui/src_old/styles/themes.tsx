import { ThemeProvider, createTheme } from '@mui/material/styles';
export const theme_1 = createTheme({
  palette: {
    primary: {
      light: "#b39ddb",
      main: "#673ab7",
      dark: "#512da8",
      contrastText: "#fff",
    },
    secondary: {
      light: "#448aff",
      main: "#2979ff",
      dark: "#2962ff",
      contrastText: "#000",
    },
  },
});
export const theme_2 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ffea00',
    },
    info: {
      main: '#80d8ff',
    },
  },
});
export const theme_3 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e0364c',
    },
    secondary: {
      main: '#f50057',
    },
  },
  direction: 'rtl',
});
export const theme_4 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5a3f36',
    },
    secondary: {
      main: '#f50057',
    },
  },
  direction: 'rtl',
});
export const theme_5 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffe57f',
      paper: '#ce1c1c',
    },
    text: {
      primary: '#00897b',
      secondary: 'rgba(0,0,0,0.7)',
      disabled: 'rgba(0,119,173,0.76)',
    },
  },
  direction: 'rtl',
});