import { createTheme } from '@mui/material';
import { COLOR } from './colors';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 958,
      lg: 1440,
    },
  },
  typography: {
    fontFamily: ['"Jost", sans-serif;'].join(','),
  },
  title: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '150%',
    color: '#333',
  },
  text1: {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '144%',
    color: '#333',
  },
  text2: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '150%',
    color: '#333',
  },
  price: {
    fontWeight: 600,
    fontSize: '18px',
    color: '#333',
  },
  oldPriceText: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '161%',
    textDecoration: 'line-through',
    color: '#999',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
